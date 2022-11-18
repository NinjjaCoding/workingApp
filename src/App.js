import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function ScreenA() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
    </View>
  )
}
//now we create a the second screen we call it ScreenB

function ScreenB() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> Screen B </Text>
    </View>
  )
}

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Screen_A"
          component={ ScreenA }      
        />
        <Stack.Screen
          name='Screen_B' 
          component={ ScreenB }  
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
    
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})

export default App;