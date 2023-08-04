import "bootstrap/dist/css/bootstrap.css";
import Button from "./Components/ButtonComponent";

function App() {
  return (
    <div className="container bg-light my-4 py-2 text-center">
      <div className="row gy-4 px-5">
        <h1>Formulário</h1>
        <div className="col-lg-6">
          <label htmlFor="name" className="py-2">Nome: </label> <br />
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="col-lg-6">
          <label htmlFor="senha" className="py-2">Password: </label> <br />
          <input type="password" className="form-control" name="senha" />
        </div>
        <div className="col-lg-12">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
