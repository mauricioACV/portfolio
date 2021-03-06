import SectionContentTitle from "./SectionContentTitle";

export default function SkillsSection() {
  return (
    <>
      <SectionContentTitle title="Habilidades" />
      <div className="content-section skills-style">
        <div className="item-container">
          <h3>Competente: Uso diario</h3>
          <ul className="style-content">
            <li>- HTML5 - CSS3 - Javascript ES6</li>
            <li>- React Js</li>
            <li>- C# .Net</li>
            <li>- Scrum</li>
            <li>- Toad for Oracle Database</li>
            <li>- Visual Studio Code</li>
            <li>- Visual Studio .Net IDE</li>
            <li>- GitHub</li>
            <li>- Git</li>
          </ul>
        </div>
        <div className="item-container">
          <h3>Productivo: Uso Periódico</h3>
          <ul className="style-content">
            <li>- Oracle 11g</li>
            <li>- SQL Server</li>
            <li>- Google Firebase</li>
            <li>- Api Rest .Net Framework 4.x</li>
            <li>- Api RestFul .Net Core 3.0</li>
            <li>- Trello</li>
            <li>- Notion</li>
            <li>- Miro</li>
          </ul>
        </div>
        <div className="item-container">
          <h3>Intermedio: Uso Esporádico</h3>
          <ul className="style-content">
            <li>- Jest Testing Library</li>
            <li>- xUnit.net</li>
            <li>- MariaDB - MYSQL</li>
            <li>- MongoDb</li>
            <li>- Azure DevOps</li>
          </ul>
        </div>
      </div>
      <SectionContentTitle title="Interés Personal" />
      <div className="content-section skills-style">
        <div className="item-container">
          <h3>Próximas Tecnologías</h3>
          <ul className="style-content">
            <li>- React Native</li>
            <li>- Node.js</li>
            <li>- Express</li>
          </ul>
          <br/>
          <h3>Próximos Libros</h3>
          <ul className="style-content">
            <li>- Structure & Interpretation of Computer Programs</li>
            <li>- Composing Software by Eric Elliott</li>
          </ul>
        </div>
      </div>
    </>
  );
}
