/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 20-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import {
  Divider,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Container,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import FileUpload from "./FileUpload";
import AssetsList from "./AssetsList";
import { useRef } from "react";

export default function AssetsPanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const uploadBtnRef = useRef();
  const searchFileRef = useRef();
  return (
    <Container maxW="20%">
      <Tabs colorScheme="blue">
        <TabList>
          <Tab>Arquivos</Tab>
          <Tab>Blocos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack>
              <Button
                width="auto"
                colorScheme="blue"
                ref={uploadBtnRef}
                onClick={onOpen}
              >
                Upload
              </Button>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
                </InputLeftElement>
                <Input width="auto" placeholder="Procurar" />
              </InputGroup>
            </HStack>
          </TabPanel>
          <TabPanel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input width="auto" placeholder="Procurar" />
            </InputGroup>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <HStack></HStack>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="md"
        finalFocusRef={uploadBtnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Arquivos disponíveis</DrawerHeader>
          <DrawerBody>
            <Flex maxWidth="100%" flexDirection="row" wrap="wrap">
              <Divider orientation="horizontal" width="120%" mb="3" />
              <FileUpload
                name="fileUpload"
                acceptedFileTypes=".wav,image/*"
                isRequired={true}
                placeholder="Upload File"
                allowMultipleFiles={true}
              ></FileUpload>
              <Divider orientation="horizontal" width="120%" mb="3" mt="3" />
              <AssetsList></AssetsList>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
