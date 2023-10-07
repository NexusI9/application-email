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
import style, { color, size, MAX_WIDTH } from '../lib/style';


export default ({ lang }) => (
    <Section style={{ backgroundColor: color.marine }}>
        <Section style={{ backgroundColor: color.marine, paddingBottom: '30px' }}>
            <Heading as="h2" style={{ color: color.blue_white, fontSize: size.big, textAlign: 'center', marginBottom: "0", marginTop: "34px" }}>
                {lang === 'french' ? 
                    <>Curieux de connâitre toute l'histoire?</>
                    :
                    <>Eager to know<br />the full story?</>
                }
            </Heading>
            <Heading as="h3" style={{ color: color.blue_white, fontSize: size.subtext, textAlign: 'center', marginTop: '5px' }}>
            {lang === 'french' ? 
            <>Jetez un oeil à mes CV ci-dessous</>:
            <>See my entire resume below</>
            }

            </Heading>
        </Section>
        <Section style={{ backgroundColor: color.marine, width: MAX_WIDTH }}>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-left-a.jpg`} width="30" height="350" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-left-b.jpg`} width="173" alt='blue background element' />
                <Link href='https://elkhantour.com/assets/pdf/%E7%B0%A1%E6%AD%B7-Nassim_El_Khantour.pdf' style={{ backgroundColor: color.blue_white }}>
                    <Img src={`${BASE_URL}/resume/slice-left-d.jpg`} width="173" alt='white background element' />
                    <ResumeLink
                        heading='中文版本'
                        link='檢查簡歷'
                        href='https://elkhantour.com/assets/pdf/%E7%B0%A1%E6%AD%B7-Nassim_El_Khantour.pdf'
                        width='115px'
                        padding='4px'
                    />
                    <Img src={`${BASE_URL}/resume/slice-left-e.jpg`} width="173" alt='white background element' />
                </Link>
                <Img src={`${BASE_URL}/resume/slice-left-c.jpg`} width="173" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-mid-a.jpg`} width="11" height="350" alt='blue background element' />
            </Column>
            <Column>
                <Link href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf' style={{ backgroundColor: color.blue_white }}>
                    <Img src={`${BASE_URL}/resume/slice-mid-d.jpg`} width="173" alt='white background element' />
                    <ResumeLink
                        heading='English Version'
                        link='See the resume'
                        href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf'
                        width='142px'
                        padding='10px'
                    />
                    <Img src={`${BASE_URL}/resume/slice-mid-e.jpg`} width="173" alt='white background element' />
                </Link>
                <Img src={`${BASE_URL}/resume/slice-mid-b.jpg`} width="173" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-mid-c.jpg`} width="11" height="350" alt='blue background element' />
            </Column>
            <Column>

                <Img src={`${BASE_URL}/resume/slice-right-b.jpg`} width="173" alt='blue background element' />
                <Link href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf' style={{ backgroundColor: color.blue_white }}>
                    <Img src={`${BASE_URL}/resume/slice-right-d.jpg`} width="173" alt='white background element' />
                    <ResumeLink
                        heading='Version Française'
                        link='Voir le CV'
                        href='https://elkhantour.com/assets/pdf/Resume-Nassim_El_Khantour.pdf'
                        width='120px'
                        padding='10px'
                    />
                    <Img src={`${BASE_URL}/resume/slice-right-e.jpg`} width="173" alt='white background element' />
                </Link>
                <Img src={`${BASE_URL}/resume/slice-right-c.jpg`} width="173" alt='blue background element' />
            </Column>
            <Column>
                <Img src={`${BASE_URL}/resume/slice-right-a.jpg`} width="30" height="350" alt='blue background element' />
            </Column>
        </Section>

    </Section>
);