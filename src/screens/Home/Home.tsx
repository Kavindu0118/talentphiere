import React from 'react';
import './Home.css';
import Header from '../../components/header';
import Review from '../../components/Review/reaview';
import WhyChoose from '../../components/WhyChoose/whychoose';
import Process from '../../components/HowDoIt/process';
import SuccessStories from '../../components/HomeReview/HomeReview';
import CEOSection from '../../components/FounderMessage/FounderMesage';
import FooterSection from '../../components/Footer/footer'; 

const Home: React.FC = () => {
  return (
    <div>
      <Header
        title="Find Exceptional Global Talent for Your Growing Team"
        subtitle="Hire great global talent that blends easily with your team and keeps your costs low."
        buttonText="Hire With Talentphere"
        buttonLink="/hire"
      />
      <Review />
      <WhyChoose />
      <Process />
      <SuccessStories />
      <CEOSection />
      <FooterSection />
    </div>
  );
};

export default Home;
