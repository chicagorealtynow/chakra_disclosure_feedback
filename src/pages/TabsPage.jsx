import React from 'react';
    import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Button } from '@chakra-ui/react';
    import { Link } from 'react-router-dom';
    
    function TabsPage() {
      return (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Tabs Disclosure
          </Heading>
          <Tabs>
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
    
            <TabPanels>
              <TabPanel>
                <p>
                  First tab content: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Second tab content: Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box mt={4}>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </Box>
        </Box>
      );
    }
    
    export default TabsPage;
