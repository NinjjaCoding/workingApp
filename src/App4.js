
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput
} from 'react-native';

//this is about Text and text input fields : Please write your name
//then a TextInput Field for user to type name
//then we create a const function to store the name data entered or typed in TextInput
const App = () => {

  const [ name, setName ] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}
      > Please write your name 
      </Text>
      <TextInput 
            multiline 
            style={styles.input} 
            placeholder='e. g John Smith'
            onChangeText={(value) => setName(value)}
            keyboardType='phone-pad' //or differnt keyboard for email or numbers only etc
            maxLength={50}
            editable={true}
            secureTextEntry //this will hide what is typed like in password situations 
          />
          <Text style={styles.text}
      > your name is: {name} 
      </Text>
    </View>
  );
}; 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange', alignItems: 'center'     
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,  
  },
  input: {
    borderWidth: 2,
    width: 250,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 25
  } 


});

export default App;
