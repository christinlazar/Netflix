import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { orginals,action } from './urls';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';



function App() {



  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals}  title={'Netflix Orginals'}/>
      <RowPost url={action} isSmall title={'Action'}/>
    
    </div>
  ); 
}
 
export default App;
