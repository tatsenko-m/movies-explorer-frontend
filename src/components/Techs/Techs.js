const Techs = () => {
    return (
      <section className="techs">
        <div className="techs__container">
          <h2 className="techs__heading">Технологии</h2>
          <h3 className="techs__subheading">7 технологий</h3>
          <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__tech-list">
            <li className="techs__technology">HTML</li>
            <li className="techs__technology">CSS</li>
            <li className="techs__technology">JS</li>
            <li className="techs__technology">React</li>
            <li className="techs__technology">Git</li>
            <li className="techs__technology">Express.js</li>
            <li className="techs__technology">mongoDB</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Techs;