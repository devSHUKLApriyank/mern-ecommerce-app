import { createContext } from "react";
import { products } from "../assets/assets";


export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;

    const value = {
        products, currency, delivery_fee
    }

    return (
        <Shopcontext.Provider  value ={value}>
            {props.children}
        </Shopcontext.Provider>
    )

}


export default ShopcontextProvider;