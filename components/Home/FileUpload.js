/**
 * @description       : File Upload.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 20-11-2023
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
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilesToUpload,
  selectFilesToUpload,
  selectFilesUploading,
  updateFilesUploding,
  updateIndexedFiles,
  cleanFilesToUpload,
  removeFileFromUploadingList,
} from "../../store/filesSlice";
import { v4 as uuidv4 } from "uuid";

export const FileUpload = ({
  name,
  acceptedFileTypes,
  allowMultipleFiles = false,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [valueString, setValueString] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(0);
  const fileList = useSelector(selectFilesToUpload);
  const filesUploading = useSelector(selectFilesUploading);

  const handleChange = async (event) => {
    const fileObject = event.target.files;
    const tempFileList = Object.keys(event.target.files).map((key) => {
      const file = fileObject[key];
      file.extension = file.name.split(".").at(-1) || "";
      file.id = `${uuidv4()}.${file.extension}`;
      file.isUploading = false;
      return file;
    });
    setValueString(
      tempFileList.reduce(
        (accumulator, currentValue) => accumulator + currentValue.name + "; ",
        ""
      )
    );
    setSelectedFiles(tempFileList.length);
    dispatch(updateFilesToUpload(tempFileList || []));
  };

  const handleUpload = () => {
    fileList.map((f) => {
      const body = new FormData();
      body.append("file", f);
      body.append("id", f.id);
      fetch("/api/uploadFile", {
        method: "POST",
        body,
      }).then((response) => {
        handleUploadFinished(response, f);
      });
      return f;
    });
    dispatch(updateFilesUploding(fileList));
    dispatch(cleanFilesToUpload([]));
  };

  const handleUploadFinished = (res, file) => {
    const newAvailableFile = {};
    newAvailableFile[file.id] = file;
    dispatch(updateIndexedFiles(newAvailableFile));
    dispatch(removeFileFromUploadingList(file.id));
  };

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
      <Button
        isDisabled={fileList.length === 0}
        colorScheme="blue"
        onClick={handleUpload}
        alignSelf="flex-end"
      >
        Confirmar Upload
      </Button>
    </VStack>
  );
};

export default FileUpload;
