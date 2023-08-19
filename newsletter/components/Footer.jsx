import {
    Section,
    Column,
    Heading,
    Img,
    Text,
    Link,
} from '@react-email/components';
import * as React from 'react';
import { BASE_URL, PORTFOLIO_URL, BEHANCE, LINKEDIN } from '../lib/utilities';
import style, { color, size } from '../lib/style';

const socials = [
    {
      name:'website',
      url:PORTFOLIO_URL,
      icon: 'icon-website-big',
      width:"27",
      height:"27"
    },
    {
      name:'linkedIn',
      url:LINKEDIN,
      icon: 'icon-linkedin-big',
      width:"22",
      height:"22"
    },
    {
      name:'behance',
      url:BEHANCE,
      icon: 'icon-behance-big',
      width:"30",
      height:"19"
    }
  ];



export default () => (
    <Section style={{backgroundColor:color.marine}}>
        <Section style={{backgroundColor:color.marine, padding:" 50px 30px 10px", textAlign:"center"}}>
            <Img src={`${BASE_URL}/logo-big.png`} style={{margin:'auto'}} width="68"/>
            <Heading as="h2" style={{fontSize:size.subtext, color:color.purple_mid, marginBottom:"0"}}>Nassim El Khantour</Heading>
            <Text style={{color:color.purple_mid, fontSize:size.p, marginTop:"5px"}}>臺北市，台灣</Text>
        </Section>
        <Section style={{backgroundColor:color.marine, padding:" 0px 215px"}}>
            {
                socials.map(({name, url, icon, width, height}) => 
                <Column width={`${width}px`} key={name+width+'social'+icon}>
                    <Link href={url}>
                        <Img 
                            src={`${BASE_URL}/${icon}.png`}
                            width={width}
                            height={height}
                            alt={`${name} icon`}
                            style={{margin:'0 15px'}}
                        />
                    </Link>
                </Column>
                )
            }
        </Section>
        <Text style={{margin:0, backgroundColor:color.marine, textAlign:'center', padding: '30px 0px', fontSize:size.small, color:color.purple_mid}}>Sent with passion and strong motivation</Text>
    </Section>
);