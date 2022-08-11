import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            {/* <Route path='/signup' element={<Signup />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
