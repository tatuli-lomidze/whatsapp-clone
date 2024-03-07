import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import UpdatesScreen from './UpdatesScreen';
import CallsScreen from './CallsScreen';
import CommunitiesScreen from './CommunitiesScreen';
import ChatScreen from './ChatScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Updates') {
              iconName = focused ? 'notifications' : 'notifications-outline'
            } else if (route.name === 'Calls') {
              iconName = focused ? 'call' : 'call-outline'
            } else if (route.name === 'Communities') {
              iconName = focused ? 'people' : 'people-outline'
            } else if (route.name === 'Chats') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
        <Tab.Screen name="Communities" component={CommunitiesScreen} />
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
