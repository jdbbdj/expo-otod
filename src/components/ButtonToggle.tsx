import React from 'react'
import {Text, HStack,Switch,useColorMode } from 'native-base'

export default function ButtonToggle ( ){
    const {colorMode,toggleColorMode} = useColorMode()
    return (
        <HStack space={2}>
            <Text>
                Dark
            </Text>
            <Switch isChecked={colorMode==='light'} onToggle={toggleColorMode}/>
            <Text>
                Light
            </Text>
        </HStack>
    )
}