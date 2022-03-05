import './App.css';
import Header from './views/components/header';
import Footer from './views/components/footer';
import HomeComponent from './views/components/home';

function App() {
  return (
    <div className="App">
      <Header />
        <HomeComponent />
      <Footer />
    </div>
  );
}

export default App;
