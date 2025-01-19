import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { ChakraProvider } from '@chakra-ui/react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import App from './App';
    import HomePage from './pages/HomePage';
    import AccordionPage from './pages/AccordionPage';
    import TabsPage from './pages/TabsPage';
    import FeedbackPage from './pages/FeedbackPage';
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="accordion" element={<AccordionPage />} />
                <Route path="tabs" element={<TabsPage />} />
                <Route path="feedback" element={<FeedbackPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </React.StrictMode>
    );
