import { BASE_URL } from '../lib/utilities';
import { Section, Text, Img, Column } from "@react-email/components";
import style, { MAX_WIDTH, size } from '../lib/style';


export default ({ quote, name, job, location, pic, index }) => (
    <Section style={{marginBottom:"20px"}}>
        <Img src={`${BASE_URL}/quote/border-top.jpg`} width={MAX_WIDTH} />
        <Section width={MAX_WIDTH}>
            <Column width="48">
                <Img src={`${BASE_URL}/quote/border-${index}-left.jpg`} />
            </Column>
            <Column width="495" style={{ backgroundColor: "#FCFDFF" }}>
                <Section style={{marginBottom:"10px"}}>
                    <Column>
                        <Img src={`${BASE_URL}/quote/bar-${index}.jpg`} width="14"/>
                    </Column>
                    <Column>
                        <Text style={{ fontSize: "24px", fontWeight: 'bold', lineHeight:"1.2em", margin: "0" }}>
                            {quote}
                        </Text>
                    </Column>
                </Section>
                <Section>
                    <Column style={{verticalAlign:'top'}}>
                        <Img src={`${BASE_URL}/quote/${pic}.jpg`} width="32" style={{marginRight:"5px", marginTop:'5px'}}/>
                    </Column>
                    <Column>
                        <Text style={{ fontSize: size.p, margin: "0" }}>{name}</Text>
                        <Text style={{ fontSize: '15px', fontWeight:'bold', margin: "0" }}>{job}</Text>
                        <Text style={{ fontSize: '15px', margin: "0" }}>{location}</Text>
                    </Column>

                </Section>
            </Column>
            <Column width="55">
                <Img src={`${BASE_URL}/quote/border-${index}-right.jpg`} />
            </Column>
        </Section>
        <Img src={`${BASE_URL}/quote/border-bottom.jpg`} width={MAX_WIDTH} />
    </Section>
);