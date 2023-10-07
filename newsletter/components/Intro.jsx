import {
    Section,
    Column,
    Heading,
    Img,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { BASE_URL } from '../lib/utilities';
import style, { color, size, MAX_WIDTH } from '../lib/style';


export default ({lang='english'}) => (<>
    <Section style={{paddingBottom:"24px"}}>
        <Img
            src={`${BASE_URL}/slice-banner.jpg`}
            width={MAX_WIDTH}
            alt="banner illustration with work showcase"
        />

        <Heading as='h1' style={{ color: color.dark_grey, fontSize: lang === 'french' ? size.small : size.p, fontWeight: 'bold', textAlign: 'center' }}>
        {
            lang === 'french' ?
            <>Web et Motion Designer :: Directeur Artistique :: Développeur Web</>
            :
            <>Web & Motion Designer :: Art Director :: Web Developer</>
        }
        </Heading>
    </Section>
</>);