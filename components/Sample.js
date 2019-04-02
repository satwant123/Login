
import React from 'react'
import { View } from 'react-native'


export default class Sample extends React.Component {

    constructor() {
        super()

    }

    sum(a, b) {
        return sum1(a, b)
    }

    sum1 = function (a, b) {
        return a + b
    }



    render() {
        return (
            <View>

            </View>
        )
    }
}