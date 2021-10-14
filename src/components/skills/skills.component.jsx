import React from 'react'
import { ScrollPercentage } from 'react-scroll-percentage'
import { SectionTitle } from '../typography/typography.styles';

import { SkillsContainer, SkillsSection, SkillsTitleCon, SkillsTitleInfo } from './skills.styles'
import SkillItem from './skill-item/skill-item.component';

import JSImg from '../../assets/logos/js.png';
import SandwichImg from '../../assets/logos/sandwich.png';
import ReactImg from '../../assets/logos/react.png';
import AngularImg from '../../assets/logos/angular.png';
import TSImg from '../../assets/logos/ts.png';
import SassImg from '../../assets/logos/sass.png';
import WPImg from '../../assets/logos/wordpress.png';
import HTMLImg from '../../assets/logos/html.png';
import GitImg from '../../assets/logos/github.png';
import DotNetImg from '../../assets/logos/dotnet.png';
import CSImg from '../../assets/logos/cs.png';
import GoogleImg from '../../assets/logos/google.png';
import GQLImg from '../../assets/logos/gql.png';
import VueImg from '../../assets/logos/vue.png';
import PhpImg from '../../assets/logos/php.png';
import SeoImg from '../../assets/logos/seo.png';

import VSCodeImg from '../../assets/logos/vscode.png';
import VSImg from '../../assets/logos/vs.png';
import MiroImg from '../../assets/logos/miro.png';
import FigmaImg from '../../assets/logos/figma.png';

import TheCertificateOfTrueSandwichExcellenceWhichNeedsAReallyLongVariableNameBecauseIAmCommittedToThisJoke from '../../assets/photos/certificate-of-excellence.jpg';

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
              <SkillItem thumb={SandwichImg} displayImg={TheCertificateOfTrueSandwichExcellenceWhichNeedsAReallyLongVariableNameBecauseIAmCommittedToThisJoke}>
                <p>
                  Essentialy, I am the greatest sandwich creator in the history of mankind. When I was born, a thunder
                  struck the hospital and all the toasters in the building spit out outstanding sandwiches which blew the
                  minds of every person in the area. Upon my touch, loaves of bread split into perfect slices and
                  assemble themselves with whatever ingredients I have on my mind. Yeah, I completed a free sandwich
                  making course on Udemy.
                </p>
              </SkillItem>
              <SkillItem thumb={JSImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={ReactImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={AngularImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={TSImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={SassImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={WPImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={HTMLImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={GitImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={DotNetImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={CSImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={GoogleImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={GQLImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={VueImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={PhpImg}>
                <h3>PHP</h3>
                <p>
                  I know how to use loops and if statements. Yeah. I have some experience with PHP from when I was working with Wordpress. Which is the past 3+ years,
                  so always something. I can get lost a bit in more complicated code, but with enough googling and connecting the dots I can modify some simple things
                  within a more proffesional code. All in all, I know enough PHP to do most of the I'm-a-frontend-developer-but-my-backend-developer-is-not-here-today-so-I-guess-I-have-to-do-this tasks.
                </p>
              </SkillItem>
              <SkillItem thumb={SeoImg}>
                <h3>SEO</h3>
                <p>
                  Does SEO have any kind of official (and free to use) logo? Probably not. That's why I just wrote SEO in Figma and exported it as png.
                  Anyways, I have learned a lot of good practices to make the websites well optimized for the search engines as well as prepare them to load pretty fast.
                  That's why I've implemented lazy loading for the images on this website and I also did not use more than one H1 tag because that is heresy.
                  I also know how to use schema.org, meta tags and all that good stuff. Haven't used it in an Angular / React / Vue environment yet, but I believe that
                  would not really be too difficult. After all, Google exists.
                </p>
              </SkillItem>
            </SkillsSection>

            <SkillsTitleCon>
              <SectionTitle>Tools I use a lot</SectionTitle>
              <SkillsTitleInfo>(Actually, probably for no reason, I have provided some details on these tools as well)</SkillsTitleInfo>
            </SkillsTitleCon>

            <SkillsSection>
              <SkillItem thumb={VSCodeImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={VSImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={MiroImg}>
                Hello
              </SkillItem>
              <SkillItem thumb={FigmaImg}>
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