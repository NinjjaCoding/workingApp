import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import HEADER from './Header';
import YamaButton from './CustomButton';

//Buttons, touchables, pressables
//onPress basic form onPress={() => {}}
const App = () => {

  const [ name, setName ] = useState(''); //this the empty state created to store the name entered below the textinput space
  const [ submitted, setSubmitted ] = useState(false);
  const [ showWarning, SetShowWarning ] = useState(false);
  const onPressHandler = () => {
    if(name.length > 3 ) { //to check the input box has character enetered and must be greater than 3
      setSubmitted(!submitted); //in the else section we write a warning message to user why nothing happened..then in an array we create buttons ok
    } else { //this is where we defind Modal showwarning 
      SetShowWarning(true); //we set it true and change visible prop below to showWarning 
      
      
      //on IOS we can unlimited # of these buttons but Android only 2 buttons 
      // Alert.alert('Warning', 'Your name must be loner than 3 charaters', [
      //   { text: 'Ok', onPress: () => console.warn('Ok Pressed')},
      //   { text: 'Do Not Show', onPress: () => console.warn('Do not show Pressed')},
      //   { text: 'Cancell', onPress: () => console.warn('Cancell Pressed')},
      // ], { cancelable: true, onDismiss: () => console.warn('Alert dismissed!')}
      // ) 
      // ToastAndroid.show(
      //   'Your name must be longer than 3 characters',
      //   //ToastAndroid.LONG //these puts the message below and time element of its own that disappears
      //   ToastAndroid.SHORT
      // )
     // ToastAndroid,showWithGravityAndOffset(
       //'name must be loger than 3 chanr',
    //    ToastAndroid.LONG,
    //    ToastAndroid.TOP,
    //    100,
    //    200
    //  ) is another one that allows location placement of message 
     //
      // ToastAndroid.showWithGravity( //this allows us to control where the message is displayed by default it is on bottom of screen
      //   'your name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.CENTER
      // ) 
    }
  }
      //so now instead of these above components, Alert etc..we can use Modal component to show the warning in more personalized 
//the modal component displays a page a pop up on the current page and we can use any component within it. 
  return (
    <ImageBackground style={styles.body
    }
    source={require('../assets/Planet.jpg')}
    >
      <HEADER/>

      <Modal //this visiable modal shows the message on separate page before anything is entered to control this state we create const state and set the intial value to false 
        visible={showWarning} //once 3 charact. warn page has been shown we cannot go back 
        //we can use onRequestClose prop to go back usisng back button
             onRequestClose={() => SetShowWarning(false)
            }  //to center warning page put in a new VIew component and center style it... 
            animationType='fade' //slide' //this will the modal warning screen into view
            hardwareAccelerated //this will help performance  
     >  
        <View style={styles.centered_view}> 
        <View style={styles.warning_modal}>
          <View style={ styles.warning_title }>
            <Text style={styles.text}> Warning!! </Text>
          </View>
              <View style={styles.warning_body}>
                <Text style={styles.text} >Name must be longer than 3 haracters </Text>
              </View>
              <Pressable 
                  onPress={() => SetShowWarning(false)}
                  style={styles.warning_button}
                  android_ripple={{color: 'orange'}}
              > 
                <Text style={styles.text}>OK</Text>
              </Pressable>
          </View> 
        </View> 
        </Modal>
                <Text style={styles.text}
                     > Please write your name 
                 </Text>

          <TextInput 
            //multiline 
            style={styles.input} 
            placeholder='e. g John Smith'
            onChangeText={(value) => setName(value)} //change value typed in box
            keyboardType= 'phone-pad' //'numeric' //or differnt keyboard for email or numbers only etc
            maxLength={50}
            editable={true}//limit number of charactr allowed to enter
            secureTextEntry //this will hide what is typed like in password situations 
           // editable={false} //will make typing disallowed 
           secureTextEntery //will hide the characters as types like in password situations
          />
          <YamaButton onPressFuntion={onPressHandler} //so even though we use custom button we still need to stylize it
                        title={submitted ? 'Clear' : 'Submit'}
                        color={'#00ff00'}
           
           /> 
           <YamaButton onPressFuntion={onPressHandler} //we can add same custom button import it and change its title and funtion to reduce code and reduce errors
                        title={'Testing'}
                        color={'#ff00ff'}
                        style={{margin:10}} //dont know why this do not work
            //so we can use custom components like for headers separately and import it to main App.js
            //this way reduces code on App.js thus load time better 
           /> 


            {/* <Button title={submitted ? 'Clear' : 'Submit'} //this will change title to clear or submit depending on situation
           // onPress={() => {}} //this can be expressed inline or separately as const onPressHandler 
           onPress={onPressHandler}
           color='blue'
           //disabled={submitted} //will disable pressablity of button after submitted 
           />  */} 

           {/* <TouchableOpacity 
            onPress={onPressHandler}
            style={styles.button}
            activeOpacity={0.2} //0.2 is default between 0 and 1 closer to 1 the higher opacity and controls the amount of opacity when button is clicked
            //<TouchableHighLight> is another component that can have custom color & underlayColor='Black" can specify the color
            //<TouchableWithoutFeedback> is another touchable component that does not proive the opacity feedback
            //
            > 
             <Text style={styles.text}>{submitted ? 'Clear' : 'Submbitted' } </Text>
           </TouchableOpacity> /// we could also use <Pressable> component to make buttons works similar to wihtoutFeedback  */} 
           {/* <Pressable 
              onPress={onPressHandler} 
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}} //this will allow 10px around button clickable to make it easier for users
              //onLongPress={onPressHandler} delays on long presss
              //delayPress={2000}  set press hold time your self
              //style={styles.button}
              android_ripple={{color: '#00f'}} //ripple color effect on android when pressed
              style={({ pressed }) => [
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
                      styles.button
              ]}
              > 
             <Text style={styles.text}>
                {submitted ? 'Claer' : 'SubmitTed'}
             </Text>
           </Pressable> */}
           
              
           
           
           {submitted ?  //this will change the title to button accroding click of the button 
           //since we have image and text for same purpose we put them in same View component
             <View style={styles.body}> 
            <Text style={styles.text}>
              You are registered as {name}
            </Text>
            <Image 
            source={require('../assets/done.jpg')}
           // source={{ uri: 'www.whateverpictureaddress.com'}}
            style={styles.image}
            resizeMode='stretch' //to make the picture fit the box or size 
            blurRadius={3} //to blur the image
          
     />
     </View>
            :
            // null} so here instead of null we can display an image when someone enters their names in the input box
            <Image 
               // source={require('./assets/Planet.jpg')} source can also be internet or a URL
                source={{ uri: 'www.rt.com'}}
                style={styles.image}
                resizeMode='stretch' //to make the picture fit the box or size 
            />


           }
    
    </ImageBackground>
  );
}; 

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
   // backgroundColor: 'gray', 
    alignItems: 'center'     
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10, 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 2,
    width: 250,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  }, 
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    margin: 10,
  },
  warning_modal: {
    width: 277,
    height: 377,
    backgroundColor: 'darkblue',
    borderWidth: 17,
    borderColor: 'white',
    borderRadius: 40,

  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderWidth: 5,
    borderColor: 'red'
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    //borderRadius: 20
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    backgroundColor: 'green',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 95,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  }



});

export default App;
