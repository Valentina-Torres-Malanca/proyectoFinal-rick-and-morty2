import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
                <h1 className='title titulo-principal'>Proyect Rick & Morty</h1>
                <h2 className='title titulo-secundario'>Helcome to Rick & Morty Project!</h2>
                <p className='parrafo text-center p2'>This project was made for practicing React and creating a functional website.</p>
                <p className='parrafo text-center p3'>In this website, you can find information about the characters of this animated series.</p>
                <p className='parrafo text-center p3'>Also, you can filter by different types of properties to find the character you are looking for or send us a message for any concerns or suggestions.</p>
                <h3 className='titulo-secundario'>Let's go!</h3>
                <div className='container-botones'>
                    <Link to='/Characters' className='boton'>Characters</Link>
                    <Link to='/Contact' className='boton'>Contact</Link>
                </div>
        </div>
    )
}