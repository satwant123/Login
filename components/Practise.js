import React, {Component} from 'react'
import {View,Text,FlatList,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native'

export default class Practise extends Component{
    constructor(){
        super()
                this.state={
                    
                    textInputUser:'',
        name:['Smiley','Avy','Shavy','Gavy','Ankit','Yogesh']
                }
            }
            render()
            {
                return(
                    <View style={styles.container}>
                    <TextInput   style={styles.textinput1}
                       
        placeholder='Enter text here'
        onChangeText={(text)=> this.setState({textInputUser:text})} />
        <TouchableOpacity  style={styles.button1} onPress={()=>
        {
Alert.alert('text is ' + this.state.textInputUser)
const a=this.state.name
a.push(this.state.textInputUser)
this.setState({
    name:a
})
        }}>
            <Text  style={{color:'white'}}>Add</Text>
        </TouchableOpacity>

                
                        
                        <FlatList data={this.state.name}
                        renderItem={({item} )=>(
                            <View style={styles.view1}>
                                <Text style={styles.text1}>{item}</Text>
                            </View>
                        )
                        }>

                    </FlatList>
                    </View>
                );
            }
            
        }
    const styles = StyleSheet.create(
        {
        
            container:
         {
          flex: 1,
          justifyContent: 'flex-start',
          
          backgroundColor: 'lightpink',
        
        },
        text1:
        {
            flex:1,
            fontSize:15,
            margin:10,
            padding:5,
            fontWeight:'bold',
        },
        view1:
    {
borderStyle:'solid',
borderWidth:2,
borderColor:'black',

        
    },
    textinput1:
    {

        height: 50,
        borderColor: 'black',
         borderWidth: 1,
         backgroundColor:'white',
         fontSize:15,
         padding:11,
         borderWidth:2,
         fontWeight:'bold',
    },
button1:
{
    height: 50,
    alignItems:'center',
        borderColor: 'black',
         borderWidth: 1,
         backgroundColor:'red',
         fontSize:15,
         padding:11,
         borderWidth:2,
         fontWeight:'bold',
         
     

    }





        

        
    }
    );
