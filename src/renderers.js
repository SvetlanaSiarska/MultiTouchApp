import React, {PureComponent} from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableWithoutFeedback} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MitteX = windowWidth / 2; 
const MitteY = windowHeight / 2;
const RADIUS = 35;

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return <View style={[styles.finger, {left: x, top: y}]} >
      <Text style={[styles.title]}>{this.props.name}</Text>
      </View>
  }

  renderc() {
    const x = MitteX - RADIUS;
    const y = MitteY - RADIUS;
    return <View style={[styles.finger, {left: x, top: y}]} />;
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#333',
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: '#0FF',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center'
   
  }
});


export {Finger};
