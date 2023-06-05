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
  import style, {color, size} from '../lib/style';


  const contact = [
    {
        name:'mail',
        href:`mailto:${EMAIL}`,
        icon:'icon-mail',
        label:'nassim.elkhantour@gmail.com'
    },
    {
        name:'phone',
        href:`tel:${TEL}`,
        icon:'icon-phone',
        label:'(+33) 6 35 17 69 16'
    },
    {
        name:'line',
        href:LINE,
        icon:'icon-line',
        label:'nasselkh'
    }
  ];


export default () => (
    <>
        <Section style={{textAlign:'center', padding: '90px 30px 0px'}}>
            <Heading as="h2" style={style.heading}>
            Thank you so much for <br/>your consideration 
            </Heading>
            <Heading as="h3" style={{...style.subtitle, marginBottom:'3px'}}>
            I am open to work and ready for a new adventure! 
            </Heading>
            <Text style={{fontSize:size.p, marginTop:'3px', marginBottom:'0'}}>So if you’re interested in my profile, feel free to reach out to me</Text>
        </Section>
        <Section>
            <Column><Text style={{margin:'0', fontSize:size.p, textAlign: 'right', width: '310px', marginLeft: 'auto'}}>using one of the contact below.</Text></Column>
            <Column><Img style={{marginRight: '134px', marginLeft:'5px'}}src={`${BASE_URL}/handshake.png`} width="18" alt="handshake emoji"/></Column>
        </Section>
        <Img style={{margin:'10px auto 30px'}} src={`${BASE_URL}/line.jpg`} width="46"/>

        {
            contact.map( ({name, href, icon, label}) => 
            <Section style={{marginBottom:"10px", paddingLeft:"30px"}}>
                <Column style={{width:'18px'}}><Img src={`${BASE_URL}/${icon}.png`} width="18" alt={`${name} icon`}/></Column>
                <Column><Link style={{paddingLeft:'10px', fontSize:size.subtext, textDecoration:'none', color:color.purple, fontWeight:'bold'}} href={href}>{label}</Link></Column>
            </Section>
            )
        }
        <Img src={`${BASE_URL}/wrap.png`} width="302" style={{float:'right', paddingRight:"50px", paddingBottom:"80px"}}/>
    </>
);