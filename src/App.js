import "./style.css";
import chapo from "./chapo.jpg";

function App() {
  return (
    <div>
      <h3 className="title">Narcos</h3>
      <div
        style={{
          border: "solid gray 1px",
          borderRadius: "10px",
          boxShadow: "1px 1px 10px 1px",
          maxWidth: "50vw",
        }}
        className="container"
      >
        <h1 className="title-red">Pablo Emilio Escobar Gaviria</h1>
        <img
          src="images/pablo.jpg"
          style={{
            border: "solid gray 1px",
            borderRadius: "10px",
            boxShadow: " blue 1px 1px 10px 1px",
            width: "130px",
            height: "200px",
          }}
        />
        <h1 className="title-red">Joaquín Archivaldo Guzmán Loera</h1>
        <img
          src={chapo}
          style={{
            border: "solid gray 1px",
            borderRadius: "10px",
            boxShadow: " blue 1px 1px 10px 1px",
            width: "130px",
            height: "200px",
          }}
        />
      </div>
      <h1 className="title-red" style={{ marginLeft: "400px" }}>
        Most wanted drug dealers in history
      </h1>

      <video
        style={{
          width: "420px",
          height: "340px",
          marginLeft: "380px",
          padding: "50px",
        }}
        controls
      >
        <source src="videos/narco.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
