import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../navbar/Navbar'
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";
import {styles} from "../../styles/Styles";
function App() {
  return (
    <div style={styles.Container}>
      <h1 style={styles.Header}>Welcome to my App!</h1>
        <Router>
            <Navbar />
            <Routes>
                <Route path = '/' exact element={<AboutMe/>}/>
                <Route path = '/projects' element={<Projects/>}/>
                <Route path = '/contacts' element={<ContactMe/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
