import {
    Section,
    Link,
    Text
} from '@react-email/components';
import style from '../lib/style';

export default ({ hash, lang = 'english' }) => (
    <Section style={{ textAlign: 'center', marginTop: "20px" }}>
        <Text style={{ ...style.link, textDecoration: 'none' }}>
            {
            lang === 'french' ?
                <>Cet email ne s'affiche pas correctement ? <Link href={`https://elkhantour.com/view/${hash}/`} style={style.link}>Cliquez ici</Link></>
                :
                <>This email doesn’t display correctly? <Link href={`https://elkhantour.com/view/${hash}/`} style={style.link}>Click here</Link></>
            }


        </Text>
    </Section>
);