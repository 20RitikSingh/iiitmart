
import getCustomers from "../../../utils/CustomerAPI";
export default function addToCart(user,item) {
  
       getCustomers().then((res) => {
           const customers = res?.customers;
           const currentUser = customers.find((customer) => customer.clerkId === user.id);
        console.log(currentUser)
        const userCart = currentUser?.cart
        console.log(userCart)
       });
  

}