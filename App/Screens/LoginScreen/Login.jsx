import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import color from '../../../utils/Color'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View>
      {/* <Text>Login</Text> */}
      <Image style={styles.loginImg} source={require('../../../assets/image/login.png')} />
      <View style={styles.subCont}>
      <Text style={{fontSize:30, color: color.WHITE, textAlign: 'center'}}>
      Welcome to IIITM's very own grocery store!!
      </Text>
      <Text style={{fontSize:17, color: color.WHITE, textAlign: 'center', marginTop:15}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nemo doloribus beatae expedita?
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress }>
        <Text style={{color:color.PRIMARY, fontSize:17, fontWeight:'600'}}>Let's get started!!</Text>
      </TouchableOpacity>
            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImg :{
    width : '100%',
    height : '55%',
    borderWidth:2,
    borderColor: color.BLACK,
  },
  subCont:{
    width:'100%',
    height:'50%',
    backgroundColor: color.PRIMARY,
    marginTop:-35,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
  },
  button:{
    padding:15, 
    backgroundColor: color.WHITE,
    borderRadius: 80,
    alignItems:"center",
    justifyContent:"center",
    elevation: 8,
    marginTop:20
  }
})
