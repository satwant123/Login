import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, Platform } from 'react-native';

export default class Scrollview extends Component {
   render() {
      return (

         <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.containerViews} >
               <Text style={styles.item}>Canada</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Smiley</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Navy</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Gavy</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Shavy</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Avy</Text>
            </View>

            <View style={styles.containerViews}>
               <Text style={styles.item}>Smiley</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Navy</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Gavy</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Shavy</Text>
            </View>
            <View style={styles.containerViews}>
               <Text style={styles.item}>Avy</Text>
            </View>
         </ScrollView>

      );
   }
}

const styles = StyleSheet.create(
   {
      scrollView:
      {
         alignSelf: 'stretch',
      },

      item:
      {
         padding: 15,
         alignSelf: 'stretch',
         color: 'black',
         fontSize: 18
      },

      containerViews:
      {
         width: '93%',
         padding: 10,
         margin: 10,

         backgroundColor: 'lightpink',
      }
   });