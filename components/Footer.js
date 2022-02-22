/**
 * @description       : Footer exibido em todas as pags.
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 21-02-2022
 * @last modified by  : Gabriel Agostini
**/

import { Divider, Flex , Stack , Text } from "@chakra-ui/react";
import Image from 'next/image';

export default function Footer(){

    return (
        <Flex flexDirection='column' justifyContent='space-between' alignItems='center' minHeight='fit-content'>
            <Divider orientation='horizontal' width='80%'/>
            <Stack spacing='2vh' margin='2vh' direction={['row']} alignItems='center'>
                <Image src="/icon.svg" alt="Ez Signal" width={50} height={50}/>
                <Divider orientation='vertical' height='50px'/>
                <Text>
                    Desenvolvido para propósitos acadêmicos 🚀
                </Text>
            </Stack>
        </Flex>
    )
}