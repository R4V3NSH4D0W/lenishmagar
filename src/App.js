//import logo from './logo.svg'
import ReactDOM from 'react-dom'
import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import{Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/index'
//import { clear } from "@testing-library/user-event/dist/clear";
//import react from 'react';
import About from './components/About/index'
import Contact from './components/Contact/index'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
