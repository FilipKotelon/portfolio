import React from 'react'
import { ScrollPercentage } from 'react-scroll-percentage'
import { Clickable, SectionTitle } from '../typography/typography.styles';

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
import { useScrollSection } from 'react-scroll-section';

const Skills = () => {
  const contactSection = useScrollSection('contact');

  return (
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
                  <p>
                    I spent quite some time to get good grasp of JavaScript. Does it still surprise me and do I sometimes
                    get stuck? Yeah, of course, everyone does. But I worked a lot to understand how it works behind the
                    scenes to build a strong foundation, which helps me understand more advanced concepts and lets me
                    transition quite well into working with different frameworks, like Angular and React, even though in
                    my most recent job I spent most of the time using only vanilla JavaScript. 
                  </p>
                </SkillItem>
                <SkillItem thumb={ReactImg}>
                  <p>
                    I started my journey with React in 2018. I worked with it regularly at the beginning, then it was a 
                    bit more sporadical because I didn't use it in my job and didn't really have that much time to practice
                    it outside of it. In the past year though I spent more time with it, and while I naturally need some
                    refreshing, I still feel pretty confident with it. This page, by the way, was created with React. The
                    other projects I made / am working on are in Angular though, as recently I found it to be more fitting
                    for me personally. I wouldn't mind using either of course.
                  </p>
                </SkillItem>
                <SkillItem thumb={AngularImg}>
                  <p>
                    Angular is sort of my go-to framework right now. Which feels weird, because I liked React quite a lot
                    in the beginning. But... I don't know, I just feel like the way it is integrated with TypeScript and RxJs
                    and how it encourages certain patterns fits my style a bit more than React. I started learning Angular 
                    just a few months ago, so you might say I am unexperienced (I mean it's true but hear me out alright) 
                    but through the projects I made / am working on for this portfolio I got quite confident with how I code
                    in Angular. I tried to find as many best practices as fast as possible and while I still need to work
                    on how I implement them, I have to say I don't feel lost when I get stuck at some point. Feel free to
                    check out my projects and <Clickable onClick={contactSection.onClick}>contact me</Clickable> to get 
                    some information and a presentation of the Sancteary project, because it is way more advanced than
                    Solution People.
                  </p>
                </SkillItem>
                <SkillItem thumb={TSImg}>
                  <p>
                    I like TypeScript. At the beginning I was like "Ughhhhh, types", but then I was like "Wow, types!".
                    I mean if that doesn't explain it then I don't know what will. On a serious note though, TypeScript
                    allows me to provide a more clean and reusable structure for my code than JavaScript itself. Okay, that's
                    not a big revelation either, this is the point of TypeScript after all. But yeah, I feel comfortable
                    with TypeScript and I enjoy using it over pure JS.
                  </p>
                </SkillItem>
                <SkillItem thumb={SassImg}>
                  <p>
                    Just to be clear, for me it's Scss over Sass. I like brackets. With that out of the way, I can say
                    that I spent quite some time on Scss. I worked with it professionaly for over 2 years now and I was
                    using it already 2 years before that. So yeah, I can make a square div look like a circle. And other
                    things. Just don't make up anything crazy, okay? Thank you.
                  </p>
                </SkillItem>
                <SkillItem thumb={WPImg}>
                  <p>
                    I've worked with Wordpress for over 2.5 years. It was mainly developing themes, pulling data from
                    backend, setting up some simple environments (or actually more advanced ones, for example I made
                    a page builder with ACF which allows you to define custom sections in code so they can be later used
                    by your non-programmer buddies or yourself to create sites), working with ACF and a bit of creating
                    plugins. I may have set up WooCommerce a few times as well. In general I was doing the simple things
                    plus some I'm-a-frontend-developer-but-my-backend-developer-is-not-here-today-so-I-guess-I-have-to-do-this 
                    tasks.
                  </p>
                </SkillItem>
                <SkillItem thumb={HTMLImg}>
                  <p>
                    I know how to use divs. And paragraphs. And anchors. And sections. And, uh, inputs. I can name a lot
                    of HTML elements if you want. Yeah, I know HTML.
                  </p>
                </SkillItem>
                <SkillItem thumb={GitImg}>
                  <p>
                    I've worked with Git for over 2 years now. I know how to do basic Git management and how to google
                    whatever I need for things to work when they don't.
                  </p>
                </SkillItem>
                <SkillItem thumb={DotNetImg}>
                  <p>
                    I've worked with ASP.NET Core mainly for my studies. I don't feel anywhere near as confident with it 
                    as I feel with Angular or React, but I've done enough projects with it to know how to do most of the
                    basic things and maybe even some advanced ones. But yeah, not totally a strength of mine.
                  </p>
                </SkillItem>
                <SkillItem thumb={CSImg}>
                  <p>
                    Ah yes, the language which introduced me to many errors I was not aware of as a foolish JavaScript 
                    programmer. It made me lose my mind many times. But then I sort of began to like it. Not on the same
                    level as JavaScript but I appreciate that it introduced me to true OOP and it was a nice foundation
                    to get into TypeScript. Here's also the thing for me with every programming language or technology 
                    other than JavaScript: as long as it's logical, I will find my way around it. And guess what, almost
                    all of the programming languages are logical! It's just that it sometimes takes a little more time to
                    get used to that logic if you've never seen it before. That's what it was for me in the beginning with
                    C#, but now I feel pretty good with it. Also worth mentioning that I worked with it primarily for my 
                    studies.
                  </p>
                </SkillItem>
                <SkillItem thumb={GoogleImg}>
                  <p>
                    I am an expert Googler. I know how to google things and what phrases to use and all that good stuff.
                    Mainly, because I never really worked with anybody, who had more experience in front-end technologies
                    than me, so I had to ask the Internet. And the Internet always answers. You just have to know how to 
                    ask. Yeah, that's probably a quote on some motivational blog somewhere.
                  </p>
                </SkillItem>
                <SkillItem thumb={GQLImg}>
                  <p>
                    I used a bit of GraphQL when I was learning the Gatsby framework so I know how to get data from backend
                    but I am not too familiar with it.
                  </p>
                </SkillItem>
                <SkillItem thumb={VueImg}>
                  <p>
                    I learned a bit of Vue. Like a bit. It was mainly while learning Vue Storefront for one of my jobs but
                    it didn't pan out because of lack of time and in the end I didn't spend enough time on it to be on
                    the same level as Angular or React. Still, if you gave me a not too complicated thing in Vue to do, 
                    it would take a few initial googles and then I would be decently good to go on my own.
                  </p>
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
                  <p>
                    My daily code editor. Sometimes, when I remember, I create snippets for myself.
                  </p>
                </SkillItem>
                <SkillItem thumb={VSImg}>
                  <p>
                    First I hated it because of all the errors in my C# code, then I realized that writing good
                    code is a nice solution to all my problems. Visual Studio feels a bit like a huge behemoth
                    to me that I don't quite have a grasp of yet. It's a powerful tool that I haven't used enough,
                    even though I used it a decent amount for my studies.
                  </p>
                </SkillItem>
                <SkillItem thumb={MiroImg}>
                  <p>
                    Miro is a nice tool to let me vent my thoughts, spew out a bunch of ideas in a brainstorm and
                    then create a structure out of that.
                  </p>
                </SkillItem>
                <SkillItem thumb={FigmaImg}>
                  <p>
                    First I used it only as a programmer to get spoon-fed element sizes, font sizes, colors etc. from
                    the graphic designer I worked with, but more recently I started using it to design some projects 
                    myself. All of the projects I made for this portfolio, including this website, were designed with
                    Figma. Some of them were even designed properly. 
                  </p>
                </SkillItem>
              </SkillsSection>
  
            </SkillsContainer>
          )
        }
      }
    </ScrollPercentage>
  )
}

export default Skills