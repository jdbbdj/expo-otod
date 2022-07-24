import { View,Dimensions } from 'react-native'
import { Center,VStack,Box, HStack,Text,ScrollView,Icon, Heading } from 'native-base'
import React,{useState,useCallback,useRef, useEffect} from 'react'
import { SCHEDULE_DATA } from '../utils/data';
import {Feather,MaterialCommunityIcons,MaterialIcons, SimpleLineIcons} from '@expo/vector-icons'
const RouletteScreen = () => {
  const {width: SCREEN_WIDTH,height:SCREEN_HEIGHT} = Dimensions.get('window');
  const [totalList, setTotalList] = useState(0);
  const [length,setLength] = useState([])
  const middleBoxHeight = SCREEN_HEIGHT/2;
  const upperBox = SCREEN_HEIGHT/5;
  const lowerBox = SCREEN_HEIGHT/10;
  const upperBoxColor = '#e8d6cb';
  const middleBoxColor = '#faf4d3'


  useEffect(()=>{
    let x=[]
    let lengthHolder = []
    SCHEDULE_DATA.map((item)=>{
      lengthHolder.push(item.timeSpan.length)
      item.timeSpan.map((times)=>{
        x.push(times)
      })
    })
    setTotalList(x.length)
    
  },[])


  const rendeTimeList = (data) =>{
    if(data!==null){
      return data.map((item,key)=>{
        return (<React.Fragment key={key}>{item.timeSpan.map((block,key)=>{
          return <Box width={2} backgroundColor='muted.300' height={10} key={key}>
          <Box width={5} h={5} borderRadius={25} backgroundColor='muted.500' right={1.5}/>
          <Text position='absolute' left={4}>
          {block}
          </Text>
         
        </Box>
        })}</React.Fragment>)
      })
    }
  }

  const renderTask = (data) =>{
    return data.map((item,key)=>{
      let x
      let y
      x = item.timeSpan.length;
      y = (10*x)
      return (<VStack w='90%' mb={1} h={y} justifyContent='space-between' style={{shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,elevation: 4,}}   bg='#ffffff' borderRadius={25} p={5}>
        <HStack space={10} justifyContent='space-between' top={-5}>
        <Text>{item.subject}</Text>
        <Text>{item.type}</Text>
        </HStack>
        <VStack>
        <Text>{`${item.timeSpan[0]} to ${item.timeSpan[x-1]}`}</Text>
        <Text>{item.type}</Text>
        </VStack>
        </VStack>)
    })
  }

  
  return (
    <Center _light={{bg:'blueGray.50'}} _dark={{bg:'blueGray.900'}}   flex={1} >
      <VStack space={8} alignItems="center" w='full'>
        <Box w='90%'  bg={upperBoxColor} borderRadius={25} height={upperBox} justifyContent='center' alignItems='center'>
        <VStack alignItems='center'>
          <Heading>
            M-W SCHEDULE
          </Heading>
          <Text>
            III - Accounting
          </Text>
        </VStack>
        </Box>
        <Box w='full'  height={middleBoxHeight}>
          <ScrollView>
          <HStack h='full'>
          <Center h="full" w="20%"  rounded="md"  flex={1} justifyContent='flex-start' alignItems='center'>
          {rendeTimeList(SCHEDULE_DATA)}

          </Center>
          <Center h="full" w="80%"   justifyContent='flex-start' alignItems='center'>
          {renderTask(SCHEDULE_DATA)}
          </Center>
            
          </HStack>
          </ScrollView>
        </Box>
        <Box w='90%'  bg={upperBoxColor} borderRadius={25}  height={lowerBox} >
        <HStack w='full' justifyContent='space-evenly' mt={5}>
        <Icon color='white' size={10} as={<Feather  name='edit'/>}/>
        <Icon color='white' size={10} as={<SimpleLineIcons name='drawer'/>}/>
        <Icon color='white' size={10} as={<MaterialIcons name='design-services'/>}/>
        <Icon color='white' size={10} as={<MaterialCommunityIcons name='archive-lock'/>}/>
        </HStack>
        </Box>
      </VStack>
    </Center>
  )
}

export default RouletteScreen