import { useEffect, useState } from "react";
import "../App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import peliculasJSON from "../peliculas.json";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    buscarPeliculas();
  }, []);

  const TOTAL_POR_PAGINA = 7;

  // let peliculas = peliculasJSON;

  const buscarPeliculas = async () => {
    let url = "https://lucasmoy.dev/data/react/peliculas.json";

    let res = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    // mirar porque falla
    // let json = await res.json();

    setPeliculas(peliculasJSON);
  };

  const getTotalPagina = () => {
    let catidadTotalPelis = peliculas.length;

    return Math.ceil(catidadTotalPelis / TOTAL_POR_PAGINA);
  };

  // peliculas = peliculas.slice(0,  5);
  // peliculas = peliculas.slice(5,  10);
  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );
  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
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

export default ListadoPeliculas;
