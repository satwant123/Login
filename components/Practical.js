import React, {Component} from 'react';
import {View,Text,Alert,TextInput,TouchableOpacity} from 'react-native';

export default class Practical extends Component{
    constructor(){
        super()
        this.state =({

           number:'',
           

           })

}
    react_native()
    {
        a=this.state.number
        if(a%3==0)
        {
            Alert.alert("React")
        }
        else if(a%5==0)
        {
           Alert.alert("Native") 
        }
        else if(a%3==0&&number%5==0)
    {

        Alert.alert("React-native")
    }
    else{

        Alert.alert("return same number")
    }
    

    }
    render()
{
    return(
        <View style ={styles.container} >
        
        <Text>Hey this is the text</Text>
        
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'lightpink'}}
        placeholder='Enter Number here' value={this.state.number} onChangeText={(text)=>this.setState({number:text})}/>
    
<TouchableOpacity onPress={()=>{this.react_native(this.state.number)}}>
check
</TouchableOpacity>
        </View>
);
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'powderblue',
    },
    button: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        alignContent:'center',
        backgroundColor:'red',
    }    
})
