import "./scss/app.scss";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import Footer from "./components/Footer/Footer";
import {categories, products} from "./helper/data"




function App() {
  return (
    <>
<Header categories={categories}/>
<Product products={products}/>
<Footer/>
    </>

  );
}

export default App;
