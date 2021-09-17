import React from 'react'

import { ProjectsContainer, ProjectsSectionDesc, SingleProject, SingleProjectImg } from './projects.styles'
import BasketballImg from '../../assets/photos/bamsketball.png'
import GuitarImg from '../../assets/photos/guitar.png'
import { ShadowCard } from '../shadow-block/shadow-block.styles'
import { SectionTitle } from '../typography/typography.styles'

const Projects = () => (
  <ProjectsContainer>

    <ProjectsSectionDesc>
      <ShadowCard bigPadding={true}>
        <SectionTitle>
          My personal projects
        </SectionTitle>
      </ShadowCard>
    </ProjectsSectionDesc>

    <SingleProject>
      <SingleProjectImg src={BasketballImg} />
      <ShadowCard bigPadding={true}>
        <SectionTitle>
          Bamsketbolio
        </SectionTitle>
      </ShadowCard>
    </SingleProject>

    <SingleProject>
      <SingleProjectImg src={GuitarImg} />
      <ShadowCard bigPadding={true}>
        <SectionTitle>
          Guitareo
        </SectionTitle>
      </ShadowCard>
    </SingleProject>

  </ProjectsContainer>
)

export default Projects