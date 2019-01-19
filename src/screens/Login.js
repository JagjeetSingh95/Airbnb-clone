import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

export default class Login extends Component {
  handleNextButton() {
    alert('Next Arrow Button Pressed!')
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles .wrapper}
        behavior="padding"
        >
        <View 
          style={styles.scrollViewWrapper}
          >
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField 
              labelText="EMAIL ADDRESS"
              labelSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              bottomColor={colors.white}
              inputType="email"
              customStyle={{marginBottom: 30}}
              />
            <InputField 
              labelText="PASSWORD"
              labelSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              bottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
              />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton 
              handleNextButton={this.handleNextButton}
              />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }  
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 30   
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  }
})