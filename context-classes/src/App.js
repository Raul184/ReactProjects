import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
//Context Provider
import {Provider} from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";


function App() {
  return (
    <Provider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />  
        </PageContent>
      </LanguageProvider>
    </Provider>
  );
}

export default App;
