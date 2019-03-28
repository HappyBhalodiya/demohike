import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import {Button} from 'native-base';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


import TimelinePage from './TimelinePage.js'

import ActionBarImage from './ActionBarImage.js'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
	TimelinePage: {screen: TimelinePage,
		navigationOptions:  {
			headerStyle: {
				backgroundColor: '#FF3399',
			},
			headerLeft: <ActionBarImage />,
			headerRight: [<Icon name='group-add' color="#ffffff" style={{ marginRight: 20 }}  size={25}/>,
			<Icon name='notifications' color="#ffffff" style={{ marginRight: 20 }}  size={25} />]
	
		} 
	},

});

const Routes2 = createAppContainer(MainNavigator);

export default Routes2;


