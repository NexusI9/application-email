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
        label: 'nassim@elkhantour.com'
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


export default ({ lang = 'english' }) => (
    <>

        {lang === 'french' ?
            ////////////FRENCH
            <>
                <Section style={{ textAlign: 'left', padding: '0px 30px 0px' }}>
                    <Heading as="h2" style={{ ...style.heading, marginBottom: "20px" }}>
                        Merci beaucoup pour votre considération
                    </Heading>
                    <Heading as="h3" style={{ ...style.subtitle, marginBottom: '2px' }}>
                        Je suis disponible et prêt pour une nouvelle aventure professionnelle.
                    </Heading>
                    <Text style={{ fontSize: size.p, marginTop: '20px', marginBottom: '0' }}>Intéressé.e par mon profil ? Contactez-moi en utilisant</Text>
                </Section>
                <Section style={{ textAlign: 'left', paddingLeft: '30px' }}>
                    <Column><Text style={{ margin: '0', fontSize: size.p, textAlign: 'left' }}>les coordonnées ci-dessous.</Text></Column>
                    <Column><Img style={{ marginRight: '285px', marginLeft: '5px' }} src={`${BASE_URL}/handshake.png`} width="18" alt="handshake emoji" /></Column>
                </Section>
            </>
            :
            ////////////ENGLISH
            <>
                <Section style={{ textAlign: 'left', padding: '60px 30px 0px' }}>
                    <Heading as="h2" style={{ ...style.heading, marginBottom: "20px" }}>
                        Thank you so much for <br />your consideration
                    </Heading>
                    <Heading as="h3" style={{ ...style.subtitle, marginBottom: '2px' }}>
                        I am available for work and ready for<br /> a new adventure.
                    </Heading>
                    <Text style={{ fontSize: size.p, marginTop: '20px', marginBottom: '0' }}>Interested in my profile? Please reach out to me using one</Text>
                </Section>
                <Section style={{ textAlign: 'left', paddingLeft: '30px' }}>
                    <Column><Text style={{ margin: '0', fontSize: size.p, textAlign: 'left' }}> of the contact below.</Text></Column>
                    <Column><Img style={{ marginRight: '355px', marginLeft: '5px' }} src={`${BASE_URL}/handshake.png`} width="18" alt="handshake emoji" /></Column>
                </Section>
            </>
        }



        <Section style={{ ...style.section, marginTop: "20px", marginBottom: "20px" }}>
            {
                contact.map(({ name, href, icon, label }) =>
                    <Link key={icon + name + 'contact'} href={href}>
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
                            <Column><Text style={{ margin: 0, fontSize: size.subtext, textDecoration: 'none', letterSpacing: "1px", color: color.white, fontWeight: 'bold' }}  >{label}</Text></Column>
                        </Section>
                    </Link>
                )
            }
        </Section>
        <Img src={`${BASE_URL}/wrap${lang === 'french' ? '-fr' : ''}.png`} width="350" style={{ float: 'right', paddingRight: "50px", paddingBottom: "80px" }} alt="signature good bye"/>
    </>
);