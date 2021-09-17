import React from 'react'
import { ShadowCard } from '../shadow-block/shadow-block.styles'
import { SectionTitle } from '../typography/typography.styles'

import { ContactContainer, ContactDesc } from './contact.styles'

const Contact = () => (
  <ContactContainer>
    <ShadowCard bigPadding={true}>
      <SectionTitle>
        Contact me
      </SectionTitle>
    </ShadowCard>
    <ShadowCard>
      <ContactDesc>
        Do you like what you see in here? Great!<br />
        If you would like to work together, you can send me an email or contact me on LinkedIn.<br />
        I’d love to hear from you!
      </ContactDesc>
    </ShadowCard>
    <ShadowCard>
      <a href="mailto:off.f.kotelon@gmail.com">off.f.kotelon@gmail.com</a>
    </ShadowCard>
    <ShadowCard>
      <a >Linkedin</a>
    </ShadowCard>
  </ContactContainer>
)


export default Contact