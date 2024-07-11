import { useLocation } from "react-router-dom";
import Message from "../layout/Message";

import styles from '../layout/Projetos.module.css'                 
import Container from './../layout/Container';
import LinkButton from "../layout/LinkButton";

function Projetos() {
    const location = useLocation();
    const message = location.state?.message;

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to="/novoprojeto" text="Criar projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container custonClass="start">
                <p>Projetos...</p>
                
            </Container>
        </div>
    );
}

export default Projetos;
