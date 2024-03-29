import { BASE_URL } from '../lib/utilities';
import { Section, Text, Img, Column } from "@react-email/components";
import style, { MAX_WIDTH, size, color } from '../lib/style';


export default ({ quote, name, job, location, pic, index }) => (
    <Section style={{marginBottom:"20px"}}>
        <Img src={`${BASE_URL}/quote/border-top.jpg`} width={MAX_WIDTH} alt="top border"  />
        <Section width={MAX_WIDTH}>
            <Column width="47">
                <Img src={`${BASE_URL}/quote/border-${index}-left.jpg`} alt="left border" />
            </Column>
            <Column width="495" style={{ backgroundColor: "#FCFDFF" }}>
                <Section style={{marginBottom:"10px"}}>
                    <Column>
                        <Img src={`${BASE_URL}/quote/bar-${index}.jpg`} width="14" alt="left bar" />
                    </Column>
                    <Column>
                        <Text style={{ fontSize: "24px", fontWeight: 'bold', lineHeight:"1.2em", margin: "0" }}>
                            {quote}
                        </Text>
                    </Column>
                </Section>
                <Section>
                    <Column style={{verticalAlign:'top'}}>
                        <Img src={`${BASE_URL}/quote/${pic}.jpg`} width="32" style={{marginRight:"5px", marginTop:'5px'}} alt={`avatar of ${pic}`}/>
                    </Column>
                    <Column>
                        <Text style={{ fontSize: size.p, margin: "0" }}>{name}</Text>
                        <Text style={{ fontSize: '15px', fontWeight:'bold', margin: "0", color:color.purple}}>{job}</Text>
                        <Text style={{ fontSize: '15px', margin: "0" }}>{location}</Text>
                    </Column>

                </Section>
            </Column>
            <Column width="55">
                <Img src={`${BASE_URL}/quote/border-${index}-right.jpg`} alt="right border background"  />
            </Column>
        </Section>
        <Img src={`${BASE_URL}/quote/border-bottom.jpg`} width={MAX_WIDTH} alt="bottom border background"  />
    </Section>
);