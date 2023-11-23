/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 22-11-2023
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

export default function AssetsList({ filter, allowDrag }) {
  const filesInQueue = useSelector(selectFilesToUpload);
  const alreadyAvailableFiles = useSelector(selectIndexedFiles);
  const filesUploading = useSelector(selectFilesUploading);
  const availableFileKeys = Object.keys(alreadyAvailableFiles);
  if (
    availableFileKeys.length > 0 ||
    filesInQueue.length > 0 ||
    filesUploading.length > 0
  ) {
    return (
      <VStack spacing={4}>
        {availableFileKeys.map((key) => {
          if (alreadyAvailableFiles[key].name.includes(filter) || !filter) {
            const onDragStart = (event, nodeType) => {
              event.dataTransfer.setData("application/reactflow", nodeType);
              event.dataTransfer.effectAllowed = "move";
            };
            return (
              <div
                draggable={allowDrag}
                onDragStart={(event) => onDragStart(event, "input")}
                style={{ marginTop: "8px", marginRight: "8px", width: "98%" }}
                key={key}
              >
                <FileCard
                  key={key}
                  isInUploadQueue={false}
                  fileProps={alreadyAvailableFiles[key]}
                ></FileCard>
              </div>
            );
          }
        })}
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
