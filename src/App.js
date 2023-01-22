import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home";


function App() {
  return (

        <Router>
          <Routes>
            {/* Error */}
            {/* s */}
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>


  );
}

export default App;
