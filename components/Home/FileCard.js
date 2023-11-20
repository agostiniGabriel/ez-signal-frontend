/**
 * @description       : Card para display dos files.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 19-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import {
  Card,
  CardBody,
  Text,
  HStack,
  Spinner,
  Divider,
  Progress,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const FileCard = ({ isUploading = false, fileProps = {} }) => {
  if (isUploading) {
    return (
      <Card width="100%">
        <CardBody>
          <HStack justify="space-between" spacing={8}>
            <Text maxWidth="80%" noOfLines={1}>
              {getIcon(fileProps?.type)} - {fileProps.name.split(".")[0]}
            </Text>
            <Spinner
              emptyColor="gray.200"
              color="blue.500"
              size="md"
              justifySelf="flex-end"
            ></Spinner>
          </HStack>
          <Divider paddingTop={4} paddingBottom={4}></Divider>
          <Text paddingTop={2}>Uploading... 🚀🚀🚀</Text>
          <Progress hasStripe marginTop={4} value={64} />
        </CardBody>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardBody>
          <HStack>
            <Text>
              {getIcon(fileProps?.type)} - {fileProps.name}
            </Text>
            <CheckCircleIcon color="green"></CheckCircleIcon>
          </HStack>
        </CardBody>
      </Card>
    );
  }
};

export const getIcon = (extension) => {
  const icons = {
    wav: "🎵🎙️",
  };

  return icons[extension] || "🤔";
};

export default FileCard;
