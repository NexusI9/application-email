import {
    Section,
    Heading,
    Text,
} from '@react-email/components';
import * as React from 'react';
import style, { size } from '../lib/style';


export default ({agencyName=''}) => (
    <Section style={style.section}>

        <Heading as="h2" style={style.heading}>
            Dear {agencyName} <br /> hiring team,
        </Heading>

        <Text style={{ fontSize: size.p }}>
            After working for the past 2 years as a Lead Designer in a Canadian Digital Marketing agency where I mastered Motion, Web and Print productions as well as execute project management related tasks, I am currently in Taiwan and very interested in a full-time job as a Visual Designer at {agencyName}.
            <br /><br />
            On top of mastering Motion and Web Design, my past experience as a Multimedia Designer and Art Director expanded my proficiencies with practices like 3D design, web development, illustration, and sound design.
            An extensive skill set that I put together in diverse projects such as: websites, marketing collaterals, products showcases, video-mapping installations, as well as animated short movies (later awarded).
            <br /><br />
            This wealth of experience improved the flexibility, efficiency, and quality of my work by ensuring the clients expectations. In addition, working with various business fields has been socially nourishing and greatly improved my communication and delivery skills.
            <br /><br />
            Last but not least, my experience in a cross-cultural agency sharpened my understanding of digital marketing stakes, and strengthen my ability to work as part of a team.
            <br /><br />
            Being very curious and proactive by nature, I always strive to design and develop innovative applications and visuals, and I love the challenge and the creative solutions that come with it.
            I am very motivated to contribute to your team success with my broad skillsets and ideas, as well as learning from other members and the beautiful Taiwanese culture.
        </Text>

    </Section>
);