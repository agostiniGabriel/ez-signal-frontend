/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 19-11-2023
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
  useColorMode,
} from "@chakra-ui/react";
import FileUpload from "./FileUpload";
import AssetsList from "./AssetsList";
import { useRef } from "react";

export default function AssetsPanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button colorScheme="blue" ref={btnRef} onClick={onOpen}>
        Central de arquivos
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
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
    </>
  );
}
