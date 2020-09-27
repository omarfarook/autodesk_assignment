import React from 'react';
import AppRouter from './app-router'
import { Provider } from "react-redux";
import store from "./store";
import './App.scss';
import Footer from './components/footer'

const App = () => {
  return (
    <Provider store={store}>
      <div className="root">
        <AppRouter />
        <Footer />
      </div>
    </Provider>
  );
  }
export default App
