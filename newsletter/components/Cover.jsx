import {
    Section,
    Heading,
    Text,
    Img,
    Column
} from '@react-email/components';
import * as React from 'react';
import style, { size, color } from '../lib/style';
import { BASE_URL } from '../lib/utilities';


export default ({ agencyName = '', job = 'Multimedia Designer', headline = 'Hiring Team', coverletter = '', lang = 'english' }) => (
    <Section style={{ ...style.section, paddingBottom: "100px" }}>
        <Img
            src={`${BASE_URL}/${lang === 'french' ? 'chere' : 'dear'}.png`}
            width="173"
        />
        <Heading as="h2" style={{ paddingLeft: "100px", fontSize: size.subtext, color: color.purple, margin: "0" }}>
            {headline},
        </Heading>

        <Text style={{ fontSize: size.p, marginBottom: "0" }}>
            {coverletter}
        </Text>
        {lang === 'french' ?
            ///////////////////FRENCH
            <>
                <Text style={{ fontSize: size.p, marginBottom: '0' }}>
                    <br />
                    Ainsi, je suis très intéressé pour un poste de {job} chez {agencyName}.
                    <br />
                    J'ai la certitude que mon profile serait un bon fit pour ce poste, et je suis très motivé à l'idée
                    de m'expatirer pour contrinuer au succès de l'équipe grâce à mon vaste panel de compétence et idées,
                    mais aussi pour apprendre des autres membres
                </Text>
                <Section>
                    <Text style={{ textAlign: 'left', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0", float: "left" }}> ainsi que de profiter de la magnifique culture Taiwanaise!</Text>
                    <Img
                        src={`${BASE_URL}/taiwan-flag.png`}
                        width="18"
                        alt="Taiwan emoji flag"
                        style={{ float: "left", marginLeft: '5px', marginTop: "6px" }}
                    />
                </Section>
                <Text style={{ fontSize: size.p, marginBottom: "0" }}>
                    Pour votre convenance, vous trouverez au travers ce mail les liens vers mon CV, portfolio et plus.
                    Je reste à votre disposition pour toute autre information complémentaire et vous remercie beaucoup
                    pour votre temps.
                </Text>

            </>
            :
            ///////////////////ENGLISH
            <>
                <Text style={{ fontSize: size.p, marginBottom: '0' }}>
                    <br />
                    I would be very interested in a {job} position at {agencyName}.
                    <br />
                    I strongly believe my profile would be a good fit for this position, and am very motivated to move
                    abroad to contribute to the company team’s success with my broad skillsets and ideas, but also to learn
                    from other members,

                </Text>
                <Section>
                    <Text style={{ textAlign: 'left', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0", float: "left" }}>as well as experience the amazing Taiwanese culture!</Text>
                    <Img
                        src={`${BASE_URL}/taiwan-flag.png`}
                        width="18"
                        alt="Taiwan emoji flag"
                        style={{ float: "left", marginLeft: '5px', marginTop: "6px" }}
                    />
                </Section>
                <Text style={{ fontSize: size.p, marginBottom: "0" }}>
                    For your convenience, you’ll find throughout this email links to my resume, portfolio, and more.
                    <br />I remain available if you have any questions or need more information about my application.
                    <br /><br />Thank you very much for your time.</Text>
            </>}



    </Section>
);