import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import AuthentificationScreen from '../screens/AuthentificationScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProjectPageScreen from '../screens/ProjectPage';
import ListProjectScreen from '../screens/List_project';
import MissionPageScreen from '../screens/MissionPage';
import YourProjectScreen from '../screens/YourProject';


const ListProjectStack = createStackNavigator({
  ListProject: { screen: ListProjectScreen},
  ProjectPage: { screen: ProjectPageScreen },
  MissionPage : { screen: MissionPageScreen}
});

ListProjectStack.navigationOptions = {
  tabBarLabel: 'ListProject',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const AuthentificationStack = createStackNavigator({
  Authentification: AuthentificationScreen,
});

AuthentificationStack.navigationOptions = {
  tabBarVisible : false,
  tabBarLabel: 'Logout',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Personnal Page',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  AuthentificationStack,
  ListProjectStack,
  SettingsStack, 
});
