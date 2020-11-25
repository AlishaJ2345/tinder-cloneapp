import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BE, class naming convention
    <div className="app">
       
       
       <Header />
       <TinderCards />
       <SwipeButtons />
      
    </div>
  );
}

export default App;
