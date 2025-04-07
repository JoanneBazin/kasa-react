import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
