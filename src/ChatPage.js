import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';
import {Button, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon, Fab ,SwipeRow} from 'native-base';


export default class ChatPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }
  render() {
     const {navigate} = this.props.navigation;
    return (
      <ScrollView>
      <Container>
      
      <Content>
      <List>
      <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose1.jpeg')} />
      </Left>
      <Body >
      <Text style={styles.textTitle}>Be Happy</Text>
      <Text onPress={() => navigate('Profile')}>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>

      <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose2.jpg')} />
      </Left>
      <Body>
      <Text style={styles.textTitle}>Komal sakhiya</Text>
      <Text onPress={() => navigate('Profile')}>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>

      <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose3.jpeg')} />
      </Left>
      <Body>
      <Text style={styles.textTitle}>Foram Trada</Text>
      <Text onPress={() => navigate('Profile')}>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>



      <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose4.jpeg')} />
      </Left>
      <Body>
      <Text style={styles.textTitle}>Ruchi Bhalodiya</Text>
      <Text onPress={() => navigate('Profile')}>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>


      <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose2.jpg')} />
      </Left>
      <Body>
      <Text style={styles.textTitle}>Komal sakhiya</Text>
      <Text onPress={() => navigate('Profile')}>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>

      <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose1.jpeg')} />
      </Left>
      <Body>
      <Text style={styles.textTitle}>Be Happy</Text>
      <Text onPress={() => navigate('Profile')}>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>


       <ListItem avatar>
      <Left>
      <Image style={styles.img} source={require('../assets/rose2.jpg')} />
      </Left>
      <Body>
      <Text style={styles.textTitle}>Komal sakhiya</Text>
      <Text onPress={() => navigate('Profile')} >Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
      <Text >3:43 pm</Text>
      </Right>
      </ListItem>


      </List>


      </Content>

      

     
      </Container>
      </ScrollView>
      );
  }
}


const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  textTitle:{
    fontWeight: 'bold',
  }
})
