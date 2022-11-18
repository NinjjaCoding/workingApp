//to use Hook State in order to create funtion components in newer version instead of class components like oldv version
//so  we need to import usueState from React
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


/*this arrow function defined as const returns a block of JSX code and like HTML code 
of web, forms the struture of the page. */
const App = () => {
//we can change the button from statically function to dynamic function suing state hooks 
//or to update state..change text to say my name and input new name then update the changed state  so we need const
    const [ name, setName ] = useState('Yama')

    //we can create another const to count sessions and update how many sessions
    const [session, setSession ] = useState({ number: 6, title: 'state'})

    //lets try another go at state this time save a boolean value in the state adn use it in text display we create a const function 
    //and name it current meaning if it is current session or not..then we create a button with conditional boolean expression in it to check 
    const [current, setCurrent ] = useState(true)

    //excersize--create add button with a counter and text that says you clicked this many times
    const [counter, setCounter ] = useState({})

//the onPress function instead of inline defined was replaced by function defined separately as a const named "onClickHandler"
//and we can associate many events to this onClickHander function
    const onClickHandler = () => {
    setName('Programming with Yama')
    setSession({ number: 7, title: 'Style'})
    setCurrent(false)
    }

    //style={styles.body} means this style is applied to body of app page and if we change bckgrnd color then it would match the height and width of the view tag 
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text> 
      <Text style={styles.text}>This is session number {session.number} and about {session.title} </Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button style={styles.button} title='Update State' onPress={onClickHandler}></Button>
    
    <View style={styles.view1}>
         <Text style={styles.text}> 1 </Text>
    </View>
    <View style={styles.view2}>
         <Text style={styles.text}> 2 </Text>
    </View>
    <View style={styles.view3}>
         <Text style={styles.text}> 3 </Text>
    </View>
    </View>
    
  );
}; 
//buttons require the onPress method for something to happen when clickng the button
    //and muust define a function inside the onPress method, ex cliking takes you to checkout page or shopping page, etc
// <Button title='My PodCast Channel' onPress={()=>{Linking.openURL('https:\\youtube.com')}}></Button>
    //removed this button from above view area when done with excersize. 
    //the onPress function instead of inline defined was replaced by function defined separately as a const named "onClickHandler"

//this section is like CSS for HTML that defines the style of each component..
const styles = StyleSheet.create({
  body: {
    //the text did not center in middle of screen because our view tag is only assigned to be as high as the text..
    //this is where flex comes into play
    flex: 1,
    //width: 400,
   // height: 600,
    flexDirection: 'column',
    //flexDirection: 'row-reverse',
    backgroundColor: 'blue',
    //alignItems: 'stretch',
    alignItems: 'center', //this has flex-end, flex-start, etc props
    //justifyContent: 'center',
    //justifyContent: 'space-around',
    justifyContent: 'flex-end',
    borderWidth: 10,
    borderColor: 'red', 
    borderRadius: 25,
    margin: 20
        
  },

  //to make text more readable we wil give it separate style we name it Text 
  //and assign to text tag to see the changes styles={styles.text} on the Text tag
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
    

  }, 
  button: {
    padding: 30,
    margin: 30, 
  },
  view1: {
    flex: 2,
    //width: 100,
    //height: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 3,
    //width: 100,
    //height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 5,
   // width: 100,
    //height: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
  



});

//then finally export the app funtion to be displayed as output in outher parts of the app if needed 
export default App;
