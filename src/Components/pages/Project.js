import styles from "../layout/Project.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import Container from "../layout/Container"
import ProjetoForm from "../project/ProjetoForm"
import Message from "../layout/Message"

function Project () {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjetoForm, setShowProjetoForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log)
        }, 300)
    }, [id])

    function editPost(project) {
//
if(project.budget < project.cost) {
    setMessage("O orçamento não pode ser menor do que o custo do projeto")
    setType("error")
    return false
}
    fetch(`http://localhost:5000/projects/${project.id}`, {
        method: "PATCH",
        headers: {
           "Content-Type": "application/json" 
        },
        body: JSON.stringify(project)
    })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjetoForm(false)
            setMessage("Projeto atualizado!")
            setType('success')
        })
        .catch((err) => console.log(err))
        setMessage("") 
    } 

    function toggleProjetoForm() {
       setShowProjetoForm(!showProjetoForm)
    }
    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
     }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjetoForm}>{!showProjetoForm ? "Editar projeto" : "Fechar"}</button>
                            {!showProjetoForm ? (
                                <div className={styles.project_info}>
                                   <p>
                                    <span>Categoria:</span>
                                  {project.category.name} </p> 
                                  <p>
                                    <span>Total de Orçamento:</span>R${project.budget}
                                  </p>
                                  <p>
                                  <span>Total utilizado:</span>R${project.cost}
                                </p>
                                    
                                </div>
                            ) : (
                              <div className={styles.project_info}>
                                <ProjetoForm handleSubmit={editPost} btnText="Concluir edição" projectData={project}/>
                              </div>
                                
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                          <h2>Adicione um serviço</h2>
                          <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm ? "Adicionar serviço" : "Fechar"}</button>
                        </div>
                    </Container> 
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project
