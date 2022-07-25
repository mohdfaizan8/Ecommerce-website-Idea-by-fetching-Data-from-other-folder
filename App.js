import React, {useState} from 'react';
import Header from './components/Header';
import Main from "./components/Main";
import Data from "./components/Data"

function App() {
  const [input, setInput] = useState(Data)
  return (
    <>
    <Header/>
    <Main input={input}/>
    </>
  );
}

export default App;
