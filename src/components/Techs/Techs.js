import { Link } from 'react-router-dom';

const Techs = () => {
    return (
      <section className="techs">
        <div className="techs__container">
          <h2 className="techs__heading">Технологии</h2>
          <h3 className="techs__subheading">7 технологий</h3>
          <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul>
            <li><Link to="https://www.w3.org/html/" target="_blank" className="techs__technology">HTML</Link></li>
            <li><Link to="https://www.w3schools.com/css/" target="_blank" className="techs__technology">CSS</Link></li>
            <li><Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="techs__technology">JS</Link></li>
            <li><Link to="https://react.dev/" target="_blank" className="techs__technology">React</Link></li>
            <li><Link to="https://git-scm.com/" target="_blank" className="techs__technology">Git</Link></li>
            <li><Link to="https://expressjs.com/" target="_blank" className="techs__technology">Express.js</Link></li>
            <li><Link to="https://www.mongodb.com/" target="_blank" className="techs__technology">mongoDB</Link></li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Techs;