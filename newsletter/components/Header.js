import {
    Column,
    Section,
    Img,
    Link,
  } from '@react-email/components';
  import * as React from 'react';
  import { BASE_URL, PORTFOLIO_URL, BEHANCE, LINKEDIN } from '../lib/utilities';
  import style from '../lib/style';


  const socials = [
    {
      name:'website',
      url:PORTFOLIO_URL,
      icon: 'icon-website',
      width:"18",
      height:"18"
    },
    {
      name:'linkedIn',
      url:LINKEDIN,
      icon: 'icon-linkedin',
      width:"15",
      height:"15"
    },
    {
      name:'behance',
      url:BEHANCE,
      icon: 'icon-behance',
      width:"20",
      height:"12.5"
    }
  ];

  export default () => (
    <Section style={style.topBanner}>
    <Column>
      <Img
        src={`${BASE_URL}/logo.png`}
        width="30"
        height="30"
        alt="logo elkhantour"
      />
    </Column>
    <Column>

        {socials.map( ({url, name, icon, width, height}) =>
              <Column style={{width:"18px"}}>   
                  <Link href={url}>
                    <Img
                      src={`${BASE_URL}/${icon}.png`}
                      width={width}
                      height={height}
                      style={{marginLeft:"10px", padding:"5px"}}
                      alt={`${name} icon`}
                    />
                  </Link>
              </Column>  
        )}

    </Column>
</Section>

  )