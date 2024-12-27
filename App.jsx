import React from 'react'
import home from './home'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import create from './create'
import Update from './Update'

function App(){
    return(
      <BrowserRouter> 
        <Routes>
            <Route path="/" element={<home/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path='/edit:id' element={<Update/>}></Route>
        </Routes>   
    </BrowserRouter>
    )
}

export default App
