import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Navbar';
import Rodape from './Middle';
import Footer from './Footer';
import Faq from './Faq';
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll'

const App = () => {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null)
  const [toggleColorFlag, settoggleColorFlag] = useState(false)


  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: '9b973c6a7ad59733d518903b5e6176702e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
            setIndex(commandData.faqId - 1)
          } else if (commandData.command === 'toggleColorMode') {
            settoggleColorFlag(flag => !flag)
          }
        },
      });
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faq index={index} setIndex={setIndex} />
      <Rodape /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />

    </ChakraProvider>
  )
}

export default App
