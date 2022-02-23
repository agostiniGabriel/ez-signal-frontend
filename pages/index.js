/**
 * @description       : 
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 22-02-2022
 * @last modified by  : Gabriel Agostini
**/

import { Flex, Heading, Text , Stack, Center, Tag , Box } from '@chakra-ui/react'
import ProcessignTools from '../components/Home/ProcessingTools'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Home() {
  return (
    <Flex alignItems='center' justifyContent='center' alignContent='center'>
      <Stack alignItems='center' width='60%'>
        <Flex flexDirection='row' alignItems='center'>
          <Heading paddingBlockStart='8' textAlign='center'>
            Bem vindo ao 
          </Heading>
          <MotionBox>
            
          </MotionBox>
        </Flex>
        <Center paddingBlockEnd='12'>
          <Text fontSize='2xl'>
            Ferramenta de processamento que permite realizar operações em imagens e aúdios.
          </Text>
        </Center> 
        <ProcessignTools/>
      </Stack>
    </Flex>
  )
}
