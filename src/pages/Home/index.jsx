import React from 'react';

import * as S from './styles';

import TeamMemberCard from './components/TeamMemberCard';
import ActivityShowcaseCard from './components/ActivityShowcaseCard';
import TraingPlanCard from './components/TraingPlanCard';

export default function Home() {
  return (
    <>
      <S.Header>
        <S.Overlay>
          <S.HeaderContent>
            <h1>From Beginner to Pro</h1>
            <h2>Sign up today and Learn more!</h2>
            <S.HeaderButton>Sign Up</S.HeaderButton>
            <S.HeaderButton>Contact</S.HeaderButton>
          </S.HeaderContent>
        </S.Overlay>
      </S.Header>
      <S.About>
        <S.AboutContent>
          <S.AboutTitle>About Us</S.AboutTitle>
          <S.AboutText>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            vitae officia temporibus suscipit totam, praesentium, ipsam nostrum
            magni doloribus hic commodi similique fugiat neque! Obcaecati aut
            cumque deserunt animi explicabo."
          </S.AboutText>
        </S.AboutContent>
      </S.About>
      <S.TeamShowcase>
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
      </S.TeamShowcase>
      <S.ActivityShowcase>
        {/* <S.ActivityShowcaseContainer>
          <S.ActivityShowcaseRow>
            <ActivityShowcaseCard></ActivityShowcaseCard>
            <ActivityShowcaseCard></ActivityShowcaseCard>
            <ActivityShowcaseCard></ActivityShowcaseCard>
          </S.ActivityShowcaseRow>
          <S.ActivityShowcaseRow>
            <ActivityShowcaseCard></ActivityShowcaseCard>
            <ActivityShowcaseCard></ActivityShowcaseCard>
            <ActivityShowcaseCard></ActivityShowcaseCard>
          </S.ActivityShowcaseRow>
          <S.ActivityShowcaseRow>
            <ActivityShowcaseCard></ActivityShowcaseCard>
            <ActivityShowcaseCard></ActivityShowcaseCard>
            <ActivityShowcaseCard></ActivityShowcaseCard>
          </S.ActivityShowcaseRow>
        </S.ActivityShowcaseContainer> */}
      </S.ActivityShowcase>
      <S.TrainingPlan>
        <TraingPlanCard
          customImage={'/img/team.jpg'}
          title={'Team Training'}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          blanditiis quaerat vero cupiditate illo neque nostrum commodi totam
          vitae facilis`}
        />
        <TraingPlanCard
          customImage={'/img/training3.jpg'}
          title={'Personal Training'}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          blanditiis quaerat vero cupiditate illo neque nostrum commodi totam
          vitae facilis.`}
        />
        <TraingPlanCard
          customImage={'/img/camp.jpg'}
          title={'Summer Camp'}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          blanditiis quaerat vero cupiditate illo neque nostrum commodi totam
          vitae facilis.`}
        />
      </S.TrainingPlan>
      <S.Contact>
        <S.ContactCard></S.ContactCard>
        <S.ContactForm>
          <S.ContactTitle>
            <h1>Contact Us</h1>
          </S.ContactTitle>
          <S.ContactNameInput type="text" placeholder="Name" />
          <S.ContactEmailInput type="text" placeholder="Email" />
          <S.ContactMessageInput
            name="message"
            rows="10"
            placeholder="Message"
          />
          <S.ContactSendInput type="submit" value="Send Message" />
        </S.ContactForm>
      </S.Contact>
    </>
  );
}
