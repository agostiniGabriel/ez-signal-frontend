/**
 * @description       : Card para display dos files.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 20-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import {
  Card,
  CardBody,
  Text,
  HStack,
  Spinner,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const FileCard = ({
  isInUploadQueue = false,
  isUploading = false,
  fileProps = {},
}) => {
  if (isInUploadQueue) {
    return awaitingUploadCard({ fileProps });
  } else if (isUploading) {
    return uploadingCard({ fileProps });
  } else {
    return availableCard({ fileProps });
  }
};

export const getIcon = (extension) => {
  const icons = {
    wav: "🔊",
    png: "🖼️",
    jpeg: "🖼️",
  };

  return icons[extension] || "🤔";
};

const awaitingUploadCard = ({ fileProps = {} }) => {
  return (
    <Card w="100%">
      <CardBody>
        <HStack w="100%" align="center" justify="space-between" spacing={8}>
          <Text maxWidth="70%" noOfLines={1}>
            {getIcon(fileProps?.extension)} - {fileProps.name.split(".")[0]}
          </Text>
        </HStack>
        <Divider paddingTop={4} paddingBottom={4}></Divider>
        <Text paddingTop={2}>Em fila 🕖. Aguardando confirmação.</Text>
      </CardBody>
    </Card>
  );
};

const uploadingCard = ({ fileProps = {} }) => {
  return (
    <Card w="100%">
      <CardBody>
        <HStack w="100%" align="center" justify="space-between" spacing={8}>
          <Text maxWidth="70%" noOfLines={1}>
            {getIcon(fileProps?.extension)} - {fileProps.name.split(".")[0]}
          </Text>
          <Spinner
            emptyColor="gray.200"
            color="blue.500"
            size="md"
            justifySelf="flex-end"
          ></Spinner>
        </HStack>
        <Divider paddingTop={4} paddingBottom={4}></Divider>
        <Text paddingTop={2}>Uploading 🚀</Text>
      </CardBody>
    </Card>
  );
};

const availableCard = ({ fileProps = {} }) => {
  return (
    <Card w="100%">
      <CardBody>
        <HStack w="100%" align="center" justify="space-between">
          <Text>
            {getIcon(fileProps?.extension)} - {fileProps.name}
          </Text>
          <CheckCircleIcon boxSize={5} color="green"></CheckCircleIcon>
        </HStack>
        <Divider paddingTop={4} paddingBottom={4}></Divider>
        <Text paddingTop={2} fontSize="smaller">
          Disponível para uso.
        </Text>
        <Text paddingTop={2} fontSize="small">
          Id: {fileProps.id}
        </Text>
      </CardBody>
    </Card>
  );
};

export default FileCard;
