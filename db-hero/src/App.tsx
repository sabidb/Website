import React from 'react';
import './index.css';
import './sections.css';
import { Nav } from './components/Nav';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { Segments } from './components/Segments';
import { WhatWeBuild } from './components/WhatWeBuild';
import { DeepDive } from './components/DeepDive';
import { CaseStudy } from './components/CaseStudy';
import { Showcase } from './components/Showcase';
import { HowItWorks } from './components/HowItWorks';
import { MultiBranch } from './components/MultiBranch';
import { OwnerDashboard } from './components/OwnerDashboard';
import { CustomerJourney } from './components/CustomerJourney';
import { WhyCustom } from './components/WhyCustom';
import { Process } from './components/Process';
import { Reliability } from './components/Reliability';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';

const App: React.FC = () => (
  <>
    <ScrollProgress />
    <Nav />
    <main>
      <Hero />
      <CapabilityStrip />
      <Segments />
      <WhatWeBuild />
      <DeepDive />
      <CaseStudy />
      <Showcase />
      <HowItWorks />
      <MultiBranch />
      <OwnerDashboard />
      <CustomerJourney />
      <WhyCustom />
      <Process />
      <Reliability />
      <Technology />
      <Projects />
      <About />
      <FAQ />
      <Contact />
      <FinalCTA />
    </main>
    <Footer />
    <MobileCTA />
  </>
);

export default App;
