import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const YamaButton = (props) => {
    return (
        <Pressable 
             // onPress={onPressHandler} since we no longer can use this we need custom props 
             onPress={props.onPressFunction}
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}} //this will allow 10px around button clickable to make it easier for users
              android_ripple={{color: '#00f'}} //ripple color effect on android when pressed
              style={({ pressed }) => [
                    {backgroundColor: pressed ? '#dddddd' : props.color},
                      styles.button
              ]}
              > 
             <Text style={styles.text}>
                {props.title}
             </Text>
           </Pressable>

    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10, 
        textAlign: 'center',
        fontWeight: 'bold'
      },
      button: {
        width: 150,
        height: 50,
        backgroundColor: 'green',
        alignItems: 'center'
      },
})

export default YamaButton;