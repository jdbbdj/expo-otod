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
import TaskItem from '../components/TaskItem'

export default function MainScreen  () {

    const [checked,setChecked] = useState(false)
    const [subject,setSubject] = useState('Task Item')
    const [isEditing,setEditing] =useState(false)
    const handlePressCheckBox = useCallback(()=>{
        setChecked(prev=>!prev)
    },[])
    return (
    <Center _light={{bg:'blueGray.50'}} _dark={{bg:'blueGray.900'}}   flex={1} >
        
        <VStack space={8} alignItems="center" w='full'>
        
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckBox} subject={subject} onChangeSubject={setSubject} isEditing={isEditing} onFinishEditing={()=>setEditing(false)} onPressLabel={()=>setEditing(true)} />
        

        <Box p={10} bg={useColorModeValue('red.500','yellow.200')}>
            <Text>
                Hello
            </Text>
        </Box>
        <ButtonToggle/>
        </VStack>
    </Center>)
}

