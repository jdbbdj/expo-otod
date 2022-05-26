import  * as React from 'react'
import {
    Text,
    Box,
    Center,
    VStack,
    useColorModeValue
} from 'native-base'
import ButtonToggle from '../components/ButtonToggle'
import AnimatedCheckbox from '../components/AnimatedCheckbox'

export default function MainScreen  () {
    return (
    <Center _light={{bg:'blueGray.50'}} _dark={{bg:'blueGray.900'}}  px={4} flex={1} >
        <VStack space={8} alignItems="center">
        <Box w='100px' h='100px'>
            <AnimatedCheckbox/>
        </Box>
        <Box p={10} bg={useColorModeValue('red.500','yellow.200')}>
            <Text>
                Hello
            </Text>
        </Box>
        <ButtonToggle/>
        </VStack>
    </Center>)
}

