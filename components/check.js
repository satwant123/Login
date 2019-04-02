/*import React, {Component} from 'react';
import{TextInput,View, StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
//import FlatList from '../App';

export default class check extends Component{


    

    constructor(){
        super()
        this.state ={
    value:'',
      name:['smiley','ankit','doreamon','arpanSir']

        };
    }

render()
{
    return(
        <View style ={styles.container} >
         <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'lightpink'}}
        placeholder='Enter text here'/>
         
           <TouchableOpacity onPress={()=>{
                const a=this.state.name
                const b=this.state.value
      for (i=0;i<=a.length-1;i++)

      {
  
         if(a[name]==b)
         {
             alert.alert('this item exist in the list')
         }
           }}
        }  />

    text
           </TouchableOpacity>
           
            


            <FlatList style={{ flexGrow:0}}
            data={this.state.name}
            renderItem={({item,index}) => (
                <View >
                    <Text >{item}</Text>
                >
             </View>

            )
            }>
            </FlatList>
        
           
    );
}





} const styles = StyleSheet.create(
 {
container:
{
    flex:1,
    
    


    backgroundColor: 'powderblue'
  },
  
  textInput:
  {
    width: '100%',
    paddingHorizontal: 15,
    height: 40,
    fontSize: 50,
    borderWidth: 1,
    


},
button: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    alignContent:'center',
    backgroundColor:'red',

 }
}
),
