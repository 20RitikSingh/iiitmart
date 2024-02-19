import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store"
import Home from './App/Screens/HomeScreen/Home';
import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import MyStack from './App/Navigations/MyStack';


export default function App() {

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_YW11c2luZy1vcmlvbGUtNTMuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <ToastProvider>
        <View style={styles.container}>

          <SignedIn>
            <NavigationContainer>
              <MyStack/>
            </NavigationContainer>
            {/* <Home /> */}
          </SignedIn>
          <SignedOut>
            <Login />
          </SignedOut>
        </View>
      </ToastProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 30,
    marginTop: StatusBar.currentHeight
  },
});
