// src/components/Projects.tsx

import React from "react";
import Project from "./Project";

const Projects = () => {
  const projectData = [
    {
      title: "Clone Netflix",
      description: "Uma cópia da interface da Netflix com React.",
      image: "/assets/netflix-clone.png",
      link: "/projetos/netflix-clone"
    },
    {
      title: "ToDo App",
      description: "Aplicativo de tarefas com React + Hooks.",
      image: "/assets/todo-app.png",
      link: "/projetos/todo-app"
    },
    {
      title: "Portfolio Dev",
      description: "Meu portfólio pessoal com React e SCSS.",
      image: "/assets/portfolio.png",
      link: "/projetos/portfolio"
    },
    {
      title: "E-commerce",
      description: "Loja virtual simples com carrinho de compras.",
      image: "/assets/ecommerce.png",
      link: "/projetos/ecommerce"
    },
    {
      title: "Jogo da Velha",
      description: "Jogo da velha com modo PvP.",
      image: "/assets/jogo-da-velha.png",
      link: "/projetos/jogo-da-velha"
    },
    {
      title: "Dashboard",
      description: "Painel de administração com gráficos interativos.",
      image: "/assets/dashboard.png",
      link: "/projetos/dashboard"
    },
  ];
  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
        <span className="name">Meu trabalho</span>
        <h1 className="profile-title">Veja os projetos em destaque</h1>
        </div>
        <div>
          <div className="projects-list"> 
            {projectData.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
