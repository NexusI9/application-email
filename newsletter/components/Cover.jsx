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


export default ({ agencyName = '' }) => (
    <Section style={{...style.section, paddingBottom:"100px"}}>
        <Img
            src={`${BASE_URL}/dear.png`}
            width="173"
        />
        <Heading as="h2" style={{ paddingLeft: "100px", fontSize: size.subtext, color: color.purple, margin: "0" }}>
            {agencyName} hiring team,
        </Heading>

        <Text style={{ fontSize: size.p, marginBottom: "0" }}>
            I am Nassim, a French creative with 6 years of experience in Web and Motion Design, but also skills in Web Development, 3D Design, and illustration.
            A wealth of skills I used on various projects such as marketing collaterals, web apps, and audiovisual interactive setups.
            <br /><br />
            During my last 2 years as a Lead Designer at a Canadian Digital Marketing agency, I mastered Motion, Web, and Print productions while also handling Project Management tasks.
            <br />I am currently in Taiwan, and seeking to join an amazing
        </Text>
        <Section>
            <Text style={{ textAlign: 'left', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0", float:"left" }}>team in Taipei!</Text>
            <Img
                src={`${BASE_URL}/taiwan-flag.png`}
                width="18"
                alt="Taiwan emoji flag"
                style={{ float: "left", marginLeft: '10px', marginTop:"6px" }}
            />
            <Img
                src={`${BASE_URL}/sun.png`}
                width="18"
                alt="sun emoji"
                style={{ float: "left", margin: "6px auto auto 5px" }}
            />
        </Section>
        <Text style={{ fontSize: size.p }}>
            I would be very interested in a position as a Visual Designer at {agencyName}, where I wish to bring my extensive skill set and passion for innovative design in order to contribute to your team's success.
        </Text>

    </Section>
);