import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {About, Portfolio, Add, Project, Skills} from '../pages';
import {colors} from '../utils';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const SkillsStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const AddStack = createStackNavigator();
const AboutStack = createStackNavigator();

const SkillsStackScreen = () => (
  <SkillsStack.Navigator>
    <SkillsStack.Screen
      name="Skills"
      component={Skills}
      options={{
        headerShown: false,
      }}
    />
  </SkillsStack.Navigator>
);

const ProjectStackScreen = () => (
  <ProjectStack.Navigator>
    <ProjectStack.Screen
      name="Project"
      component={Project}
      options={{
        headerShown: false,
      }}
    />
  </ProjectStack.Navigator>
);

const AddStackScreen = () => (
  <AddStack.Navigator>
    <AddStack.Screen
      name="Add"
      component={Add}
      options={{
        headerShown: false,
      }}
    />
  </AddStack.Navigator>
);

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Skills" component={SkillsStackScreen} />
    <Tab.Screen name="Project" component={ProjectStackScreen} />
    <Tab.Screen name="Add" component={AddStackScreen} />
  </Tab.Navigator>
);

const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="About"
      component={About}
      options={{
        headerShown: false,
      }}
    />
  </AboutStack.Navigator>
);

export default MyTabs = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Portfolio" component={TabScreen} />
      <Drawer.Screen name="About" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
};
