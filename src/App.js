import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Products from "./component/Products/Products";

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className="text-success text-center">Optimize Laptop</h1>
      <h3 className="text-secondary text-center">Choose and Fashion</h3>
      <Products></Products>
    </div>
  );
}

export default App;
