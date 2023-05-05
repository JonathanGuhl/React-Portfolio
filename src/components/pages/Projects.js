import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import movieGame from '../../imgs/MovieGame.png';
import dailyPlanner from '../../imgs/DailyPlanner.png';
import noteTaker from '../../imgs/NoteTaker.png';
import repairRadar from '../../imgs/RepairRadar.png';
import teamManager from '../../imgs/TeamManager.png';
import textEditor from '../../imgs/TextEditor.png';

const Projects = () => {

  const projectUrl = [
    "https://jboyce313.github.io/movie-game/score-guesser.html",
    "https://jonathanguhl.github.io/DailyPlanner/",
    "https://jgs-note-taker.herokuapp.com/",
    "https://repairradar.herokuapp.com/",
    "https://github.com/JonathanGuhl/TeamManager",
    "https://stark-cliffs-20391.herokuapp.com/"
  ];

  const projectRepo = [
    "https://github.com/jboyce313/movie-game",
    "https://github.com/JonathanGuhl/DailyPlanner",
    "https://github.com/JonathanGuhl/Note-Taker",
    "https://github.com/AmeliaBigler/RepairRadar",
    "https://github.com/JonathanGuhl/TeamManager",
    "https://github.com/JonathanGuhl/Text-Editor"
  ];

  const projectName = [
    "Rotten Tomatoes Review Guesser",
    "Daily Planner",
    "Note Taker",
    "Repair Radar",
    "Team Manager",
    "Text Editor"
  ];

  const projectImg = [
    movieGame,
    dailyPlanner,
    noteTaker,
    repairRadar,
    teamManager,
    textEditor
  ];

  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projectRepo.map((repo, index) => (
            <div className="col" key={index}>
              <Card className="h-100 projectCard">
                <Card.Img
                  variant="top"
                  src={projectImg[index]}
                  alt="Screenshot of Project"
                />
                <Card.Body className="projectCardBody">
                  <Card.Title className="text-center projectCardBody">{projectName[index]}</Card.Title>
                </Card.Body>
                <Card.Body className="text-center projectCardBody">
                  <Button className="projectButton custom-btn me-2" href={projectRepo[index]} target="_blank" rel="noreferrer">View Repository</Button>
                  <Button className="projectButton custom-btn me-2" href={projectUrl[index]} target="_blank" rel="noreferrer">View Deployment</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

  );
}

export default Projects;