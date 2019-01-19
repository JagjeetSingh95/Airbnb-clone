import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import colors from '../../styles/colors';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true
    };
  }

  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }

  render() {
    const { labelText, labelSize, labelColor, textColor, bottomColor, inputType, customStyle, onChangeText } = this.props;
    const fontSize = labelSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottomColor = bottomColor || 'transparent';
    const { secureInput } = this.state;

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
        <TextInput 
          autoCorrect={false}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
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
  onChangeText: PropTypes.func
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
  }
}); 