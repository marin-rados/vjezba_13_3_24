import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import NoMatch from "./pages/noMatch";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
