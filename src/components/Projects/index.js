import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I have also worked on some small web projects and currently working on bigger projects. Here are some of my projects:
        </Desc>
        
        <CardContainer>
          {projects.map((project)=>{
           return <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>}

          )}
        
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects