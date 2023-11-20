/**
 * @description       : File Upload.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 19-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilesToUpload } from "../../store/filesSlice";

export const FileUpload = ({
  name,
  acceptedFileTypes,
  allowMultipleFiles = false,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [valueString, setValueString] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(0);
  let fileList = [];

  const handleChange = async (event) => {
    const fileObject = event.target.files;
    fileList = Object.keys(event.target.files).map((key) => {
      return fileObject[key];
    });
    setValueString(
      fileList.reduce(
        (accumulator, currentValue) => accumulator + "; " + currentValue.name,
        ""
      )
    );
    setSelectedFiles(fileList.length);
    dispatch(updateFilesToUpload(fileList || []));
  };

  const handleUpload = () => {};

  return (
    <VStack alignItems="flex-start" flexGrow="1">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiFile} />
        </InputLeftElement>
        <input
          type="file"
          onChange={handleChange}
          accept={acceptedFileTypes}
          multiple={allowMultipleFiles || false}
          name={name}
          ref={inputRef}
          style={{ display: "none" }}
        />
        <Input
          placeholder="Nenhum arquivo selecionado..."
          onClick={() => inputRef.current.click()}
          readOnly={true}
          value={valueString || ""}
        />
      </InputGroup>
      <Text padding={1} fontSize="small">
        {selectedFiles} arquivos selecionados.
      </Text>
      <Button colorScheme="blue" onClick={handleUpload} alignSelf="flex-end">
        Upload
      </Button>
    </VStack>
  );
};

export default FileUpload;
