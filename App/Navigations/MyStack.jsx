import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/Home';
import TabNavigation from './TabNavigation';
import ProductPage from '../Screens/ProductScreen/Product';
import Carousel from '../Components/Carousel/Carousel';
import Orders from '../Screens/OrdersScreen/Orders';
import OrderDetails from '../Screens/OrdersScreen/OrderDetails';
import SearchScreen from '../Components/SearchBar/SearchScreen';
import Checkout from '../Screens/CheckOutScreen/CheckOut';
import CakeDetailPage from '../Screens/CakeScreen/CakeDetailPage';
import OrderSummaryPage from '../Screens/CheckOutScreen/CheckOut';
import Payment from '../Screens/CheckOutScreen/Payment';
import Profile from '../Screens/ProfileScreen/Profile';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false}}>
      <Stack.Screen  name="TabNaviagtion" component={TabNavigation} />
      <Stack.Screen name="Product" component={ProductPage} />
      <Stack.Screen name="OrdersPage" component={Orders} />
      <Stack.Screen name="OrderSummaryPage" component={OrderSummaryPage} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Payment" component={Payment} /> */}
      <Stack.Screen name="CakeDetailPage" component={CakeDetailPage} />
      {/* <Stack.Screen name="Crousel" component={Carousel} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
export default MyStack;