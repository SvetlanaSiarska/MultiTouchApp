import React, {PureComponent} from 'react';
import {AppRegistry, StyleSheet, StatusBar} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {Finger} from './src/renderers';
import {CreateFinger} from './src/CreateFinger';
import { MoveFinger } from './src/systems';

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }


  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger, CreateFinger]}
        entities={
          {
          0: {position: [40, 200], renderer: <Finger />, name: '1'}, //-- Notice that each entity has a unique id (required)
          1: {position: [100, 200], renderer: <Finger />, name: '2'}, //-- and a renderer property (optional). If no renderer
          2: {position: [160, 200], renderer: <Finger />, name: '3'}, //-- is supplied with the entity - it won't get displayed.
          3: {position: [220, 200], renderer: <Finger />, name: '4'},
          4: {position: [280, 200], renderer: <Finger />, name: '5'},
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0',
  },
});

AppRegistry.registerComponent('BestGameEver', () => BestGameEver);
