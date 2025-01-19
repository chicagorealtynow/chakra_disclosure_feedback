import React from 'react';
    import { Outlet } from 'react-router-dom';
    import { Box, Flex, Heading } from '@chakra-ui/react';
    
    function App() {
      return (
        <Flex direction="column" align="center" p={4}>
          <Heading mb={4}>Chakra UI Tutorial</Heading>
          <Box width="100%" maxWidth="800px">
            <Outlet />
          </Box>
        </Flex>
      );
    }
    
    export default App;
