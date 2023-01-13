import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>à propos </h1>
      <br />
      <h3> What are API countries?</h3>
      <p>
        A Countries API, or Application Programming Interface, is an interface
        that connects developers to software featuring data concerning countries
        around the world
      </p>
      <br />
      <p>
        A web app that displays info on all of the world's countries, allowing
        users to filter countries by name and region, and view detailed info on
        each country
      </p>
    </div>
  );
};

export default About;
