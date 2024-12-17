import { useContext, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import UserContextProvider from './context/UserContextProvider';
import UserContext from './context/UserContext';


function App() {
  
  const {setAllUsers} = useContext(UserContext);

  async function getUsers(){
    const response = await fetch("https://api.github.com/users");
    const finalResponse = await response.json();
    
    setAllUsers(finalResponse);
    console.log(finalResponse);
  }
  useEffect(() => {
    getUsers();
  },[]);
  return (
   
    <div className="App">
      <Navbar/>
     <Card/>
    </div>
   
  );
}

export default App;
