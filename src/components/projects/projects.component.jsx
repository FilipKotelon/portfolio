import React from 'react'
import { useScrollSection } from 'react-scroll-section'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { ProjectsContainer, ProjectsSectionDesc, SingleProject, SingleProjectImg, SingleProjectDesc, ProjectsSectionDescCard, SingleProjectComingSoon, SingleProjectTags } from './projects.styles'
import { SectionTitle, SmallDesc, MediumTitle, BigDesc, MediumDesc, Clickable, Tag } from '../typography/typography.styles'
import 'react-lazy-load-image-component/src/effects/blur.css'

import SanctearyImg from '../../assets/photos/sancteary.png'
import SanctearyImgMin from '../../assets/photos/sancteary-min.png'
import SolutionPeopleImg from '../../assets/photos/solution-people.png'
import SolutionPeopleImgMin from '../../assets/photos/solution-people-min.png'

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

        <SingleProjectImg
          as={ LazyLoadImage }
          effect="blur"
          src={ SolutionPeopleImg }
          placeholderSrc={ SolutionPeopleImgMin }
          className="single-project-img"
        />
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
        <SingleProjectImg
          as={ LazyLoadImage }
          effect="blur"
          src={ SanctearyImg }
          placeholderSrc={ SanctearyImgMin }
          className="single-project-img"
        />
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