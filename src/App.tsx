import React from 'react';
import {RouterProvider} from 'react-router-dom'
import { Mainrouter } from './Router/Mainrouter';
import Header from './Static/Header';

function App() {
  return (
    <div >
      {/* <Header/> */}
      <RouterProvider
      router={Mainrouter}
      />
    </div>
  );
}

export default App;
