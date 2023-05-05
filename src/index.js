import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import './index.css';
import App from './App';



const Root = () => {
  return (
    <BrowserRouter>
      <motion.div id='background'
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{repeat: Infinity, duration: .2}}
      >
      </motion.div>
      <App />
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);