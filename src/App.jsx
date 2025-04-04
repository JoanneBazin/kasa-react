import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
