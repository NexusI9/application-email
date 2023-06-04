import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
  } from '@react-email/components';
  import * as React from 'react';

  interface NewsletterProps {
    agencyName?: string;
  }

  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

  const color = {
    purple:'#5D47FF',
    marine:'#182449',
    void:'#070812',
    dark_grey:'#444D66',
    blue_white:'#F5F7F9',
    white:'#ffffff'
  }
  
  const main= {
    backgroundColor: color.blue_white,
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  };

  export const Newsletter = ({agencyName='agencyName'}:NewsletterProps) => (
    <Html>
        <Head />
        <Body>


        </Body>
    </Html>
  );

  export default Newsletter;