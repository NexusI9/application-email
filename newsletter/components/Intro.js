import {
    Section,
    Column,
    Heading,
    Img,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { BASE_URL } from '../lib/utilities';
import style, { color, size } from '../lib/style';


export default () => (<>
    <Section>
        <Img
            src={`${BASE_URL}/slice-banner.jpg`}
            width="600"
            alt="banner illustration with work showcase"
        />

        <Heading as='h1' style={{ color: color.purple, fontSize: size.subtext, fontWeight: 'bolder', textAlign: 'center' }}>
            Web & Motion Designer :: Art Director :: Web Developer
        </Heading>
        <Text style={style.introText}>
            I am a French Creative with an expertise in Web and Motion Design, but also proficiencies in web development, 3D design,
            and illustration. An extended skill set I put at work in various projects for the past 6 years such as marketing collaterals, web apps, as well as audiovisual interactive setups.
        </Text>
    </Section>
    <Section>
        <Column>
            <Text style={{ textAlign: 'right', fontSize: size.p, lineHeight: '1.5', padding: '0px', margin: "0"}}>I am now looking to join an amazing team in Taipei!</Text>
        </Column>
        <Column>
            <Img
                src={`${BASE_URL}/taiwan-flag.png`}
                width="18"
                alt="Taiwan emoji flag"
                style={{ float: "left", marginLeft:'10px' }}
            />
            <Img
                src={`${BASE_URL}/sun.png`}
                width="18"
                alt="sun emoji"
                style={{ float: "left", marginRight: "50px" }}
            />
        </Column>
    </Section>
</>);