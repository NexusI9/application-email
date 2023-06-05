import {
    Column,
    Section,
    Heading,
    Img,
    Link,
} from '@react-email/components';
import * as React from 'react';
import { BASE_URL } from '../lib/utilities';
import ResumeLink from './Resume.Link';
import style, { color, size } from '../lib/style';


export default () => (
    <>
        <Section style={{ backgroundColor: color.marine, paddingBottom: '30px' }}>
            <Heading as="h2" style={{ color: color.blue_white, fontSize: size.big, textAlign: 'center', marginBottom: "0" }}>
                Eager to know<br />the full story?
            </Heading>
            <Heading as="h3" style={{ color: color.blue_white, fontSize: size.subtext, textAlign: 'center', marginTop: '5px' }}>
                See my entire resume below
            </Heading>
        </Section>
        <Section style={{ backgroundColor: color.marine, width:"600px" }}>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-left-a.png`} width="30" height="350" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-left-b.png`} width="173" alt='blue background element' />
                <Link href='https://elkhantour.com/assets/pdf/%E7%B0%A1%E6%AD%B7-Nassim_El_Khantour.pdf'>
                    <Img src={`${BASE_URL}/resume/slice-left-d.png`} width="173" alt='white background element' />
                    <ResumeLink
                        heading='中文版本'
                        link='檢查簡歷'
                        href='https://elkhantour.com/assets/pdf/%E7%B0%A1%E6%AD%B7-Nassim_El_Khantour.pdf'
                        width='115px'
                        padding='10px'
                    />
                    <Img src={`${BASE_URL}/resume/slice-left-e.png`} width="173" alt='white background element' />
                </Link>
                <Img src={`${BASE_URL}/resume/slice-left-c.png`} width="173" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-mid-a.png`} width="11" height="350" alt='blue background element' />
            </Column>
            <Column>
                <Link href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf'>
                    <Img src={`${BASE_URL}/resume/slice-mid-d.png`} width="173" alt='white background element' />
                    <ResumeLink
                        heading='English Version'
                        link='See the resume'
                        href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf'
                        width='142px'
                        padding='16px'
                    />
                    <Img src={`${BASE_URL}/resume/slice-mid-e.png`} width="173" alt='white background element' />
                </Link>
                <Img src={`${BASE_URL}/resume/slice-mid-b.png`} width="173" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-mid-c.png`} width="11" height="350" alt='blue background element' />
            </Column>
            <Column>

                <Img src={`${BASE_URL}/resume/slice-right-b.png`} width="173" alt='blue background element' />
                <Link href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf'>
                    <Img src={`${BASE_URL}/resume/slice-right-d.png`} width="173" alt='white background element' />
                    <ResumeLink
                        heading='Version Française'
                        link='Voir le CV'
                        href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf'
                        width='120px'
                        padding='15px'
                    />
                    <Img src={`${BASE_URL}/resume/slice-right-e.png`} width="173" alt='white background element' />
                </Link>
                <Img src={`${BASE_URL}/resume/slice-right-c.png`} width="173" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-right-a.png`} width="30" height="350" alt='blue background element' />
            </Column>
        </Section>

    </>
);