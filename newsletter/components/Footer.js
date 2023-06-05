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
    <>
        <Section style={{backgroundColor:color.white, padding:" 50px 30px 10px", textAlign:"center"}}>
            <Img src={`${BASE_URL}/logo-big.png`} style={{margin:'auto'}} width="68"/>
            <Heading as="h2" style={{fontSize:size.subtext, color:color.purple}}>Nassim El Khantour</Heading>
            <Text style={{color:color.dark_grey, fontSize:size.p}}>臺北市，台灣</Text>
        </Section>
        <Section style={{backgroundColor:color.white, padding:" 0px 215px"}}>
            {
                socials.map(({name, url, icon, width, height}) => 
                <Column width={`${width}px`}>
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
        <Text style={{margin:0, backgroundColor:color.white, textAlign:'center', padding: '30px 0px', fontSize:size.small, color:color.dark_grey}}>Sent with passion and strong motivation</Text>
    </>
);