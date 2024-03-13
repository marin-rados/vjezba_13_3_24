import About from "./components/about";
import Contact from "./components/contact";
// import Header from "./components/header";
import Layout from "./components/layout";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="about" element={<About />} />
              <Route path="news" element={<News />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
