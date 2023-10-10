/**
 * @description       : Componente para seleção do tema da pagina
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 09-10-2023
 * @last modified by  : Gabriel Agostini
 **/
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Flex, Switch, useColorMode } from "@chakra-ui/react";

export default function ThemeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="center">
      <SunIcon margin="1vh" />
      <Switch onChange={handleToggle} isChecked={colorMode === "dark"} />
      <MoonIcon margin="1vh" />
    </Flex>
  );

  function handleToggle() {
    toggleColorMode();
  }
}
