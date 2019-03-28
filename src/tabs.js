import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";
import {RkButton, RkText, RkTabSet,RkTabView, RkTab, RkTheme } from 'react-native-ui-kitten';
import Chat from './chat.js'
import Me from './me.js'
import Timeline from './Timeline.js'




const Tabs = createBottomTabNavigator({
	Timeline:{screen:Timeline,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="folder" size={30} color="#FF3399" />
				)
		},
	},
	Chat:{screen: Chat,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="sms" size={30} color="#FF3399" />
				)
		},
	},
	Me:{screen: Me,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<Icon name='person' size={30} color="#FF3399"/>
				)
		},
	},
});
export default createAppContainer(Tabs);

