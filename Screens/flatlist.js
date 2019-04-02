/*import React, {Component} from 'react';
import{TextInput,View, StyleSheet,Button,Text,FlatList} from 'react-native';
//import FlatList from '../App';
import FlatList from Flatlist
import { Flatlist } from '.';

export default class flatlist extends Component{


   /* showAlert()
{
Alert.alert('Back');
}
    constructor(){
        super()
        this.state ={
            textColor:'pink',
            name:['smiley','ankit','doreamon','arpanSir']
    
        };
    }

render()
{
    return(
        <View style ={styles.container} >
         <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'lightpink'}}
        placeholder='Enter text here'/>
         
            <Button 
            onPress={()=>{
            const a=this.state.name;
            a.push('avy')
            this.setState({name:a})
        }}
        title='Add'/>
            


            <FlatList style={{ flexGrow:0}}
            data={this.state.name}
            renderItem={({item,index}) => (
                <View >
                    <Text >{item}</Text>
                 <Text onPress={this.showAlert} style={styles.TextFlatList}>{item}</Text>
             </View>

            )
            }>
            </FlatList>
            </View>
           
    );
}*/
render()
{
    return(

<View { style = styles.FlatListContainer}>
<FlatList>
 data = {this.props.FlatListData}
</FlatList>
</View>

    )
};



} const styles = StyleSheet.create(
 {
    FlatListContainer:
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
 )
