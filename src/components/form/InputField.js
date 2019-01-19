import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';

import colors from '../../styles/colors';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
      scaleCheckmarkValue: new Animated.Value(0)
    };
  }

  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }

  scaleCheckmark(value) {
    Animated.timing(
      this.state.scaleCheckmarkValue,
      {
        toValue: value,
        duration: 400,
        easing: Easing.easeOutBack
      }
    ).start();
  }

  render() {
    const { 
      labelText, 
      labelSize, 
      labelColor, 
      textColor, 
      bottomColor, 
      inputType, 
      customStyle, 
      onChangeText, 
      showCheckmark,
      autoFocus,
      autoCapitalize
    } = this.props;
    const { secureInput, scaleCheckmarkValue } = this.state;
    const fontSize = labelSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottomColor = bottomColor || 'transparent';
    const keyboardType =  inputType === 'email' ? 'email-address' : 'default';

    const iconScale = scaleCheckmarkValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1.6, 1]
    });

    const scaleValue = showCheckmark ? 1 : 0;
    this.scaleCheckmark(scaleValue);

    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text 
          style={[{fontSize, color},styles.label]}
          >
          {labelText}
        </Text>
        {inputType === 'password' ? 
            <TouchableOpacity
              style={styles.showButton}
              onPress={this.toggleShowPassword.bind(this)}
              >
              <Text 
                style={styles.showButtonText}
                >
                {secureInput ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          : null
        }
        <Animated.View style={[{ transform: [{ scale: iconScale }] },styles.checkMarkWapper]}>
          <Icon 
            name="check"
            color={colors.white}
            size={20}
            />
        </Animated.View>
        <TextInput 
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          style={[{color: inputColor, borderBottomColor},styles.inputField]}
          />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelSize: PropTypes.number,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  bottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func,
  showCheckmark: PropTypes.bool.isRequired,
  autoFocus: PropTypes.bool,
  autoCapitalize: PropTypes.bool
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  label: {
    fontWeight: '700',
    marginBottom: 10
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  showButton: {
    position: 'absolute',
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: '700'
  },
  checkMarkWapper: {
    position: 'absolute',
    right: 0,
    bottom: 12
  }
}); 