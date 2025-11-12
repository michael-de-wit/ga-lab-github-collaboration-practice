import {Route, Routes} from 'react-router';
import HomePage from './pages/HomePage.jsx'
import Note from './pages/Note.jsx'
import Create from './pages/Create.jsx'
import Edit from './pages/Edit.jsx'


const App = () => {
  return (
    <div data-theme="night">
    <button className="btn btn-primary">One</button>
<button className="btn btn-secondary">Two</button>
<button className="btn btn-primary">Three</button>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/note/:id' element={<Note/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>




    </div>
  )
}

export default App