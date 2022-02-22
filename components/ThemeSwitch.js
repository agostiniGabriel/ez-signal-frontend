/**
 * @description       : Componente para seleção do tema da pagina
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 21-02-2022
 * @last modified by  : Gabriel Agostini
**/
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Flex, Switch, useColorMode } from "@chakra-ui/react";
import { useEffect , useState } from "react";

export default function ThemeSwitch(){

    const { toggleColorMode }  = useColorMode();
    
    const [ lightTheme, setLightTheme ] = useState(0);

    useEffect(()=>{
         const  ezSignalUI = window.localStorage.getItem('ezSignalUI');
         console.log('theme', ezSignalUI.theme);
         setLightTheme(ezSignalUI?.theme === 'light');
    },[])

    return(
        <Flex alignItems='center' justifyContent='center'>
            <SunIcon margin='1vh'/>
            <Switch onChange={handleToggle} isChecked={!lightTheme}/>
            <MoonIcon margin='1vh'/>
        </Flex>
    )

    function handleToggle(){
        setLightTheme(!lightTheme);
        const ezSignalUI = localStorage.getItem('ezSignalUI');
        window.localStorage.setItem('ezSignalUI', {
             ...ezSignalUI ,
             theme: lightTheme? 'light':'dark'
        });
        toggleColorMode();
    }
}

