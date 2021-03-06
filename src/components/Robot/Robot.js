import PropTypes from "prop-types";
import useRobot from "../../hooks/useRobot";
import "./Robot.css";

const Robot = ({ infoRobot, day, month, year }) => {
  const { deleteRobots } = useRobot();
  const clickDelete = (id) => {
    deleteRobots(id);
  };
  return (
    <article className="card-robot col-6">
      <div className="card-robot_container-image">
        <img
          src={infoRobot.imagen}
          alt={infoRobot.nombre}
          className="card-robot__image"
          whith="150"
        />
      </div>

      <h2 className="card-robot__title">{infoRobot.nombre}</h2>
      <h3 className="card-robot__title-features">
        Características de {infoRobot.nombre}
      </h3>
      <ul className="card-robot__list-features">
        <li className="card-robot__feature">
          Velocidad: {infoRobot.caracteristicas.velocidad}
        </li>
        <li className="card-robot__feature">
          Resistencia: {infoRobot.caracteristicas.resistencia}
        </li>
        <li className="card-robot__feature">
          Fecha de creación: {`${day}-${month}-${year} `}
        </li>
      </ul>
      <button type="button" className="btn btn-dark card-robot__edit col-6">
        Editar
      </button>
      <button
        type="button"
        className="btn btn-danger card-robot__delete col-6"
        onClick={() => {
          clickDelete(infoRobot._id);
        }}
      >
        Eliminar
      </button>
    </article>
  );
};

Robot.propTypes = {
  infoRobot: PropTypes.object.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Robot;
