import {
  Column,
  Section,
  Img,
  Link,
  Text
} from '@react-email/components';
import * as React from 'react';
import { BASE_URL, PORTFOLIO_URL, BEHANCE, LINKEDIN } from '../lib/utilities';
import style, { color } from '../lib/style';


const socials = [
  {
    name: 'website',
    url: PORTFOLIO_URL,
    icon: 'icon-website',
    width: "16",
    height: "16"
  },
  {
    name: 'linkedIn',
    url: LINKEDIN,
    icon: 'icon-linkedin',
    width: "15",
    height: "15"
  },
  {
    name: 'behance',
    url: BEHANCE,
    icon: 'icon-behance',
    width: "20",
    height: "13"
  }
];

export default () => (
  <Section style={style.topBanner}>
    <Column>

        <Section>
          <Column width="40"><Img
            src={`${BASE_URL}/logo-purple.png`}
            width="28"
            height="28"
            alt="logo elkhantour"
          /></Column>
          <Column> <Text style={{color:color.purple, fontWeight:"bold"}}>Nassim El Khantour</Text></Column>
        </Section> 
    </Column>
    <Column>

      {socials.map(({ url, name, icon, width, height }) =>
        <Column key={name + icon + 'socialIcon'} style={{ width: "18px" }}>
          <Link href={url}>
            <Img
              src={`${BASE_URL}/${icon}.png`}
              width={width}
              height={height}
              style={{ marginLeft: "10px", padding: "5px" }}
              alt={`${name} icon`}
            />
          </Link>
        </Column>
      )}

    </Column>
  </Section>

)