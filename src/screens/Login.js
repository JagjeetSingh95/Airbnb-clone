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
import Notification from '../components/Notification';
import Loader from '../components/Loader';

class Login extends Component {
  constructor(props){
    super(props); 
    this.state = {
       formValue: true,
       vaildEmail: false,
       emailAddres: '',
       validPassword: false,
       password: '',
       loadingVisible: false
    };
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      const { emailAddres, password } = this.state;
      if(emailAddres === 'jaggi@gmail.com', password === '12345') {
        this.setState({ formValue: true, loadingVisible: false });
        } else {
            this.setState({ formValue: false, loadingVisible: false }); 
        }
    }, 2000);
  }

  handleCloseNotification() {
    this.setState({ formValue: true })
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddres: email });
    if(!this.state.vaildEmail) {
      if(emailCheckRegex.test(email)) {
        this.setState({vaildEmail: true})
      } else {
        if(!emailCheckRegex.test(email)) {
          this.setState({vaildEmail: false})
        }
      }
    }
  }

  handlePasswordChange(password) {
    this.setState({ password });

    if(!this.state.validPassword) {
      if(password.length > 4) {
        this.setState({validPassword: true})
      }
    } else if(password.length <= 4) {
      this.setState({validPassword: false})
    }
  }

  toggleNextButtonState() {
    const { vaildEmail, validPassword } = this.state;
    if (vaildEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    const { formValue, loadingVisible, vaildEmail, validPassword } = this.state;
    const showNotification = formValue ? false : true;
    const background = formValue ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0

    return (
      <KeyboardAvoidingView 
        style={[{backgroundColor: background}, styles.wrapper]}
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
              onChangeText={this.handleEmailChange}
              showCheckmark={vaildEmail}
              autoFocus={true}
              />
            <InputField 
              labelText="PASSWORD"
              labelSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              bottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
              />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton 
              handleNextButton={this.handleNextButton}
              disabled={this.toggleNextButtonState()}
              />
          </View>
          <View style={[styles.notificationWrapper, {marginTop: notificationMarginTop}]}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials don't look right"
              secondLine="Please try again."
              />
          </View>
        </View>
        <Loader 
          modalVisible={loadingVisible}
          animationType="fade "
          />
      </KeyboardAvoidingView>
    )
  }  
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1
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
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0
  }
})

export default Login