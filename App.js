import React from 'react';
import {StyleSheet, View,Text } from "react-native";
import NavbarComponent from './components/NavbarComponent';
import MainComponent from './components/MainComponent';
import AppLoading from 'expo-app-loading';
import { useFonts, Prompt_400Regular,Prompt_500Medium } from '@expo-google-fonts/prompt';
const App=()=> {
  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <NavbarComponent/>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    fontFamily:'Prompt_500Medium',
    backgroundColor: '#1F1B1B',

  },
});
export default App;

