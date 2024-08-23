// app.jsx
import './App.css';
import Header from './assets/Components/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (

    <div className="App">
      
      <Header />
      <Outlet/>
      
    </div>
  );
}



export default App
