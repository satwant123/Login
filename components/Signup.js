import   React from 'react';
import {View,TouchableOpacity,TextInput,StyleSheet,Text,ImageBackground} from 'react-native';

export default class Signup extends React.Component{
    render()
    {
        return(
            <View style={styles.container}>
            
            <ImageBackground source={require('../images/moon.jpg')} style={{width: '100%', height: '100%'} }>
            <TextInput style={styles.textinput1}
               
               placeholder='Enter your name' />
    
               <TextInput   style={styles.textinput1}  placeholder='Enter your password'/>
               
               
    
               <TouchableOpacity>
                   <Text  style={{ aligncontent:'center',color:'black',borderRadius:10,borderWidth:1 ,margin:26,padding:15,backgroundColor:'seagreen'}}>Login</Text>
               </TouchableOpacity>
        </ImageBackground>
            
        </View>
        );
    }
}

const styles=StyleSheet.create



(
{
        
    container:
 {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  backgroundColor: 'rgba(0,0,0,0)',

},
textinput1:
{
    justifyContent:'center',
alignItems:'center',
height: 50,
borderColor: 'black',
 borderWidth: 1,
 backgroundColor:'white',
 fontSize:15,
 padding:11,
 borderWidth:2,
 fontWeight:'bold',
 margin:20,
}

}

);


