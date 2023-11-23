/**
 * @description       :
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 22-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { Container, HStack } from "@chakra-ui/react";

import AssetsPanel from "./AssetsPanel";
import FlowCanvas from "./FlowCanvas";

function AppContainer() {
  return (
    <Container
      maxW="container.xxl"
      borderRadius="lg"
      boxShadow="dark-lg"
      padding="8"
    >
      <HStack spacing={4} alignItems="flex-start">
        <AssetsPanel></AssetsPanel>
        <FlowCanvas></FlowCanvas>
      </HStack>
    </Container>
  );
}

export default AppContainer;
