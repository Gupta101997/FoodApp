
import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import OnBording from './src/screens/OnBordingScreen/onBording';
import LandingScreen from './src/screens/OnbordingScreen/OnbordingScreen';
import StackSacreen from './src/screens/Navigation/stackNavigation/stackSacreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StackSacreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
