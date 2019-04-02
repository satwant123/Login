import React from 'react';
import { TouchableOpacity, Text ,FlatList} from 'react-native';

    const FlatList= ({data}) => {
        return (
            <FlatList
                style={styles.flatListStyle}
                horizontal={false}
                data={data}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => (
                  <ListItem
                  title= {item.name}
                  
                  />
              )}
           />

        )}
        


  
        <TouchableOpacity style={style.button} onPress={props.onPress}>
            <Text>{props.label}</Text>
        </TouchableOpacity>



const style = StyleSheet.create(
    {


        button:
        {
            height: 20,
            width: 30,
            borderRadius: 25,
            color: '#fb356b',

        }
    }

);