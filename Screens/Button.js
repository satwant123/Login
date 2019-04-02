import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default (props) => {
    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}>
            <Text>{props.label}</Text>
        </TouchableOpacity>

    )

};
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



