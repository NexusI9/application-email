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
import { Header, Intro, Cover, Resume, Showreel, Quotes, Portfolio, Thank, Footer, TopBanner } from '../components';
import { render } from '@react-email/render';

export const Newsletter = ({ name, lang = 'english', hash, headline, coverletter }) => (
    <Html>
        <Head />
        <Body style={style.main}>
            {lang === 'french' ?
                <Preview>您好, je suis un Designer Multimédia et Développeur en recherche d'opportunités à Taïwan.</Preview> :
                <Preview>您好, I am a Multimedia Designer and Developer looking to join an amazing team in Taiwan.</Preview>
            }
            <Section width="600" style={{ width: "100%" }}>
                <TopBanner hash={hash} lang={lang} />
                <Header />
                <Container style={style.container}>
                    <Intro lang={lang} />
                    <Cover agencyName={name} headline={headline} coverletter={coverletter} lang={lang} />
                    <Resume lang={lang} />
                    <Showreel lang={lang} />
                    <Portfolio lang={lang} />
                    <Quotes lang={lang} />
                    <Thank lang={lang} />
                    <Footer lang={lang} />
                </Container>

            </Section>

        </Body>
    </Html >
);

const html = render(<Newsletter />, {
    pretty: true,
});

export default Newsletter;