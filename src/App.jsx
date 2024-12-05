import { BrowserRouter as Router,Routes, Route } from "react-router-dom"

import Home from "./component/pages/Home"
import Login from "./component/pages/Login"


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element= { <Home />} />
        <Route path="/Login" element= { <Login />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App