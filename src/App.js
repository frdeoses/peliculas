import "./App.css";
import PageWrapper from "./PageWrapper";
import Pelicula from "./Pelicula";
import peliculasJSON from "./peliculas.json";

function App() {
  let peliculas = peliculasJSON;

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
    </PageWrapper>
  );
}

export default App;
