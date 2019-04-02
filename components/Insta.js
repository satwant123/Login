import React from 'react';
import{View ,Image,Text,StyleSheet} from 'react-native';


export default class Insta  extends React.Component
{
render(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          
<Text style ={{color:'black',
padding:15,
fontSize:20,
fontFamily:'sans-serif-medium',
paddingLeft:50,
justifyContent:'center',

borderWidth:1,



}}> Instagram</Text>
<View>
    
    <Text style={{ fontSize:20,fontStyle:'italic',justifyContent:'center' }}>Butterfly</Text>


    <Image source={require('../images/butterfly.jpeg')}   style={{width: '100%', height: '60%'} }/>

    <View style={styles.container}>
<Image source={require('../images/like.png')}   style={{width: '10%', height: '10%'} }/>
<Image source={require('../images/speech-bubble.png')} style={{width:'10%',height:'10%'
}}/>



<Image source={require('../images/apple.jpeg')}   style={{width: '100%', height: '60%'} }/>


</View>





            </View>
            </View>


    )
}
};




