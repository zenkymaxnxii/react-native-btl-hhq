import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RegisterScreen from './Register';
import HomeScreen from './Home';
import LoginScreen from './Login';
import DetailScreen from './Detail';
import ProfileScreen from './Profile';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: "none"
    }
);
const RootStack2 = createStackNavigator(
    {
        Profile: ProfileScreen,
        Register: RegisterScreen,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
        headerMode: "none"
    }
);
const Tabs = createBottomTabNavigator({
    Home: {
        screen: RootStack,
    },
    Profile: {
        screen: RootStack2,
    },
}, {
    tabBarOptions:{
        style:{
            height:40,
        },
        labelStyle:{
            top:-8,
            fontSize:15
        },
        inactiveBackgroundColor: 'white',
        inactiveTintColor:'black',
        activeBackgroundColor:'#e1f0ef',
        activeTintColor:'red'
    }
})
export default createAppContainer(Tabs);