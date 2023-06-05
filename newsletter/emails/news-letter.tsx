import {
    Body,
    Container,
    Column,
    Section,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Hr,
    Preview,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  import { BASE_URL } from '../lib/utilities';
  import style, {color, size} from '../lib/style';
  import { Header, Intro, Cover, Resume, Showreel, Skills, Portfolio, Thank, Footer } from '../components';

  interface NewsletterProps {
    agencyName?: string;
  }

  /*const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/static/newsletter`
  : 'https://elkhantour.com/assets/newsletter';*/




  export const Newsletter = ({agencyName='agencyName'}:NewsletterProps) => (
    <Html>
        <Head />
        <Body style={style.main}>
            <Container style={style.container}>
                <Section style={{textAlign:'center'}}>
                  <Link href='https://elkhantour.com/' style={style.link}>This email doesn’t display correctly? Click here</Link>
                </Section>

                <Header />
                <Intro />
                <Cover agencyName={agencyName}/>
                <Resume />
                <Showreel />
                <Skills />
                <Portfolio />
                <Thank />
                <Footer />
              
            </Container>
        </Body>
    </Html>
  );

  export default Newsletter;