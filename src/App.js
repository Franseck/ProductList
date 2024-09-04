import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import Footer from "./components/Footer/Footer";
import {categories, products} from "./helper/data"




function App() {
  return (
    <>

<Product/>
<Footer/>
    </>

  );
}

export default App;
