import { Section, Heading } from "@react-email/components";
import style from '../lib/style';
import Quote from './Quotes.quote';

const QUOTE_MAP = [
    {
        quote: 'I strongly recommend having him on your side for any tech-savvy initiative. A real wizard!!!',
        name: 'Paul-André C.',
        job: 'Associate & Business development at Celisus Communication',
        location: 'Montréal, Canada',
        pic: 'pa',
        height: '163',
    },
    {
        quote: 'An incredibly talented and versatile Creative. He consistently demonstrates a proactive approach to problem-solving, seamlessly adapting his skills to various projects and platforms.',
        name: 'Louhann M.',
        job: 'Former Journalist & Copywriter at Grazia Magazine',
        location: 'Paris, France',
        pic: 'louhann',
        height: '253',
    },
    {
        quote: 'His creations are not only aesthetically captivating, they are also designed with a great attention to detail and visual coherence.',
        name: 'Matteo M.',
        job: 'Project Manager & SEM Campaign Specialist ',
        location: 'Marseille, France',
        pic: 'matteo',
        height: '193'
    }
];


export default () => {

    return (<Section style={{marginBottom:"35px", marginTop:"35px"}}>
        <Heading as="h2" style={{ ...style.heading, paddingLeft: '30px', marginBottom:"40px" }}>
            We propelled projects together!
        </Heading>
        {QUOTE_MAP.map((item, id) => <Quote key={`quote${id}`} {...item} index={id + 1} />)}

    </Section>);
}

