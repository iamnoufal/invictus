import "./Pass.css";

const EventPass = ({ name, status, ...rest }) => {
  return (
    <div className="event-pass card px-2 py-4 m-5 event-card mx-4 mt-2 mb-3 p-0 rounded">
      <h3 className="text-color-green text-uppercase text-center mb-4">{name}</h3>
      <div className="text-color-green text-center">
        <span className="text-uppercase">
          <span >Event Status:</span> {status}
        </span>
      </div>
    </div>
  );
};

export default EventPass;
