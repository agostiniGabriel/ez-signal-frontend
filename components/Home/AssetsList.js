/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 20-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { VStack, Text } from "@chakra-ui/react";
import { FileCard } from "./FileCard";
import {
  selectFilesToUpload,
  selectFilesUploading,
  selectIndexedFiles,
} from "../../store/filesSlice";
import { useSelector } from "react-redux";

export default function AssetsList() {
  const filesInQueue = useSelector(selectFilesToUpload);
  const alreadyAvailableFiles = useSelector(selectIndexedFiles);
  const filesUploading = useSelector(selectFilesUploading);
  const availableFileKeys = Object.keys(alreadyAvailableFiles);
  console.log(alreadyAvailableFiles);
  if (
    availableFileKeys.length > 0 ||
    filesInQueue.length > 0 ||
    filesUploading.length > 0
  ) {
    return (
      <VStack spacing={8}>
        {availableFileKeys.map((key) => (
          <FileCard
            key={key}
            isInUploadQueue={false}
            fileProps={alreadyAvailableFiles[key]}
          ></FileCard>
        ))}
        {filesInQueue.map((file) => (
          <FileCard
            key={file.name}
            isInUploadQueue={true}
            fileProps={file}
          ></FileCard>
        ))}
        {filesUploading.map((file) => (
          <FileCard
            key={file.name}
            isInUploadQueue={false}
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
