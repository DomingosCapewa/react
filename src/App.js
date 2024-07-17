import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
import Empresa from "./Components/pages/Empresa";
import NovoProjeto from "./Components/pages/NovoProjeto";

import Container from "./Components/layout/Container";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Projetos from "./Components/pages/Projetos";
import Project from "./Components/pages/Project"

function App() {
    return (
        <Router>
           <Navbar />
            <Routes>
                <Route exact path="/" element={<Container customClass="min-height"><Home /> </Container>} />
                <Route path="/projetos" element={<Container customClass="min-height"><Projetos /> </Container>} />
                <Route path="/empresa" element={<Container customClass="min-height"><Empresa /> </Container>} />
                <Route path="/contato" element={<Container customClass="min-height"><Contato /> </Container>} />
                <Route path="/novoprojeto" element={<Container customClass="min-height"><NovoProjeto /> </Container>} />
                <Route path="/project/:id" element={<Container customClass="min-height"><Project  /> </Container>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
