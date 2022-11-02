import { Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Todo from './components/Todo'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
