import RazorpayCheckout from "react-native-razorpay";
import Color from "../../../utils/Color";

const Payment=(cart) => {
    var options = {
    description: 'Credits towards consultation',
    image: 'https://fontawesome.com/icons/cart-shopping?f=classic&s=solid',
    currency: 'INR',
    key: process.env.EXPO_PUBLIC_RZP_ID,
    amount: cart?.total*100,
    name: 'IIITMart',
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: Color.TER}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}

export default Payment;