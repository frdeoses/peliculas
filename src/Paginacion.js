export default function Paginacion(props) {
  const getPaginas = () => {
    const res = [];

    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      res.push(
        <a
          onClick={() => {
            props.onChange(pagina);
          }}
          className={props.pagina === pagina ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }

    return res;
  };

  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select>
      <div className="pagination2">
        <span>
          Página {props.pagina} of {props.total}:
        </span>

        {getPaginas()}
      </div>
    </div>
  );
}
