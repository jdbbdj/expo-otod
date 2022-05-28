import  React,{useCallback,useState} from 'react'
import { Pressable } from 'react-native'
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

    const [checked,setChecked] = useState(false)
    const handlePressCheckBox = useCallback(()=>{
        setChecked(prev=>!prev)
    },[])
    return (
    <Center _light={{bg:'blueGray.50'}} _dark={{bg:'blueGray.900'}}  px={4} flex={1} >
        
        <VStack space={8} alignItems="center">
        
        <Box w='100px' h='100px'>
        <Pressable onPress={handlePressCheckBox}>
            <AnimatedCheckbox checked={checked}/>
        </Pressable>
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

