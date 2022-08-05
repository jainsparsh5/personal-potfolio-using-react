import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Sparsh Jain</title>
        <meta name="title" content="Sparsh Jain" />
        <meta name="description" content="My personal porfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://personal-potfolio-sparsh.vercel.app/" />
        <meta property="og:title" content="Sparsh Jain" />
        <meta property="og:description" content="My personal porfolio" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://personal-potfolio-sparsh.vercel.app/" />
        <meta property="twitter:title" content="Sparsh Jain" />
        <meta property="twitter:description" content="My personal porfolio"/>
        <meta property="twitter:image" content=""/>
      </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
