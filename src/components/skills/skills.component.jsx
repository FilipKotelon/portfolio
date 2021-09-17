import React from 'react'
import { ScrollPercentage } from 'react-scroll-percentage'

import { SkillBar, SkillBarDesc, SkillBarsContainer, SkillBarTitle, SkillsChart, SkillsContainer, SkillsTitle, YAxisDesc, YAxisDescItem } from './skills.styles'

const Skills = () => (
  <ScrollPercentage threshold={.8
  }>
    {
      ({ percentage, ref, entry }) => {
        const showSkills = percentage > 0;

        return (
          <SkillsContainer ref={ref}>
            <SkillsTitle>My skills</SkillsTitle>
            <SkillsChart>

              <YAxisDesc>
                <YAxisDescItem>Great</YAxisDescItem>
                <YAxisDescItem>Solid</YAxisDescItem>
                <YAxisDescItem>Good</YAxisDescItem>
                <YAxisDescItem>Basic</YAxisDescItem>
              </YAxisDesc>

              <SkillBarsContainer>

                <SkillBar level={100} delay={0} expanded={showSkills}>
                  <SkillBarTitle>JavaScript</SkillBarTitle>
                  <SkillBarDesc>JavaScript</SkillBarDesc>
                </SkillBar>

                <SkillBar level={84} delay={60} expanded={showSkills}>
                  <SkillBarTitle>ReactJS</SkillBarTitle>
                  <SkillBarDesc>ReactJS</SkillBarDesc>
                </SkillBar>

                <SkillBar level={100} delay={120} expanded={showSkills}>
                  <SkillBarTitle>Sass / CSS3</SkillBarTitle>
                  <SkillBarDesc>Sass / CSS3</SkillBarDesc>
                </SkillBar>

                <SkillBar level={100} delay={180} expanded={showSkills}>
                  <SkillBarTitle>HTML5</SkillBarTitle>
                  <SkillBarDesc>HTML5</SkillBarDesc>
                </SkillBar>

                <SkillBar level={72} delay={240} expanded={showSkills}>
                  <SkillBarTitle>TypeScript</SkillBarTitle>
                  <SkillBarDesc>TypeScript</SkillBarDesc>
                </SkillBar>

                <SkillBar level={68} delay={300} expanded={showSkills}>
                  <SkillBarTitle>GIT</SkillBarTitle>
                  <SkillBarDesc>GIT</SkillBarDesc>
                </SkillBar>

                <SkillBar level={60} delay={360} expanded={showSkills}>
                  <SkillBarTitle>Wordpress</SkillBarTitle>
                  <SkillBarDesc>Wordpress</SkillBarDesc>
                </SkillBar>

                <SkillBar level={25} delay={420} expanded={showSkills}>
                  <SkillBarTitle>GraphQL</SkillBarTitle>
                  <SkillBarDesc>GraphQL</SkillBarDesc>
                </SkillBar>

                <SkillBar level={35} delay={480} expanded={showSkills}>
                  <SkillBarTitle>ASP.NET</SkillBarTitle>
                  <SkillBarDesc>ASP.NET</SkillBarDesc>
                </SkillBar>

                <SkillBar level={40} delay={540} expanded={showSkills}>
                  <SkillBarTitle>C#</SkillBarTitle>
                  <SkillBarDesc>C#</SkillBarDesc>
                </SkillBar>

                <SkillBar level={100} delay={600} expanded={showSkills}>
                  <SkillBarTitle>English</SkillBarTitle>
                  <SkillBarDesc>English</SkillBarDesc>
                </SkillBar>

                <SkillBar level={170} delay={660} expanded={showSkills}>
                  <SkillBarTitle>Sandwich Making</SkillBarTitle>
                  <SkillBarDesc side={'left'}>Sandwich Making</SkillBarDesc>
                </SkillBar>

              </SkillBarsContainer>

            </SkillsChart>
          </SkillsContainer>
        )
      }
    }
  </ScrollPercentage>
)

export default Skills