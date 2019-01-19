import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: true,
      email: '',
      vaildEmail: false,
      loadingVisible: false
    };
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ email });
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

  handleNextButton() {
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      if(this.state.emailAddres === 'jagsingh.96@gmail.com') {
        this.setState({ formValue: true, loadingVisible: false });
        } else {
            this.setState({ formValue: false, loadingVisible: false }); 
        }
    }, 2000);
  }

  toggleNextButtonState() {
    const { vaildEmail } = this.state;
    if (vaildEmail) {
      return false;
    }
    return true;
  }

  handleCloseNotification() {
    this.setState({ formValue: true })
  }

  render() {
    const { formValue, vaildEmail, loadingVisible } = this.state;
    const showNotification = formValue ? false : true;
    const background = formValue ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0

    return (
      <KeyboardAvoidingView
      style={[{backgroundColor: background}, styles.wrapper]}
        behavior="padding"
        >
        <View style={styles.forgotForm}>
          <Text style={styles.forgotPwdHeading}>Forgot your password?</Text> 
          <Text style={styles.forgotPwdSubHeading}>Enter your email to find your account</Text> 
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
          </View>
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
 forgotForm: {
    marginTop: 90,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1
 },
 forgotPwdHeading: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 30 
 },
 forgotPwdSubHeading: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 60
 },
 nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    marginTop: 20
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0
  }
})