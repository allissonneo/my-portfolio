// src/components/Projects.tsx

import React from "react";

const Projects = () => {
  return (
    <section id="projects">
  <div>
    <h2>Projetos</h2>
    <div >
      {/* map dos projetos aqui */}
      <div>  
        <h3 >Nome do Projeto</h3>
        <p className="project-description">Descrição resumida do projeto.</p>
        <a href="#" className="link-seemore">Ver mais</a>
      </div>
    </div>
  </div>
</section>
  );
};

export default Projects;
