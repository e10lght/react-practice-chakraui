import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

type Props = {
  isOpen: any;
  onClose: any;
  onOpen: any;
  status: string;
  setStatus: (status: string) => void;
};

export const TabMenu = (props: Props) => {
  const { onOpen, setStatus } = props;

  const onClickSuccess = () => {
    setStatus("success");
    onOpen();
  };

  const onClickError = () => {
    setStatus("error");
    onOpen();
  };

  const onClickInfo = () => {
    setStatus("info");
    onOpen();
  };

  return (
    <Tabs>
      <TabList>
        <Tab onClick={onClickSuccess}>Success</Tab>
        <Tab onClick={onClickError}>error</Tab>
        <Tab onClick={onClickInfo}>info</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>success!</p>
        </TabPanel>
        <TabPanel>
          <p>error!</p>
        </TabPanel>
        <TabPanel>
          <p>info!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
