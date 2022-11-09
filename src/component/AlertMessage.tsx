import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";

type Props = {
  isOpen: any;
  onClose: any;
  onOpen: any;
  status: string;
};

export const AlertMessage = (props: Props) => {
  const { isOpen, onClose, onOpen, status } = props;

  return isOpen ? (
    <Alert status={status}>
      <AlertIcon />
      <Box>
        <AlertTitle>{status}</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  );
};
