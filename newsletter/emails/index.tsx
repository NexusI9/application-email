import {
  Body,
  Container,
  Section,
  Head,
  Html,
  Link,
  Preview
} from '@react-email/components';
import * as React from 'react';
import style from '../lib/style';
import { Header, Intro, Cover, Resume, Showreel, Skills, Quotes, Portfolio, Thank, Footer } from '../components';
import { render } from '@react-email/render';

interface NewsletterProps {
  agencyName?: string;
}

export const Newsletter = ({ agencyName = 'agencyName' }: NewsletterProps) => (
  <Html>
    <Head />
    <Preview>Hello! I am a Web and Motion Designer with proficiencies in Front-End Development freshly arrived in Taipei, and ready to unleash my creative power in town!</Preview>
    <Body style={style.main}>
      <Section style={{ width: "100%" }}>
        <Section style={{ textAlign: 'center', marginTop: "20px" }}>
          <Link href={`https://elkhantour.com/view/?n=${btoa(agencyName)}`} style={style.link}>This email doesn’t display correctly? Click here</Link>
        </Section>
        <Header />
        <Container style={style.container}>
          <Intro />
          <Cover agencyName={agencyName} />
          <Resume />
          <Showreel />
          <Skills />
          <Quotes />
          <Portfolio />
          <Thank />
          <Footer />
        </Container>

      </Section>

    </Body>
  </Html >
);

const html = render(<Newsletter />, {
  pretty: true,
});

console.log(html);

export default Newsletter;