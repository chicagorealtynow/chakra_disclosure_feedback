import React from 'react';
    import {
      Alert,
      AlertIcon,
      CircularProgress,
      Progress,
      Skeleton,
      Spinner,
      useToast,
      Button,
      Box,
      Heading,
    } from '@chakra-ui/react';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    
    function FeedbackPage() {
      const toast = useToast();
      const [progressValue, setProgressValue] = useState(0);
    
      const showToast = () => {
        toast({
          title: 'Toast Notification',
          description: 'This is a toast message.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      };
    
      const startProgress = () => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += 10;
          setProgressValue(currentProgress);
          if (currentProgress >= 100) {
            clearInterval(interval);
          }
        }, 500);
      };
    
      return (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Feedback Components
          </Heading>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              Alert
            </Heading>
            <Alert status="success">
              <AlertIcon />
              Data submitted successfully!
            </Alert>
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              Circular Progress
            </Heading>
            <CircularProgress value={60} color="green.400" />
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              Progress
            </Heading>
            <Progress value={progressValue} color="blue.500" />
            <Button mt={2} onClick={startProgress}>
              Start Progress
            </Button>
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              Skeleton
            </Heading>
            <Skeleton height="20px" />
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              Spinner
            </Heading>
            <Spinner color="red.500" />
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" mb={2}>
              Toast
            </Heading>
            <Button onClick={showToast}>Show Toast</Button>
          </Box>
          <Box mt={4}>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </Box>
        </Box>
      );
    }
    
    export default FeedbackPage;
