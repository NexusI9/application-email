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
            width="143"
            alt="dear script"
        />
        <Heading as="h2" style={{ paddingLeft: "90px", fontSize: size.subtext, color: color.purple, margin: "0" }}>
            {headline},
        </Heading>

        <Text style={{ fontSize: size.p, marginBottom: "0" }}>
            {coverletter}
        </Text>
        {lang === 'french' ?
            ///////////////////FRENCH
            <>
                <Text style={{ fontSize: size.p, marginBottom: '0' }}>
                    {/*J'ai la certitude que mon profil serait profitable pour {agencyName}, et*/} 
                    Enfin, je suis très motivé à l'idée de m'expatrier pour contribuer au succès de l'équipe avec à mes vastes compétences et idées,
                    mais aussi pour apprendre des autres membres, ainsi que de vivre l'incroyable et riche
                </Text>
                <Section>
                    <Text style={{ textAlign: 'left', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0", float: "left" }}>culture Taïwanaise.</Text>
                    <Img
                        src={`${BASE_URL}/taiwan-flag.png`}
                        width="18"
                        alt="Taiwan emoji flag"
                        style={{ float: "left", marginLeft: '5px', marginTop: "6px" }}
                    />
                </Section>
                <Text style={{ fontSize: size.p, marginBottom: "0" }}>
                    Pour votre convenance, vous trouverez à travers ce mail les liens vers mon CV, portfolio et plus.
                    Je reste à votre disposition pour toute autre information complémentaire et vous remercie beaucoup
                    pour votre temps.
                    <br /><br/>
                    Nassim
                </Text>

            </>
            :
            ///////////////////ENGLISH
            <>
                <Text style={{ fontSize: size.p, marginBottom: '0' }}>

                    I strongly believe my profile would be a profitable asset for {agencyName}, and am very motivated to move
                    abroad to contribute to the company team’s success with my broad skillset and ideas, but also to learn
                    from other members,

                </Text>
                <Section>
                    <Text style={{ textAlign: 'left', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0", float: "left" }}>as well as experience the amazing Taiwanese culture.</Text>
                    <Img
                        src={`${BASE_URL}/taiwan-flag.png`}
                        width="18"
                        alt="Taiwan emoji flag"
                        style={{ float: "left", marginLeft: '5px', marginTop: "6px" }}
                    />
                </Section>
                <Text style={{ fontSize: size.p, marginBottom: "0" }}>
                    For your convenience, you’ll find throughout this email links to my resume, portfolio, and more.
                    <br /><br />Thank you very much for your time, I am eager to hear from you.
                    <br /><br />Nassim
                </Text>
            </>}



    </Section>
);