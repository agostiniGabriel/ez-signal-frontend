/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 22-11-2023
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
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import FileUpload from "./FileUpload";
import AssetsList from "./AssetsList";
import { useRef, useState } from "react";

export default function AssetsPanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const uploadBtnRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    if (
      searchValue.length - previousValue.length > 2 ||
      searchValue.length - previousValue.length < 2
    ) {
      setPreviousValue(searchValue);
      setSearchValue(value);
    }
  };
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
                <Input
                  width="auto"
                  placeholder="Procurar"
                  onChange={handleSearch}
                />
              </InputGroup>
            </HStack>
            <Divider maxW="90%" padding={4}></Divider>
            <Box height={"49vh"} overflowY="scroll">
              <AssetsList filter={searchValue} allowDrag={true}></AssetsList>
            </Box>
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
