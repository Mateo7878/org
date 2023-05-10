import { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Forms from './components/Forms';
import Org from './components/org';
import Team from './components/Team';
import Footer from './components/Footer';
function App() {
  const [showForm, renderForm] = useState(false);
  const [colaborators, newColaborator] = useState([]);
  const changeShow = () =>
  {
    renderForm(!showForm)
  }

  const registerColaborators = (colaborator) =>
  {
     console.log('New members', colaborators);
     newColaborator([...colaborators, colaborator])
  }

  const listTeams = [
    {
      job: "Programación",
      color: "#57C278",
      secColor: "#D9F7E9"
    },
    {
      job: "Front-End",
      color: "#82CFFA",
      secColor: "E8F8FF"
    },
    {
      job: "Data Science",
      color: "#A6D157",
      secColor: "#F0F8E2"
    },
    {
      job: "DevOps",
      color: "#E06B69",
      secColor: "#FDE7E8"
    },
    {
      job: "UX y Diseño",
      color: "#DB6EBF",
      secColor: "#FAE9F5"
    },
    {
      job: "Móvil",
      color: "#FFBA05",
      secColor: "#FFF5D9"
    },
    {
      job: "Innovación y gestión",
      color: "#FF8A29",
      secColor: "#FFEEDF"
    }
  ]



  return (
    <div>
      <Header/>
        {
          showForm && <Forms team = {listTeams.map((team) => team.job)}
          registerColaborator = {registerColaborators}  
          />
        }

      <Org changeShow = {changeShow}/>
      {
        listTeams.map((team) => <Team team = {team}
         key = {team.job}
         colaborators = {colaborators.filter( colaborator => colaborator.team === team.job)}/> )
      }
      <Footer />
    </div>
  );
}

export default App;
