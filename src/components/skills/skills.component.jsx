import React from 'react'
import { ScrollPercentage } from 'react-scroll-percentage'
import { SectionTitle } from '../typography/typography.styles';

import { SkillsContainer, SkillsSection, SkillsTitleCon, SkillsTitleInfo } from './skills.styles'

import JSImg from '../../assets/logos/js.png';
import SkillItem from './skill-item/skill-item.component';

const Skills = () => (
  <ScrollPercentage>
    {
      ({ percentage, ref, entry }) => {
        const showSkills = percentage > 0;

        return (
          <SkillsContainer ref={ref}>

            <SkillsTitleCon>
              <SectionTitle>My skills</SectionTitle>
              <SkillsTitleInfo>(Click on an item to get more details)</SkillsTitleInfo>
            </SkillsTitleCon>

            <SkillsSection>
              <SkillItem thumb={JSImg}>
                Hello
              </SkillItem>
            </SkillsSection>

          </SkillsContainer>
        )
      }
    }
  </ScrollPercentage>
)

export default Skills