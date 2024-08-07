import  styles from "../layout/Home.module.css"
import savings from "../../img/savings.svg"
import { Link } from "react-router-dom"
import LinkButton from "../layout/LinkButton"


function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/novoprojeto" text="Criar projeto" />
            <img src={savings} alt="Img Costs" />
        </section>
    )
}

export default Home