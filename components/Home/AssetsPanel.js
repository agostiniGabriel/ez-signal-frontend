/**
 * @description       : Painel com os assets disponíveis.
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 15-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { Divider, Container } from "@chakra-ui/react";
import FileUpload from "./FileUpload";
import AssetsList from "./AssetsList";
import { useForm } from "react-hook-form";

export default function AssetsPanel() {
  const { control } = useForm();

  const handleClick = (event) => console.log(data);

  return (
    <Container centerContent maxW="container.m" padding="8">
      <Divider orientation="horizontal" width="120%" mb="3" />
      <FileUpload
        name="fileUpload"
        acceptedFileTypes=".wav"
        isRequired={true}
        placeholder="Upload File"
        control={control}
      >
        Select file to upload
      </FileUpload>
      <Divider orientation="horizontal" width="120%" mb="3" mt="3" />
      <AssetsList></AssetsList>
    </Container>
  );
}
