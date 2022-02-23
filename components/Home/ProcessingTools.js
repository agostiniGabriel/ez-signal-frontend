/**
 * @description       : 
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 22-02-2022
 * @last modified by  : Gabriel Agostini
**/

import { Tabs, TabList, TabPanels, Tab, TabPanel , Container } from '@chakra-ui/react'

function ProcessignTools(){
    return(
        <Container centerContent maxW='container.xl' borderRadius='lg' boxShadow='dark-lg' padding='8' >
            <Tabs colorScheme='blue' width='100%'>
                <TabList>
                    <Tab>Aúdio 🔊</Tab>
                    <Tab>Imagem 🎞️</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <p>Criar o componente de card e renderizar um pra cada processamento disponivel</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default ProcessignTools;