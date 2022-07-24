import { View,Dimensions } from 'react-native'
import { Center,VStack,Box, HStack,Text,ScrollView } from 'native-base'
import React,{useState,useCallback,useRef, useEffect} from 'react'
import { SCHEDULE_DATA } from '../utils/data';
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
    return data.map((item)=>{
      let x
      x = item.timeSpan.length;
      const yes = totalList/x;
      return (<Text w='full' h={10*x} borderColor='black' borderWidth={1}>{yes}</Text>)
    })
  }

  
  return (
    <Center _light={{bg:'blueGray.50'}} _dark={{bg:'blueGray.900'}}   flex={1} >
      <VStack space={8} alignItems="center" w='full'>
        <Box w='90%'  bg={upperBoxColor} borderRadius={25} height={upperBox}>

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
        <Box w='90%'  bg={upperBoxColor} borderRadius={25}  height={lowerBox}>
          {totalList}
          
        </Box>
      </VStack>
    </Center>
  )
}

export default RouletteScreen