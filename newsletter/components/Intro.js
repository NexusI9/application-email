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
    <Section style={{paddingBottom:"50px"}}>
        <Img
            src={`${BASE_URL}/slice-banner.jpg`}
            width="600"
            alt="banner illustration with work showcase"
        />

        <Heading as='h1' style={{ color: color.dark_grey, fontSize: size.p, fontWeight: 'bold', textAlign: 'center' }}>
            Web & Motion Designer :: Art Director :: Web Developer
        </Heading>
    </Section>
</>);