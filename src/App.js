import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import SongList from './sections/songList/SongList.jsx';
import Footer from './sections/footer/Footer.jsx';

function App() {

  const happySongs = ["HappyBirthday", "Celibrate", "Dancing", "DJ"];
  const sadSongs = ["Crying", "Feeling", "Broking", "Silent"];

  return (
    <main className="App">
      <Header />
      <SongList songsType="Happy" songs={happySongs} rating={5} color="#00ff00"/>
      <SongList songsType="Sad" songs={sadSongs} rating={10} color={"#818181"}/>
      <Footer content="this is footer"/>
      <Footer content="copy right and redloved"/>

    </main>
  );
}

export default App;
