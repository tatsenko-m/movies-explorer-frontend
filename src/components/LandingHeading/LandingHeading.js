import './LandingHeading.css';

const LandingHeading = ({ headingText, isTechs }) => {
  return (
    <h2 className={`landing-heading ${isTechs ? 'landing-heading_techs' : ''}`}>
      {headingText}
    </h2>
  );
};

export default LandingHeading;
