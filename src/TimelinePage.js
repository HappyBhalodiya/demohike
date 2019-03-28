import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Routes1 from './Routes1.js'
import {Button, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon, Fab ,SwipeRow} from 'native-base';
export default class TimelinePage extends React.Component {
  render() {
    return (

      <View>
        <View style={{flex:3, flexDirection: 'row',marginLeft:20,marginTop:20}}>
          <View style={{flex:3, flexDirection: 'column'}}>
            <Image style={styles.img} source={require('../assets/rose1.jpeg')} />
          </View>
          <View style={{flex:9, flexDirection: 'column'}}>
            <Text>hello</Text>
              <Text>hello</Text>
          </View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  textTitle:{
    fontWeight: 'bold',
  }
});
