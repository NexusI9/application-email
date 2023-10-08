import {
    Body,
    Container,
    Column,
    Section,
    Button,
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
import { BASE_URL, SHOWREEL_URL } from '../lib/utilities';
import style, { MAX_WIDTH } from '../lib/style';




export default ({ lang = 'english' }) => (
    <>
        <Section style={{ paddingTop: '70px' }}>
            <Heading as="h2" style={{ ...style.heading, paddingLeft: '30px' }}>
                {lang === 'french' ?
                    <>Des années de créativité, <br /> en moins de 2 minutes</>
                    :
                    <>Years of creativity, <br /> in less than 2 minutes</>
                }
            </Heading>
            <Heading as="h3" style={{ ...style.subtitle, paddingLeft: '30px' }}>
                {lang === 'french' ?
                    <>Visionnez mon dernier showreel pour un aperçu rapide de mes créations</>
                    :
                    <>Check out my latest showreel for a quick <br /> overview of my extensive digital content</>
                }

            </Heading>

            <Link href={SHOWREEL_URL}>
                <Img src={`${BASE_URL}/slice-showreel.jpg`} width={MAX_WIDTH} alt='thumbnail of a video' />
            </Link>
        </Section>
        <Section style={{ textAlign: 'center' }}>
            <Link href={SHOWREEL_URL} style={{ ...style.button, margin: 'auto' }}>
                {
                    lang === 'french' ?
                        <>voir le showreel</> :
                        <>watch the showreel</>
                }
            </Link>
        </Section>
    </>
);
