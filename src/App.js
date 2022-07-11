import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/content';
function App() {
  return (
    <div className="App">
       <Header/>
      <main>
        <SideBar/>
        <Content/>
      </main>
    </div>
  );
}

export default App;
