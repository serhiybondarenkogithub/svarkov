import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import theme from './styles/theme';
import CustomThemeProvider from './styles/CustomThemeProvider';

// eslint-disable-next-line
import "swiper/css/bundle";
import "./sections/MainCarousel/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <CustomThemeProvider theme={theme}>
        <App />
      </CustomThemeProvider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
