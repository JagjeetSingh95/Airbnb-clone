import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image

} from 'react-native';

import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut  extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image 
            source={require('../img/airbnd-logo.png')}
            style={styles.logo} 
            />  
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <RoundedButton text="Countinue with Facebook" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01
  },
  welcomeWrapper:  {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 30
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 50,
    marginBottom: 40
  }, 
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 30
  }
});