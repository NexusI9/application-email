import {
    Img, Section
  } from '@react-email/components';
  import * as React from 'react';
  import { BASE_URL } from '../lib/utilities';

export default () => (
    <Section style={{padding: '130px 0'}}>
        <Img src={`${BASE_URL}/slide-ido.jpg`} width="600"/>
    </Section>
);