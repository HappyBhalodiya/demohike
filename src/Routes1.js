import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import {Button} from 'native-base';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


import ChatPage from './ChatPage.js'

import ActionBarImage from './ActionBarImage.js'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
	ChatPage: {screen: ChatPage,
		navigationOptions:  {
			headerStyle: {
				backgroundColor: '#FF3399',
			},
			headerLeft: <ActionBarImage />,
			headerRight: [<Icon name='search' color="#ffffff" style={{ marginRight: 20 }}  size={25}/>,
			<Icon name='folder' color="#ffffff" style={{ marginRight: 20 }}  size={25} />]
	
		} 
	},

});

const Routes1 = createAppContainer(MainNavigator);

export default Routes1;


