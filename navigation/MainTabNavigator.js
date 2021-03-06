import React from 'react';
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
		/>
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-construct'
			}
		/>
	),
};

const MapStack = createStackNavigator({
	Map: MapScreen,
});

MapStack.navigationOptions = {
	tabBarLabel: 'Map',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-globe' : 'md-globe'}
		/>
	),
};

const ProfileStack = createStackNavigator({
	Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
	tabBarLabel: 'Profile',
	tabBarIcon: ({ focused }) => (
		<Image
			source={require('../assets/images/mocks/profilePics/maayan.jpg')}
			style={{ height: 22, width: 22, borderRadius: 50 }}
		/>
	),
};


export default createBottomTabNavigator({
	HomeStack,
	MapStack,
	SettingsStack,
	ProfileStack	
});
