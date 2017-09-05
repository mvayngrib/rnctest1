/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import 'rn-nodeify/shim';
import crypto from 'crypto';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const rand = crypto.randomBytes(32).toString('hex')
const ecdh = crypto.createECDH('secp521r1')
const publicKey = ecdh.generateKeys()

export default class rnctest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, use this random number: {rand}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnctest1', () => rnctest);
