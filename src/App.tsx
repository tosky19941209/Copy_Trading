import React from 'react';
import logo from './logo.svg';
import Layout from './layout';
import ProjectRouter from './routers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <ProjectRouter />
      </Layout>
    </div>
  );
}

export default App;
