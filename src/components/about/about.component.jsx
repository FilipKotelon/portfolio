import React from 'react'
import PathMaker from '../pathmaker/pathmaker.component'
import { PathMakerWaypoint } from '../pathmaker/pathmaker.styles'

import { ShadowBlock, ShadowCard } from '../shadow-block/shadow-block.styles'
import { SectionTitle } from '../typography/typography.styles'
import { AboutCard, AboutCardDesc, AboutCardNumber, AboutContainer } from './about.styles'

const About = () => (
  <AboutContainer>

    <ShadowCard bigPadding={true}>
      <SectionTitle>
        About me
      </SectionTitle>
    </ShadowCard>

    <PathMaker className="path-maker" hideChildrenBeforeScroll={true}>

      <PathMakerWaypoint left="20%" as={AboutCard}>
        <AboutCardNumber>
          01
        </AboutCardNumber>
        <AboutCardDesc>
          I’m a Front End Developer, but I would not mind going Full Stack.
        </AboutCardDesc>
      </PathMakerWaypoint>

      <PathMakerWaypoint left="48%" as={AboutCard}>
        <AboutCardNumber>
          02
        </AboutCardNumber>
        <AboutCardDesc>
          2.5+ years of work experience, but I’ve been coding websites for over 5 years total.
        </AboutCardDesc>
      </PathMakerWaypoint>

      <PathMakerWaypoint left="27%" as={AboutCard}>
        <AboutCardNumber>
          03
        </AboutCardNumber>
        <AboutCardDesc>
          I can think of solutions to problems by breaking down everything to its simplest components. That makes me pretty good at explaining those solutions to others.
        </AboutCardDesc>
      </PathMakerWaypoint>

      <PathMakerWaypoint left="15%" as={AboutCard}>
        <AboutCardNumber>
          04
        </AboutCardNumber>
        <AboutCardDesc>
          I like programming. There, I had to write it so you would think of me as a passionate young developer. But I actually like it. I like the problem solving and working on interesting projects.
        </AboutCardDesc>
      </PathMakerWaypoint>

      <PathMakerWaypoint left="37%" as={AboutCard}>
        <AboutCardNumber>
          05
        </AboutCardNumber>
        <AboutCardDesc>
          I really enjoy learning. New technologies, new libraries, this is what keeps me motivated to develop in programming. But not only in programming, I like learning new things in general, whether it is a new song for guitar, a new instrument, maybe a new basketball move, that I will nail each time in practice and fail miserably while playing with friends.
        </AboutCardDesc>
      </PathMakerWaypoint>

      <PathMakerWaypoint left="56%" as={AboutCard}>
        <AboutCardNumber>
          06
        </AboutCardNumber>
        <AboutCardDesc>
          I love music. I play my acoustic guitar in the style of Tommy Emmanuel. Have you not heard of him? Here, check <a href="https://www.youtube.com/watch?v=S33tWZqXhnk" target="_blank" rel="nofollow">this video</a> out. Is your jaw on the floor? Mine still is after 2 years since I’vefirst seen it. But I’ll learn this song one day.
        </AboutCardDesc>
      </PathMakerWaypoint>

      <PathMakerWaypoint left="33%" as={AboutCard}>
        <AboutCardNumber>
          07
        </AboutCardNumber>
        <AboutCardDesc>
          I’m addicted to basketball. Like really addicted. Like actually feeling empty when I can neither watch nor play basketball for a longer period of time. That period being like 3 days.
        </AboutCardDesc>
      </PathMakerWaypoint>

    </PathMaker>

  </AboutContainer>
)

export default About