/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */



import React, {Component} from 'react';
import {StyleSheet, TextInput, View,TouchableOpacity,Text,FlatList,Button} from 'react-native';



export default class App extends Component {
  

  constructor(props){
    super(props)
    this.state ={
      input:'',
      a:["smiley","Avy","Yogesh","Ankit","Motu"]
    }
  }
 
  render()
{
    return (
      <View>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'lightpink'}}
        placeholder='Enter text here' onChangeText={(text) => this.setState({ Input : text })}/>
        <TouchableOpacity  onPress={() =>{
          const Final=this.state.a.Final.push(this.state.input)   
          this.setState({
            a:Final
          })  
         }} style={Styles.Add }>
         <Text style={{ color: 'white' }} >
         Add</Text>
     </TouchableOpacity>

     <FlatList  style={{flexGrow : 0, backgroundColor : 'black',}} data={this.state.a}
                    renderItem={({ item }) => 
                        <View style={Styles.ViewFlatList}>
                            <Text onPress={this.showAlert1} style={Styles.TextFlatList}>{item}</Text>
                        </View>}  >
                        
                </FlatList>
</View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  Add :
  {

    width: '20%',
    height: '5%',
    marginLeft: '75%',
    marginTop: '1.8%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'absolute'

  }
});