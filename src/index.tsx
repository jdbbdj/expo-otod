
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main'
import RouletteScreen from './screens/roulette'
const Drawer = createDrawerNavigator()

const App =  () =>{
    return (
        <Drawer.Navigator initialRouteName='Main'>
            <Drawer.Screen name='Main' component={MainScreen}/>
            <Drawer.Screen name='Roulette' component={RouletteScreen}/>
        </Drawer.Navigator>
    )
}

export default App