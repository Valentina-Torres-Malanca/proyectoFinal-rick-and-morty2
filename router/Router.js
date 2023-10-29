import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from'../pages/home/home';
import Character from '../pages/characters/characters';
import Contact from '../pages/contact/contact';

export default function Router(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route path='/characters' element={<Character/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

    )
}