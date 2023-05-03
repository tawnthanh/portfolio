import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import './index.css';
import App from './App';

const Root = () => {
  return (
    <BrowserRouter>
      <motion.div className='background'
      whileInView={{ opacity: .7 }}
      animate={{ opacity: 1 }}
      transition={{repeat: Infinity, repeatDelay: 1, duration: .5}}
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