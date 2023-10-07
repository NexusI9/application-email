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


export default ({ agencyName = '', job = 'Multimedia Designer', team = 'Hiring Team', coverletter = '' }) => (
    <Section style={{ ...style.section, paddingBottom: "100px" }}>
        <Img
            src={`${BASE_URL}/dear.png`}
            width="173"
        />
        <Heading as="h2" style={{ paddingLeft: "100px", fontSize: size.subtext, color: color.purple, margin: "0" }}>
            {agencyName} {team},
        </Heading>

        <Text style={{ fontSize: size.p, marginBottom: "0" }}>
            {coverletter}
        </Text>
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

    </Section>
);