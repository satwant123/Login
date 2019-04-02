import  React from 'react';
import {View,ImageBackground,TextInput,StyleSheet} from 'react-native';

const Login = (props) => {
    return (
      <View  style={styles.container}>

        <ImageBackground source={require('../images/image5.jpeg')} style={{width: '100%', height: '100%'} }>
         <TextInput  style={styles.textInput1} placeholder='Enter your name '/> 

         <TextInput  style ={styles.textInput1}placeholder='Enter  your password'/>
         
  </ImageBackground>
  </View>
    );
  }
  const styles=StyleSheet.create(
    {



        container:
        {
            flex:1,
            justifyContent:'center',
            alignItems:'center',

        },
        textInput1:
        {
          borderRadius:20,
          margin:10,
          padding:10,
          justifyContent:'center',
          borderWidth:2,



        }

    }

);