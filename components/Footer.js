/**
 * @description       : Footer exibido em todas as pags.
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 22-02-2022
 * @last modified by  : Gabriel Agostini
**/

import { Divider, Flex , Link , Stack , Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer(){

    return (
        <Flex flexDirection='column' justifyContent='space-between' alignItems='center' minHeight='fit-content' marginBlockStart='16'>
            <Divider orientation='horizontal' width='80%'/>
            <Stack spacing='2vh' margin='2vh' direction={['row']} alignItems='center'>
                <Image src="/icon.svg" alt="Ez Signal" width={50} height={50}/>
                <Divider orientation='vertical' height='12'/>
                <Stack direction={['column']}>
                    <Text>
                        Desenvolvido para propósitos acadêmicos 🚀
                    </Text>
                    <Flex direction={['row']}>
                    <IconContext.Provider value={{color: 'inherit', size:25}}>
                        <Link padding={1} href='https://www.linkedin.com/in/gabriel-agostini-ribeiro/' isExternal>
                            <FaLinkedin/>
                        </Link>
                        <Link padding={1} href='https://github.com/agostiniGabriel' isExternal>
                            <FaGithub/>
                        </Link>
                    </IconContext.Provider>   
                    </Flex>  
                </Stack>
            </Stack>
        </Flex>
    )
}