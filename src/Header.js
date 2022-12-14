import React from "react";
import { StyleSheet, View, Text } from "react-native";



const HEADER = (props) => {
    return (
        <View style={styles.view}
        >
            <Text style={styles.text}>
                React Native tutorials
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'

    }
    
})

export default HEADER;