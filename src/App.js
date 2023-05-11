import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from "./components/Header"
import Forms from './components/Forms';
import Org from './components/org';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [showForm, renderForm] = useState(false);
  const [colaborators, newColaborator] = useState([]);

  const [teams, changeTeams] = useState([
    {
      id: uuid(),
      job: "Programación",
      color: "#57C278",
      secColor: "#D9F7E9"
    },
    {
      id: uuid(),
      job: "Front-End",
      color: "#82CFFA",
      secColor: "E8F8FF"
    },
    {
      id: uuid(),
      job: "Data Science",
      color: "#A6D157",
      secColor: "#F0F8E2"
    },
    {
      id: uuid(),
      job: "DevOps",
      color: "#E06B69",
      secColor: "#FDE7E8"
    },
    {
      id: uuid(),
      job: "UX y Diseño",
      color: "#DB6EBF",
      secColor: "#FAE9F5"
    },
    {
      id: uuid(),
      job: "Móvil",
      color: "#FFBA05",
      secColor: "#FFF5D9"
    },
    {
      id: uuid(),
      job: "Innovación y gestión",
      color: "#FF8A29",
      secColor: "#FFEEDF"
    }
  ]);

  const changeShow = () =>
  {
    renderForm(!showForm)
  }

  const registerColaborators = (colaborator) =>
  {
     console.log('New members', colaborators);
     newColaborator([...colaborators, colaborator])
  }

  const deleteColaborator = (id) =>
  {
      const newsColaborators = colaborators.filter((colaborator) => colaborator.id !== id )
      newColaborator(newsColaborators)
  }

  const changeColor = (color, id) =>
  {
    console.log('Change color', color, id)
    const newTeams = teams.map((team) => 
    {
      if(team.id === id)
      {
        team.color = color
      }

      return team
    })
    changeTeams(newTeams)
  }

  const createTeam = (newTeam) =>
  {
      changeTeams([...teams, {...newTeam, id: uuid()}])
  }

const like = (id) => 
{
  const newColaborators = colaborators.map((colaborator) => 
  {
    if(colaborator.id === id)
    {
      colaborator.fav = !colaborator.fav
    }
    return colaborator
  })
  newColaborator(newColaborators)
}



  return (
    <div>
      <Header/>
        {
          showForm && <Forms team = {teams.map((team) => team.job)}
          registerColaborator = {registerColaborators}  
          createTeam = {createTeam}
          />
        }

      <Org changeShow = {changeShow}/>
      {
        teams.map((team) => <Team team = {team}
         key = {team.job}
         colaborators = {colaborators.filter( colaborator => colaborator.team === team.job)}
         deleteColaborator = {deleteColaborator}
         changeColor = {changeColor}
         like = {like}/> )
      }
      <Footer />
    </div>
  );
}

export default App;
