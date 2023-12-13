import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);
function App() {
  const items = [
    { image: AlexaImage, title: 'Alexa', handle: '@alexa99', description:'Alexa was created by Amazon'},
    { image: CortanaImage, title: 'Cortana', handle: '@cortana32', description:'Cortana was created by Microsoft'},
    { image: SiriImage, title: 'Siri', handle: '@siri01', description:'Siri was created by Apple'},
  ];

  const columnsCount = Math.ceil(items.length / 4);

  return(
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          {Array.from({ length: columnsCount }, (_, i) => (
            <div className="columns" key={i}>
              {items.slice(i * 4, (i + 1) * 4).map((item) => (
                <div className="column is-4" key={item.handle}>
                  <ProfileCard image={item.image} title={item.title} handle={item.handle} description={item.description}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;