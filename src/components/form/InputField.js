import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import colors from '../../styles/colors';

export default class InputField extends Component {
  render() {
    const { labelText, labelSize, labelColor, textColor, bottomColor, inputType, customStyle } = this.props;
    const fontSize = labelSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottomColor = bottomColor || 'transparent';

    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text 
          style={[{fontSize, color},styles.label]}
          >
          {labelText}
        </Text>
        <TextInput 
          autoCorrect={false}
          secureTextEntry={inputType === 'password'}
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
  customStyle: PropTypes.object
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
  }
}); 