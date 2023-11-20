/**
 * @description       :
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 19-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { Container, Flex } from "@chakra-ui/react";

import AssetsPanel from "./AssetsPanel";

function AppContainer() {
  return (
    <Container
      maxW="container.xxl"
      borderRadius="lg"
      boxShadow="dark-lg"
      padding="8"
    >
      <Flex alignContent="flex-start" justifyContent="">
        <AssetsPanel></AssetsPanel>
      </Flex>
    </Container>
  );
}

export default AppContainer;
