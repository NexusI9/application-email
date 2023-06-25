import {
  Body,
  Container,
  Column,
  Section,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Hr,
  Row,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';
import style, {color} from '../lib/style';
import { BASE_URL } from '../lib/utilities';

export default ({heading='', link='', href='', width='', padding=''}) => (
  <Section>
    <Heading as="h4" style={style.resume.heading}>{heading}</Heading>
    <Section style={{ backgroundColor: color.panel_bkg, paddingTop: padding }}>
      <Column style={{ width:width, textAlign: 'right', paddingRight: '5px' }}><Link style={style.resume.link} href={href}>{link}</Link></Column>
      <Column><Img width="14" height="14" src={`${BASE_URL}/hyperlink.png`} /></Column>
    </Section>
  </Section>
);