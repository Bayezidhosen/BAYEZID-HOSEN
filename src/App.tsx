/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('WordPress Development');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-zinc-100 relative selection:bg-purple-600/30 selection:text-purple-200">
      {/* Viewport Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero 
          onViewWorkClick={scrollToProjects} 
          onContactClick={scrollToContact} 
        />

        {/* About Section */}
        <About onContactClick={scrollToContact} />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Featured Projects Section */}
        <Projects onContactClick={scrollToContact} />

        {/* Professional Experience Timeline */}
        <Experience />

        {/* Technology Ecosystem Showcase */}
        <TechStack />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Form & Information */}
        <Contact initialSubject={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
