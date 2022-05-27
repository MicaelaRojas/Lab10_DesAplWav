import { Controls, Table } from "./components";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  const datos = [
    {
      nombre: "Micaela",
      apellido: "Rojas",
      celular: "123456789",
      correo: "mica@gmail.com",
    },
    {
      nombre: "Mephisto",
      apellido: "Pheles",
      celular: "88888",
      correo: "mephisto@gmail.com",
    },
    {
      nombre: "Joseph ",
      apellido: "Joestar",
      celular: "99999",
      correo: "jojo@gmail.com",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React - Micaela Rojas!</p>
        <Table datos={datos} />
        <Controls sumar={"Texto para sumar"} restar="texto para restar" />
      </header>
    </div>
  );
};

export default App;
