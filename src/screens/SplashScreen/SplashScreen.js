import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(navigateOnBording, 2000);
    return () => clearTimeout(timeout)
  }, [])

  const navigateOnBording = () => {
    navigation.navigate('OnbordingScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.lineImg1}
          source={require('../../../Assets/Images/Group.png')}
        />
      </View>
      <View style={styles.middelpart}>
        <Image
          style={styles.logo}
          source={require('../../../Assets/Images/Group18165.png')}
        />
      </View>
      <View style={styles.footer}>
        <Image
          style={styles.lineImg2}
          source={require('../../../Assets/Images/Group1.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B57'
  },
  header: {
    flex: 7,
  },
  middelpart: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 7,
  },
  logo: {
    width: '40%',
    height: '63%'
  },
  lineImg1: {
    width: '65%',
    height: '100%',
    // marginTop:50,
    resizeMode: 'cover'
  },
  lineImg2: {
    width: '65%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default SplashScreen;
