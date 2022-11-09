import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

type Props = {
  isOpen: any;
  onClose: any;
  onOpen: any;
  status: string;
};

export const TabMenu = (props: Props) => {
  const { isOpen, onClose, onOpen } = props;
  const onClickSuccess = () => {
    onOpen();
  };
  const onClickError = () => {
    onOpen();
  };
  const onClickInfo = () => {};
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
