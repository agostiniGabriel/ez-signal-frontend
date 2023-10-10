/**
 * @description       : Componente de navegacao entre as paginas
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 09-10-2023
 * @last modified by  : Gabriel Agostini
 **/
import {
  Button,
  Flex,
  Stack,
  Divider,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [navBarItems, setNavBarItems] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const initialState = [
      {
        navLabel: "Home",
        isSelected: false,
        navPath: "/",
      },
      {
        navLabel: "Docs",
        isSelected: false,
        navPath: "/docs",
      },
      {
        navLabel: "Sobre",
        isSelected: false,
        navPath: "/sobre",
      },
    ];
    const { pathname } = window.location;

    initialState.map((item) => {
      item.isSelected = pathname === item.navPath;
      return item;
    });

    setNavBarItems(initialState);
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      padding="1vh"
    >
      <Stack
        spacing="1.5vh"
        direction={["column", "row"]}
        alignItems="center"
        justifySelf="center"
      >
        <Image
          src="/icon.svg"
          alt="Ez Signal"
          width={40}
          height={40}
          margin="1vh"
        />
        <Divider orientation="vertical" height="40px" />
        <Heading size="sm">Ez Signal</Heading>
        <ThemeSwitch />
      </Stack>

      <Flex
        height="10vh"
        alignItems="center"
        justifyContent="right"
        wrap="wrap"
      >
        {navBarItems.map((item, index) => (
          <>
            <Link href={item.navPath} passHref id={`link-${index}`}>
              <Button
                onClick={handleClick}
                margin="1vh"
                width="10vh"
                minWidth="8vh"
                id={item.navPath}
                colorScheme={
                  item.isSelected
                    ? "blue"
                    : colorMode === "dark"
                    ? "whiteAlpha"
                    : "gray"
                }
              >
                {item.navLabel}
              </Button>
            </Link>
          </>
        ))}
      </Flex>
      <Divider orientation="horizontal" width="100%" />
    </Flex>
  );

  function handleClick(event) {
    const { id } = event.target;

    let newNavBarItems = navBarItems.map((item) => {
      item.isSelected = item.navPath === id;
      return item;
    });

    setNavBarItems(newNavBarItems);
  }
}
