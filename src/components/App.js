import ProfileCard from "./ProfileCard";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <ProfileCard
        profileName="Siri"
        profileHandle="@siri22"
        profileDescription="You know her.. you love her... the queen of Apple"
        img="./img/siri.jpg"
      />
      <ProfileCard
        profileName="Alexa"
        profileHandle="@amazonian"
        profileDescription="Just tell her what you want to buy"
        img="./img/alexa.png"
      />
      <ProfileCard
        profileName="Cortana"
        profileHandle="@outlook.com"
        profileDescription="Was better as a video game character"
        img="./img/cortana.jpg"
      />
    </div>
  );
}

export default App;
