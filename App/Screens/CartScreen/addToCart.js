import CartAPI from "../../../utils/CartAPI";
export default function addToCart(userId,product,quantity) {
    try{
        CartAPI.UpdateCart(product.id,quantity,userId).then((res) => {
            console.log(res)
        })
    }
    catch(error) {
        console.log(error)
    }

  
}