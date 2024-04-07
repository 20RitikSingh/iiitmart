import RazorpayCheckout from "react-native-razorpay";
import Color from "../../../utils/Color";
import Customer from "../../../utils/Customer";
import createOrderItem from "../../../utils/PlaceOrder";
import PlaceOrder from "../../../utils/PlaceOrder";
async function Payment(cart,id,name,email,address,phnumber,navigation){
  var options = {
    image: "https://fontawesome.com/icons/cart-shopping?f=classic&s=solid",
    currency: "INR",
    key: process.env.EXPO_PUBLIC_RZP_ID,
    amount: cart.total*100,
    name: "IIITMart",
    prefill: {
      email: email,
      contact: phnumber,
      name: name,
    },
    theme: { color: Color.TER },
  };
var payId ;
  await RazorpayCheckout.open(options)
    .then((data) => {
      // handle success
      console.log(`Success: ${data.razorpay_payment_id}`);
      payId=data.razorpay_payment_id;
      navigation.navigate("OrdersPage");
    })
    .then(() => {
      createOrder(payId,cart,address,id);
    })
    .catch((error) => {
      // handle failure
      console.log(`Error: ${error.code} | ${error.description}`);
    });
    
};
async function createOrder(payId,cart,address,id){
  try {
    var orderId = await PlaceOrder.placeOrder(payId, cart.total, address, id, false);
    cart.cartItems.map((item) => {
      PlaceOrder.createOrderItem(orderId.createOrder.id, item.quantity, item.total);
    });
  } catch (error) {
    console.error("Error occurred while executing orders:", error);
  }
}


export default Payment;
