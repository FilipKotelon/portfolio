import React from 'react'

import { ProjectsContainer, ProjectsSectionDesc, SingleProject, SingleProjectImg, SingleProjectDesc, ProjectsSectionDescCard, SingleProjectComingSoon, SingleProjectTags } from './projects.styles'
import SanctearyImg from '../../assets/photos/sancteary.png'
import SolutionPeopleImg from '../../assets/photos/solution-people.png'
import { SectionTitle, SmallDesc, MediumTitle, BigDesc, MediumDesc, Clickable, Tag } from '../typography/typography.styles'
import { useScrollSection } from 'react-scroll-section'

const Projects = () => {
  const contactSection = useScrollSection('contact');

  return (
    <ProjectsContainer>
  
      <ProjectsSectionDesc>
        <ProjectsSectionDescCard bigPadding={true}>
          <SectionTitle>
            My personal projects
          </SectionTitle>
        </ProjectsSectionDescCard>
        <ProjectsSectionDescCard bigPadding={true}>
          <SmallDesc>
            Here's a pair of projects I made to showcase a bit of my skills and ideas. Check them out to see how I code websites.
          </SmallDesc>
        </ProjectsSectionDescCard>
      </ProjectsSectionDesc>
  
      <SingleProject>
        <SingleProjectImg src={SolutionPeopleImg} />
        <SingleProjectDesc bigPadding={true}>
          <MediumTitle>
            Solution People
          </MediumTitle>
        </SingleProjectDesc>
        <SingleProjectDesc bigPadding={true}>
          <SmallDesc>
            A website of a company which has solutions. It just doesn't know what are these solutions for.
          </SmallDesc>
        </SingleProjectDesc>
        <SingleProjectTags>
          <Tag>Angular</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Sass</Tag>
        </SingleProjectTags>
      </SingleProject>
  
      <SingleProject comingSoon={true}>
        <SingleProjectComingSoon>
          <MediumDesc>
            This project is currently in development. <Clickable onClick={contactSection.onClick}>Contact me</Clickable> if you want to know more!
          </MediumDesc>
        </SingleProjectComingSoon>
        <SingleProjectImg src={SanctearyImg} />
        <SingleProjectDesc bigPadding={true}>
          <MediumTitle>
            Sancteary
          </MediumTitle>
        </SingleProjectDesc>
        <SingleProjectDesc bigPadding={true}>
          <SmallDesc>
            A warm and welcoming tea shop which won't sell you anything because it doesn't actually exist.
          </SmallDesc>
        </SingleProjectDesc>
        <SingleProjectTags>
          <Tag>Angular</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Sass</Tag>
          <Tag>NgRx</Tag>
        </SingleProjectTags>
      </SingleProject>
  
    </ProjectsContainer>
  )
}

export default Projects