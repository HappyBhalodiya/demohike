import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default class ActionBarImage extends React.Component {
  render() {
    return (
  
    <View style={{ flexDirection: 'row' }}>
     <Image style={styles.img} source={require('../assets/hike.jpg')} 
      
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
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
});
