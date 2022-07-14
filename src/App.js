import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar.jsx';
import Content from './components/Content/content.jsx';

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
