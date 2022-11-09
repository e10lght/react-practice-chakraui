import * as React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

import { TabMenu } from "./component/TabMenu";
import { AccordingMenu } from "./component/AccordingMenu";
import { AlertMessage } from "./component/AlertMessage";

export default function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const status = "info";
  return (
    <ChakraProvider>
      <TabMenu
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        status={status}
      />
      <AlertMessage
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        status={status}
      />
      <AccordingMenu />
    </ChakraProvider>
  );
}
