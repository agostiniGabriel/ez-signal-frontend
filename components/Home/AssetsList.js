/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 19-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { VStack, Text } from "@chakra-ui/react";
import { FileCard } from "./FileCard";
import {
  selectFilesToUpload,
  selectIndexedFiles,
} from "../../store/filesSlice";
import { useSelector } from "react-redux";

export default function AssetsList() {
  const filesStillUploading = useSelector(selectFilesToUpload);
  const alreadyAvailableFiles = useSelector(selectIndexedFiles);
  const availableFileKeys = Object.keys(alreadyAvailableFiles);
  if (availableFileKeys.length > 0 || filesStillUploading.length > 0) {
    console.log(filesStillUploading);
    console.log(availableFileKeys);
    return (
      <VStack spacing={8}>
        {availableFileKeys.map((key) => (
          <FileCard
            key={key}
            isUploading={false}
            fileProps={availableFileKeys[key]}
          ></FileCard>
        ))}
        {filesStillUploading.map((file) => (
          <FileCard
            key={file.name}
            isUploading={true}
            fileProps={file}
          ></FileCard>
        ))}
      </VStack>
    );
  } else {
    return <Text>Ainda não existem aquivos disponíveis 😓.</Text>;
  }
}
