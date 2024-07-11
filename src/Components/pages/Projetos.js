import { useLocation } from "react-router-dom";
import Message from "../layout/Message";

function Projetos() {
    const location = useLocation();
    const message = location.state?.message;

    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message} />}
        </div>
    );
}

export default Projetos;
