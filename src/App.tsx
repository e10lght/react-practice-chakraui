import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

import { TabMenu } from "./component/TabMenu";
import { AccordingMenu } from "./component/AccordingMenu";
import { AlertMessage } from "./component/AlertMessage";
import { useState } from "react";

export default function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [status, setStatus] = useState("");

  return (
    <ChakraProvider>
      <TabMenu
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        setStatus={setStatus}
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
