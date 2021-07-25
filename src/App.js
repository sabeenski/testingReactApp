import Header from './components/Header';
import './App.scss';
import Headline from './components/Headline';

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          description='Click the button to display posts'
        />
      </section>
    </div>
  );
}

export default App;
