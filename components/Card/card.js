import InfoCard from '../InfoCard/Infocard';
import { useState } from 'react';

export default function Card({ data }) {
  const [show, setShow] = useState(false);

  const mostrarLista = () => {
    setShow(true);
  };

  const getCardStyle = () => {
    const cardStyle = {
      border: '2px solid var(--azul-oscuro)',
      padding: '20px',
      backgroundColor: 'var(--azul-oscuro)',
      color: 'var(--verde-claro)',
      borderRadius: '1.5%',
      width: '300px', 
      margin: '20px', 
      boxSizing: 'border-box', 
    };

    return cardStyle;
  };

  const getImageStyle = () => {
    const imageStyle = {
      width: '100%', 
      height: 'auto', 
    };

    return imageStyle;
  };

  return (
    <div className='Card-Container'>
      <div className='card-personaje' style={getCardStyle()}>
        <img
          className='imagenPersonajeTarjeta'
          src={data.image}
          alt="imagen-personaje..."
          style={getImageStyle()}
        />
        <div className='card-body'>
          <h3 className='nombreTarjetaPersonaje'>{data.name}</h3>
          <button
            className={`btn ${show ? 'd-none' : 'd-block'}`}
            onClick={mostrarLista}
            style={{
              backgroundColor: 'var(--verde-claro)',
              fontSize: 'inherit', 
              padding: '10px', 
            }}
          >
            Know More..
          </button>
        </div>
        {show === true ? (
          <InfoCard
            status={data.status}
            genero={data.gender}
            especie={data.species}
            origen={data.origin.name}
            setShow={setShow}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}