import React from 'react';
import './index.css';
import './sections.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { WhatWeBuild } from './components/WhatWeBuild';
import { DeepDive } from './components/DeepDive';
import { CaseStudy } from './components/CaseStudy';
import { Showcase } from './components/Showcase';
import { HowItWorks } from './components/HowItWorks';
import { MultiBranch } from './components/MultiBranch';
import { OwnerDashboard } from './components/OwnerDashboard';
import { CustomerJourney } from './components/CustomerJourney';
import { WhyCustom } from './components/WhyCustom';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';

const App: React.FC = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <CapabilityStrip />
      <WhatWeBuild />
      <DeepDive />
      <CaseStudy />
      <Showcase />
      <HowItWorks />
      <MultiBranch />
      <OwnerDashboard />
      <CustomerJourney />
      <WhyCustom />
      <Technology />
      <Projects />
      <About />
      <Contact />
      <FinalCTA />
    </main>
    <Footer />
    <MobileCTA />
  </>
);

export default App;
