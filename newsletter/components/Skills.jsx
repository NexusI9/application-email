import {
    Img, Section
  } from '@react-email/components';
  import * as React from 'react';
  import { BASE_URL } from '../lib/utilities';
  import { MAX_WIDTH } from '../lib/style';

export default () => (
    <Section style={{padding: '100px 0 80px'}}>
        <Img src={`${BASE_URL}/slide-ido.jpg`} width={MAX_WIDTH}/>
    </Section>
);