import  * as React from 'react'
import {
    Text,
    Box,
    Center,
    VStack,
    useColorModeValue
} from 'native-base'
import ButtonToggle from '../components/ButtonToggle'

export default function MainScreen  () {
    return (
    <Center _light={{bg:'blueGray.50'}} _dark={{bg:'blueGray.900'}}  px={4} flex={1} >
        <VStack space={8} alignItems="center">
        <Box bg={useColorModeValue('red.500','yellow.200')}>
            <Text>
                Hellosss
            </Text>
        </Box>
        <ButtonToggle/>
        </VStack>
    </Center>)
}

