import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/Home';
import TabNavigation from './TabNavigation';
import ProductPage from '../Screens/ProductScreen/Product';
import Carousel from '../Components/Carousel/Carousel';
import Orders from '../Screens/OrdersScreen/Orders';
import OrderDetails from '../Screens/OrdersScreen/OrderDetails';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false}}>
      <Stack.Screen  name="TabNaviagtion" component={TabNavigation} />
      <Stack.Screen name="Product" component={ProductPage} />
      <Stack.Screen name="OrdersPage" component={Orders} />
      <Stack.Screen name="OrdersDetailsPage" component={OrderDetails} />
      {/* <Stack.Screen name="Crousel" component={Carousel} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
export default MyStack;