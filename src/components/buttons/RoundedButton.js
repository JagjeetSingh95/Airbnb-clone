import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class RoundedButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <TouchableHighlight>
        <Text style={styles.buttonText}>{text}</Text> 
      </TouchableHighlight>
    );
  }
}

RoundedButton.PropTypes =  {
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 15
  },
  buttonText: {
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
  }
})