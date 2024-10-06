import React from 'react'
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page5 from './components/Page5/Page5';
import Page4 from './components/Page4/Page4';

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  )
}

export default App
