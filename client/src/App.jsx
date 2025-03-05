import "./App.css";
import './components/Header'
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  return (
    <>
     <Header/> 
    
      <main className="main">
     
      <UserList/>
      </main>

    <Footer/>
    </>
  );
}

export default App;
