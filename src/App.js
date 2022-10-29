import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import Header from "./components/Header";
import { publicRoutes } from "./routes";

function App() {

  return (
    <BrowserRouter>
      <div className="max-w-[1550px] mx-auto font-open-sans ">
        <Header />
        <GoTop />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
