import {
  Body,
  Container,
  Section,
  Head,
  Html,
  Link,
  Preview,
  Text
} from '@react-email/components';
import * as React from 'react';
import style from '../lib/style';
import { Header, Intro, Cover, Resume, Showreel, Quotes, Portfolio, Thank, Footer } from '../components';
import { render } from '@react-email/render';
import CONFIG from '../lib/config';

const agency = CONFIG.rhinoshield;

export const Newsletter = ({ agencyName = agency.name || '' }) => (
  <Html>
    <Head />
    <Section>
      <Preview>
        Hi! I am a Multimedia Designer and Developer looking to join an amazing team in Taiwan.
        </Preview>
    </Section>
    <Body style={style.main}>
      <Section style={{ width: "100%" }}>
        <Section style={{ textAlign: 'center', marginTop: "20px" }}>
          <Text style={{ ...style.link, textDecoration: 'none' }}>This email doesn’t display correctly? <Link href={`https://elkhantour.com/view/${agency.hash}/`} style={style.link}>Click here</Link></Text>
        </Section>
        <Header />
        <Container style={style.container}>
          <Intro />
          <Cover agencyName={agencyName} job={agency.job} team={agency.team} coverletter={agency.coverletter} />
          <Resume />
          <Showreel />
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