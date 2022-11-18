this is the orignal test app code for App.js...with notes and so i wanted to save IDBTransaction. 

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* at beginig of each module we have our imports which are components imported from other modules and files*/
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
//so the 
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

/*this arrow function defined as const returns a block of JSX code and like HTML code 
of web, forms the struture of the page. */
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //statusBar is react-native component related to status bar on top portion of phone screen like battery charge status
  //SafeAreaView which forms the body of the page..adjusts the screen frame for us intelligently and auto detects them in phones with notches or margins 
  //ScrollView --makes content or components within it scrollable
  //View and Text componets are the most used and basic reactnative components..works like div separting sections with custom styles 
  //learn MoreLinks is a component is a custom components defined in separate file and imported below
  //each one of the below is react native components used to display what we see on app screens 
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Hey welcome i finally got it running">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and the   n come back to see your edits.
          </Section>
          <Section title="See Your Changes,,,and i have already made changes ">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


//this section is like CSS for HTML that defines the style of each component..
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

//then finally export the app funtion to be displayed as output in outher parts of the app if needed 
export default App;
