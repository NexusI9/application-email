import { Section, Heading, Link, Img, Column } from "@react-email/components";
import * as React from 'react';
import { BASE_URL, PORTFOLIO_URL } from '../lib/utilities';
import style, { color, size } from '../lib/style';

export default ({lang='english'}) => (
    <Section style={{paddingLeft:"30px", marginTop:'60px', marginBottom:'40px'}}>
        <Column>
            <Heading as="h2" style={style.heading}>{
            lang === 'french' ?
            <>Parcourez l'intégralité</>
            :
            <>See the <br/>full picture</>
            }
            </Heading>
            <Heading as="h3" style={{...style.p, marginTop:"3px"}}>
                {
                    lang === 'french' ?
                    <>Explorez mes travaux Web, Motion, Product Design et bien plus.</>
                    :
                    <>Explore my Motion, Web, <br/> Product Design work, and more.</>
                }
                </Heading>
            <br/>
            <br/>
            <Link href={`${PORTFOLIO_URL}?ref=email`} style={{...style.button}}>
                {
                    lang === 'french' ?
                    <>visiter le portfolio</>
                    :
                    <>visit the portfolio</>
                }
                </Link>
        </Column>
        <Column>
            <Img src={`${BASE_URL}/slice-screen.jpg`} width="305"/>
        </Column>

    </Section>
);