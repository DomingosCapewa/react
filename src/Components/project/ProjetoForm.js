import React, { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "../project/ProjetoForm.module.css";

function ProjetoForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || { name: '', budget: '', category: { id: '', name: '' } });

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleOnChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    const categoryId = e.target.value;
    const categoryName = e.target.options[e.target.selectedIndex].text;
    setProject({ ...project, category: { id: categoryId, name: categoryName } });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleOnChange}
        value={project.name}
      />
      <div>
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Qual será o orçamento total?"
          handleOnChange={handleOnChange}
          value={project.budget}
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category.id}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjetoForm;
