import React from 'react';
    import { Link } from 'react-router-dom';
    import { Box, Heading, List, ListItem } from '@chakra-ui/react';
    
    function HomePage() {
      return (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Examples
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Link to="/accordion">Accordion Disclosure</Link>
            </ListItem>
            <ListItem>
              <Link to="/tabs">Tabs Disclosure</Link>
            </ListItem>
            <ListItem>
              <Link to="/feedback">Feedback Components</Link>
            </ListItem>
          </List>
        </Box>
      );
    }
    
    export default HomePage;
