import { useState } from "react";
import "./App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import peliculasJSON from "./peliculas.json";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);

  const TOTAL_POR_PAGINA = 7;

  let peliculas = peliculasJSON;

  const cargarPeliculas = () => {
    // peliculas = peliculas.slice(0,  5);
    // peliculas = peliculas.slice(5,  10);
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  const getTotalPagina = () => {
    let catidadTotalPelis = peliculasJSON.length;

    return Math.ceil(catidadTotalPelis / TOTAL_POR_PAGINA);
  };

  cargarPeliculas();
  return (
    <PageWrapper>
      {peliculas.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPagina()}
        onChange={(pag) => {
          setPaginaActual(pag);
        }}
      />
    </PageWrapper>
  );
}

export default App;
