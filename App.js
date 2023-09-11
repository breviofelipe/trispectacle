import React from 'react';
import { SafeAreaView, StatusBar } from "react-native";
import { WebView } from 'react-native-webview';




export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#23a2f6'/>
        <WebView 
          source={{ uri: 'https://trispectacle-93b2a62d86f1.herokuapp.com/' }} 
        />
      </SafeAreaView>
  );
}
