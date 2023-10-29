import Nav from '../../components/Nav/navegation'
import { Fragment } from 'react';
import './contact.css';


export default function Contact() {
    return(
        <Fragment>
            <Nav itemMenu={"Contact"}/>
            <main className='w-100 vh-100 d-flex align-items-center justify-content-center'>
            <section className='ContactColor w-75 m-5 p-5'>
                <h2 className='tituloContact d-flex flex-column align-items-center'>Contact</h2>
                <h3 className='tituloContact titulosecundario'>Leave us your information so we can contact you Name </h3>
                <form className="formulario row g-3" action='' method='post'>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="tituloContact form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="tituloContact form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email'/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="message" className="Message-form form-label">Message</label>
                        <textarea id='message' name='message' className='w-100'>
                    </textarea>
                </div>
    
                    <div className="boton-send ">
                    <input className='botonsend-tamaño inputColor' type="submit" value="Send" />
                    </div>
                </form> 
            </section>           
            </main>

        </Fragment>
    )
}