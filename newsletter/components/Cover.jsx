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


export default ({ agencyName = '', headline = 'Hiring Team', coverletter = '', lang = 'english' }) => (
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
                    J'ai la certitude que mon profil serait profitable pour {agencyName}, et je suis très motivé à l'idée
                    de m'expatrier pour contribuer au succès de l'équipe avec à mes vastes compétences et idées,
                    mais aussi pour apprendre des autres membres, ainsi que de vivre l'incroyable et riche
                </Text>
                <Section>
                    <Text style={{ textAlign: 'left', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0", float: "left" }}>culture Taïwanaise !</Text>
                    <Img
                        src={`${BASE_URL}/taiwan-flag.png`}
                        width="18"
                        alt="Taiwan emoji flag"
                        style={{ float: "left", marginLeft: '5px', marginTop: "6px" }}
                    />
                </Section>
                <Text style={{ fontSize: size.p, marginBottom: "0" }}>
                    Pour votre convenance, vous trouverez à travers ce mail les liens vers mon CV, portfolio et plus.
                    <br/>Je reste à votre disposition pour toute autre information complémentaire et vous remercie beaucoup
                    pour votre temps.
                </Text>

            </>
            :
            ///////////////////ENGLISH
            <>
                <Text style={{ fontSize: size.p, marginBottom: '0' }}>
                    <br />
                    I strongly believe my profile would be a valuable asset for {agencyName}, and am very motivated to move
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