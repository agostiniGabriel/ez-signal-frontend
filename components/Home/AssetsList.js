/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 15-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { HStack, Text } from "@chakra-ui/react";
import { selectFilesState } from "../../store/filesSlice";
import { useSelector } from "react-redux";

export default function AssetsList() {
  const files = useSelector(selectFilesState);
  const fileKeys = Object.keys(files);
  return (
    <HStack spacing={8}>
      {fileKeys.map((key) => (
        <Text>{files[key].id}</Text>
      ))}
    </HStack>
  );
}
