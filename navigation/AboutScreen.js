import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>About Me</Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        Hey! I’m Oluwatobiloba Ojo, but most people call me Slonjoh. I was born and raised in Ibadan (the brown roof city), Nigeria—a city that is rich in culture and community. 
        Growing up here has given me a deep appreciation for the blend of cultures and beauty of finding calm in the chaos.
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10 }}>
        I’ve always had a curious personality since I was a kid whether it was taking apart electrical appliances or buying a toy just to see what makes it work. 
        That curiosity stayed with me and evolved into a love for creating and building things. I enjoy challenging myself, whether it’s learning a new skill or diving 
        into an unfamiliar topic just to see how good I can get.
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10 }}>
        Outside of work, I’m all about balance and self-expression. My hobbies include playing video games—which I would say helped with logical thinking and decision-making. 
        I also write, and music plays a big part in my life as it helps me lock-in on work and helps me relax. When I’m not lost in my headphones, I love spending time in nature, 
        just to smell fresh oxygen and feel the breeze. I also enjoy researching the web just out of curiosity for anything.
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10 }}>
        Family and community are essential to me. I believe that relationships and shared experiences are what shape us. I try to stay grounded by staying connected to the people 
        around me, and I’m always eager to meet new faces and hear different stories.
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10 }}>
        Ultimately, I’m someone who values growth—both personal and professional. I love to learn and explore, whether it’s through travel, doing a new activity, or having conversations 
        with people to view life from their perspective and learn from their experiences. Life, for me, is about being curious, making meaningful connections, and enjoying the ride as much as possible.
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10 }}>
        That's pretty much everything I can think of about myself for now. Of course, there is more.
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;
