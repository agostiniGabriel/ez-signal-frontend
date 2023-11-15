/**
 * @description       :
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 15-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { Grid, Container, GridItem, Text } from "@chakra-ui/react";

import AssetsPanel from "./AssetsPanel";

function ProcessignTools() {
  return (
    <Container
      maxW="container.xxl"
      borderRadius="lg"
      boxShadow="dark-lg"
      padding="8"
    >
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateColumns={"30% 1fr"}
        h=""
        fontWeight="bold"
      >
        <GridItem pl="0" area={"header"}>
          <Text fontSize="2xl" alignSelf="center">
            Descomplicando o processamento de sinais 🖖
          </Text>
        </GridItem>

        <GridItem pl="0" area={"nav"}>
          <AssetsPanel></AssetsPanel>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default ProcessignTools;
