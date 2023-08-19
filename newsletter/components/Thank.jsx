import {
    Column,
    Section,
    Heading,
    Img,
    Link,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { BASE_URL, EMAIL, TEL, LINE } from '../lib/utilities';
import style, { color, size } from '../lib/style';


const contact = [
    {
        name: 'mail',
        href: `mailto:${EMAIL}`,
        icon: 'icon-mail',
        label: 'nassim.elkhantour@gmail.com'
    },
    {
        name: 'phone',
        href: `tel:${TEL}`,
        icon: 'icon-phone',
        label: '(+33) 6 35 17 69 16'
    },
    {
        name: 'line',
        href: LINE,
        icon: 'icon-line',
        label: 'nasselkh'
    }
];


export default () => (
    <>
        <Section style={{ textAlign: 'center', padding: '60px 30px 0px' }}>
            <Heading as="h2" style={{...style.heading, marginBottom:"20px"}}>
                Thank you so much for <br />your consideration
            </Heading>
            <Heading as="h3" style={{ ...style.subtitle, marginBottom: '2px' }}>
                I am open to work and ready for<br /> a new adventure!
            </Heading>
            <Text style={{ fontSize: size.p, marginTop: '20px', marginBottom: '0' }}>If you’re interested in my profile, feel free to reach out</Text>
        </Section>
        <Section>
            <Column><Text style={{ margin: '0', fontSize: size.p, textAlign: 'right', marginLeft: 'auto' }}>to me using one of the contact below.</Text></Column>
            <Column><Img style={{ marginRight: '74px', marginLeft: '5px' }} src={`${BASE_URL}/handshake.png`} width="18" alt="handshake emoji" /></Column>
        </Section>
        <Section style={{...style.section, marginTop:"20px", marginBottom:"20px"}}>
            {
                contact.map(({ name, href, icon, label }) =>
                    <Link key={icon+name+'contact'} href={href}>
                        <Section style={{
                            marginBottom: "20px",
                            padding: "9px 17px",
                            borderWidth: "1px",
                            borderColor: color.purple,
                            borderStyle: "solid",
                            borderRadius: "3px",
                            backgroundColor: color.purple
                        }}>
                            <Column style={{ width: '35px' }}><Img src={`${BASE_URL}/${icon}.png`} width="35" alt={`${name} icon`} /></Column>
                            <Column style={{ width: '3px' }}><Img src={`${BASE_URL}/vertical-line.jpg`} width="2" height="45" alt={`${name} icon`} style={{ margin: "0 15px" }} /></Column>
                            <Column><Text style={{ margin:0, fontSize: size.subtext, textDecoration: 'none', letterSpacing: "1px", color: color.purple_white, fontWeight: 'bold' }}  >{label}</Text></Column>
                        </Section>
                    </Link>
                )
            }
        </Section>
        <Img src={`${BASE_URL}/wrap.png`} width="350" style={{ float: 'right', paddingRight: "50px", paddingBottom: "80px" }} />
    </>
);