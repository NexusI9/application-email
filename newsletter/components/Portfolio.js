import { Section, Heading, Link, Img, Column } from "@react-email/components";
import * as React from 'react';
import { BASE_URL, PORTFOLIO_URL } from '../lib/utilities';
import style, { color, size } from '../lib/style';

export default () => (
    <Section style={{paddingLeft:"30px"}}>
        <Column>
            <Heading as="h2" style={style.heading}>See the <br/>full picture</Heading>
            <Heading as="h3" style={style.subtitle}>From Motion, Web, Product Design to Illustrations, and more!</Heading>
            <br/>
            <br/>
            <Link href={PORTFOLIO_URL} style={{...style.button}}>visit my website</Link>
        </Column>
        <Column>
            <Img src={`${BASE_URL}/slice-screen.jpg`} width="305"/>
        </Column>

    </Section>
);