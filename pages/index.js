/**
 * @description       :
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 19-11-2023
 * @last modified by  : Gabriel Agostini
 **/

import { Flex, Heading, Text, Stack, Box } from "@chakra-ui/react";
import AppContainer from "../components/Home/AppContainer";
import WaveBox from "../components/Home/WaveBox";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      width="100%"
    >
      <Stack alignItems="center" width="90%">
        <Flex flexDirection="row" alignItems="center">
          <WaveBox
            boxSize={{
              height: "200",
              width: "100%",
            }}
          >
            <Heading
              paddingBlockStart="8"
              textAlign="center"
              color="whiteAlpha.800"
            >
              Bem vindo ao
            </Heading>
            <MotionBox>
              <Text
                bgGradient="linear(to-l, #9DECF9, #00B5D8)"
                bgClip="text"
                fontSize="4xl"
                fontWeight="extrabold"
              >
                Ez Signal!
              </Text>
            </MotionBox>
          </WaveBox>
        </Flex>
        <AppContainer />
      </Stack>
    </Flex>
  );
}
