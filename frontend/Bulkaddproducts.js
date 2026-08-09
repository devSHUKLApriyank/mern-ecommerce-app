/**
 * bulkAddProducts.js
 * ---------------------------------------------------------
 * Bulk-uploads all products from products-data.json to your
 * backend's Add Product API, using the actual image files
 * from your frontend/src/assets folder.
 *
 * Assumes the common "Forever/GreatStack" style ecommerce
 * backend structure:
 *   POST /api/user/admin      -> { email, password } => { token }
 *   POST /api/product/add     -> multipart form-data, header "token"
 *
 * If your routes/fields differ, adjust the CONFIG and the
 * addProduct() function below to match your actual API.
 * ---------------------------------------------------------
 *
 * SETUP:
 *   1. npm install axios form-data
 *   2. Put this file + products-data.json inside your
 *      "frontend" folder (next to /src/assets), so IMAGES_DIR
 *      below points at your real .png files.
 *   3. Fill in BACKEND_URL, ADMIN_EMAIL, ADMIN_PASSWORD.
 *   4. Make sure your backend server is running.
 *   5. Run:  node bulkAddProducts.js
 */

import fs from "fs";
import path from "path";
import axios from "axios";
import FormData from "form-data";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- CONFIG (edit these) ----------------
const BACKEND_URL = "http://localhost:4000";      // your backend base URL
const ADMIN_EMAIL = "admin@example.com";           // your admin login email
const ADMIN_PASSWORD = "admin123";              // your admin login password
const IMAGES_DIR = path.join(__dirname, "src", "assets"); // folder with p_img1.png etc.
const DESCRIPTION =
  "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.";
// -------------------------------------------------------

const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "products-data.json"), "utf8")
);

async function login() {
  const res = await axios.post(`${BACKEND_URL}/api/user/admin`, {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  });
  if (!res.data?.token) {
    throw new Error("Login did not return a token. Check credentials / route.");
  }
  return res.data.token;
}

async function addProduct(product, token) {
  const form = new FormData();
  form.append("name", product.name);
  form.append("description", DESCRIPTION);
  form.append("price", String(product.price));
  form.append("category", product.category);
  form.append("subCategory", product.subCategory);
  form.append("sizes", JSON.stringify(product.sizes));
  form.append("bestseller", String(product.bestseller));

  product.image.forEach((imgName, i) => {
    const imgPath = path.join(IMAGES_DIR, `${imgName}.png`);
    if (!fs.existsSync(imgPath)) {
      throw new Error(`Image not found: ${imgPath}`);
    }
    // Backend commonly expects fields named image1, image2, image3, image4
    form.append(`image${i + 1}`, fs.createReadStream(imgPath));
  });

  const res = await axios.post(`${BACKEND_URL}/api/product/add`, form, {
    headers: { ...form.getHeaders(), token },
  });
  return res.data;
}

async function run() {
  console.log(`Loaded ${products.length} products from products-data.json`);
  console.log("Logging in as admin...");
  const token = await login();
  console.log("Login successful. Starting upload...\n");

  let success = 0;
  let failed = 0;

  for (const product of products) {
    try {
      const result = await addProduct(product, token);
      if (result.success) {
        console.log(`✅ Added: ${product.name} (${product._id})`);
        success++;
      } else {
        console.log(`❌ Rejected: ${product.name} -> ${result.message}`);
        failed++;
      }
    } catch (err) {
      console.error(
        `❌ Failed: ${product.name} ->`,
        err.response?.data || err.message
      );
      failed++;
    }
    // small delay so you don't hammer your own server
    await new Promise((r) => setTimeout(r, 250));
  }

  console.log(`\nDone. ${success} succeeded, ${failed} failed.`);
}

run().catch((err) => {
  console.error("Fatal error:", err.response?.data || err.message);
});