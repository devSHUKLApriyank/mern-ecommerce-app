import { createContext, useState} from "react";
import { products } from "../assets/assets";


export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState("");
    const [showSearch,setShowSearch] = useState(false) 

    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch
    }

    return (
        <Shopcontext.Provider  value ={value}>
            {props.children}
        </Shopcontext.Provider>
    )

}


export default ShopcontextProvider;