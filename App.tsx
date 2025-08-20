/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import MainScreen from './src/screenFolder/MainScreen';


function App() {
 

  return (
  <View style={styles.container}>
<MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});

export default App;
