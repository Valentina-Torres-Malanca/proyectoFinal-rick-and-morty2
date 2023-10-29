
import React, { useState, useEffect, Fragment, useRef } from 'react';
import Nav from '../../components/Nav/navegation';
import Card from '../../components/Card/card';
import Filter from '../../components/Filter/Filter';
import './characters.css';

export default function Character() {
  const [listaCompleta, setListaCompleta] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [filtros] = useState([
    {
      nombre: 'Alive',
      filtro: 'Character Alive',
    },
    {
      nombre: 'Dead',
      filtro: 'Character Dead',
    },
    {
      nombre: 'Female',
      filtro: 'Female',
    },
    {
      nombre: 'Male',
      filtro: 'Male',
    },
    {
      nombre: 'unknown',
      filtro: 'Origin Unknown',
    },
  ]);
  const [filtrosAplicados, setFiltrosAplicados] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const buttonRef = useRef(null);

  const traerPersonajes = async () => {
    let dato = await fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => resp.json())
      .catch((err) => console.log('Hubo un error: ' + err));

    return dato;
  };

  const aplicarFiltros = (event) => {
    let nombreCheckbox = event.target.id;

    if (event.target.checked === true) {
      console.log('Aplicar filtro');
      setFiltrosAplicados([...filtrosAplicados, nombreCheckbox]);
    } else {
      console.log('Sacar filtro');
      let filtrosRestantes = filtrosAplicados.filter((el) => el !== nombreCheckbox);
      setPersonajes(listaCompleta);
      setFiltrosAplicados(filtrosRestantes);
    }
  };

  useEffect(() => {
    let guardarPersonajes = async () => {
      let info = await traerPersonajes();
      let listaPersonajes = info.results;

      setPersonajes(listaPersonajes);
      setListaCompleta(listaPersonajes);
    };

    guardarPersonajes();
  }, []);

  useEffect(() => {
    filtrosAplicados.forEach((filtroNombre) => {
      let resultado;
      if (filtroNombre === 'Alive' || filtroNombre === 'Dead') {
        resultado = personajes.filter((personaje) => personaje.status === filtroNombre);
      }
      if (filtroNombre === 'Female' || filtroNombre === 'Male') {
        resultado = personajes.filter((personaje) => personaje.gender === filtroNombre);
      }
      if (filtroNombre === 'unknown') {
        resultado = personajes.filter((personaje) => personaje.origin.name === filtroNombre);
      }
      setPersonajes(resultado);
    });
  }, [filtrosAplicados]);

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const buttonClass = isFiltersOpen ? 'btn btn-filters active' : 'btn btn-filters';
  
  return (
    <Fragment>
      <Nav itemMenu={'Characters'} />
      <section className="row section-filters py-5">
        <div className="filters-area d-flex m-2 align-items-center">
          <h2>Filters</h2>
          <button
    className={`btn btn-filters d-lg-none ${isFiltersOpen ? 'active' : ''}`}
    onClick={toggleFilters}
    ref={buttonRef}
>
    <img src="/imagenes/filter-icono.svg" alt="Icono del Filter" />
</button>

        </div>
        <div className={`filters justify-content-between flex-wrap ${isFiltersOpen ? '' : 'd-none d-lg-flex'}`}>
          {filtros.map((item) => {
            return (
              <div key={item.nombre} className="form-check form-switch px-5 py-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id={item.nombre}
                  value={item.nombre}
                  onChange={aplicarFiltros}
                />
                <label className="form-check-label" htmlFor={item.nombre}>
                  {item.filtro}
                </label>
              </div>
            );
          })}
        </div>
      </section>

      <section className="seccion-characters">
        {personajes.length > 0 ? (
          personajes.map((personaje) => {
            return <Card key={personaje.id} data={personaje} />;
          })
        ) : (
          <div className="alert d-flex gap-2" role="alert">
            <i className="bi bi-exclamation-triangle-fill fs-5"></i>
            <p className="m-0">Sorry! There are no characters with all those properties</p>
          </div>
        )}
      </section>
    </Fragment>
  );
        }