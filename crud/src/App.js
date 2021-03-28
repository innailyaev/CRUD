import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Components/Header";
import Create from "./Components/Create";

import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/add" exact component={Create}/>
          {/* <Route path="/product/:id" exact component={ProductDetails}/> */}

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
