
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';


const App = () => {

  //we can create a state in the form of an array and put objects in it that we are going to display the content of the page
  const [ Items, setItems ] = useState([
    { name: 'Item 1'},
    { name: 'Item 2'},
    { name: 'Item 3'},
    { name: 'Item 4'},
    { name: 'Item 5'},
    { name: 'Item 6'},
    { name: 'Item 7'},
    { name: 'Item 8'},
    { name: 'Item 9'},
    { name: 'Item 10'},
    { name: 'Item 11'},
    { name: 'Item 12'},
    { name: 'Item 13'},
   // {key: '14', name: 'Item 14'},
    //{key: '15', name: 'Item 15'},
    {key: '99', name: 'Item 99'},
  ])

 /* 
 or so if we have several items like above then we would have to render them one by one
 //but we can access them in an arrary and use a function to obtian items in arrary
 return (      //we could map items to the array 
 <Text style={styles.text }> Item 1 </Text> 
         <Text style={styles.text }> Item 1 </Text> 
        <Text style={styles.text }> Item 2 </Text> 
        <Text style={styles.text }> Item 3 </Text> 
        etc...
              <Text style={styles.text }> {item.item} </Text> we use the item object inside Items.map to get items 
if we increase the item numbers it will go off screen so we need the ScrollView component 
some scroll when pulled it refreshes for this we use refreshControl component..
but does not stop the spinning ball so e need const [ Refreshing, setRefreshing ] = useState(false)
next prop is onRefresh to exeucute the fucntion when it is pulled down..
*/

const [ Refreshing, setRefreshing ] = useState(false);

const onRefresh = () => {
  setRefreshing(true);
  setItems([...Items, { name: 'Item 99' }]);
  setRefreshing(false); 
}
 //{key: '5',, name: 'Item 5}an array must have a key and name so if we are to remove the key and just the name then keyexctractor
//if our data did not have a key then we can use keyExtractor as a function
//we use 'data={Items} to inset out array into the flatlist we used 'Items' as name display to access array
//and use render method to display the array items: renderItem={} this prop acts as a map and returnd one by one the array items in function 
  return (  
    <FlatList
      //numColumns={3}
      //horizontal
      //inverted
      keyExtractor={(_item, index)=>index.toString()}// this is if we  
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text} >{ item.name } </Text>

        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={ Refreshing }
          onRefresh={ onRefresh }
          colors={['#ff00ff']}
        
        />
      }>
    </FlatList>

     /* <ScrollView 
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={ Refreshing }
            onRefresh={ onRefresh }
            colors={['#ff00ff']}
          
          />
        }>
      {
        Items.map((items) => {
          return (
            <View style={styles.item}>
      <Text style={styles.text }> {items.item} </Text> 
      </View>
          )
        })
      }
      </ScrollView>   */ 
  );
}; 

const styles = StyleSheet.create({
  body: {

    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange',      
  },
  item: {
    margin: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }, 


});

export default App;
