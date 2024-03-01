import Watchlist from "./watchlist";
import Booklist from "./bookslist";
import CartButton from "./components/buttons/cartButton";
import previewButton from "./components/buttons/previewButton";


function App() {
  return (
    <div className="App">
      <h1>amazon best sellers</h1>
      <Watchlist/>
      <Booklist/>
      <CartButton/>
      <previewButton/>
    </div>
  );
}

export default App;
