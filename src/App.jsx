import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

export default App;
