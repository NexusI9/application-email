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

  

  export const Newsletter = ({agencyName='agencyName'}:NewsletterProps) => (
    <Html>
        <Head />
        <Body>


        </Body>
    </Html>
  );

  export default Newsletter;