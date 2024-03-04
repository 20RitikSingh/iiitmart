import { Cashfree } from "cashfree-pg"; 

Cashfree.XClientId = "TEST10145183e76bd803d0f176fb04ab38154101";
Cashfree.XClientSecret = "cfsk_ma_test_5e1c9825fa82cdd0ddd8280060f5f029_3ab9f2c8";
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

function createOrder() {
  var request = {
    "order_amount": "1",
    "order_currency": "INR",
    "customer_details": {
      "customer_id": "node_sdk_test",
      "customer_name": "",
      "customer_email": "example@gmail.com",
      "customer_phone": "9999999999"
    },
    "order_meta": {
      "return_url": "https://test.cashfree.com/pgappsdemos/return.php?order_id=order_123"
    },
    "order_note": ""
  }

  Cashfree.PGCreateOrder("2023-08-01", request).then((response) => {
    var a = response.data;
    console.log(a)
  })
    .catch((error) => {
      console.error('Error setting up order request:', error.response.data);
    });
}
export default createOrder;