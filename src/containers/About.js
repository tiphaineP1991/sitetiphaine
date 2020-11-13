import React from "react";
import tiphaine from "../assets/TIPHAINE_ROUND_PINK.png";
import RatingStars from "../components/rating";

function About({ setPage }) {
  return (
    <div className="page">
      <div className="aboutBox">
        <div className="doubleColumns">
          <div className="littleColumn">
            <img src={tiphaine} className="photo" />
          </div>
          <div className="bigColumn">
            <div className="title">
              <h2>Tiphaine PELLET</h2>
              <div className="lineAbout" />
              <h4>Chef de projet digital et développeur web et mobile</h4>
            </div>
            <div className="description">
              <img
                className="quoteIconLeft"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDk1LjMzMyA5NS4zMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwLjUxMiw0My45MzljLTIuMzQ4LTAuNjc2LTQuNjk2LTEuMDE5LTYuOTgtMS4wMTljLTMuNTI3LDAtNi40NywwLjgwNi04Ljc1MiwxLjc5MyAgICBjMi4yLTguMDU0LDcuNDg1LTIxLjk1MSwxOC4wMTMtMjMuNTE2YzAuOTc1LTAuMTQ1LDEuNzc0LTAuODUsMi4wNC0xLjc5OWwyLjMwMS04LjIzYzAuMTk0LTAuNjk2LDAuMDc5LTEuNDQxLTAuMzE4LTIuMDQ1ICAgIHMtMS4wMzUtMS4wMDctMS43NS0xLjEwNWMtMC43NzctMC4xMDYtMS41NjktMC4xNi0yLjM1NC0wLjE2Yy0xMi42MzcsMC0yNS4xNTIsMTMuMTktMzAuNDMzLDMyLjA3NiAgICBjLTMuMSwxMS4wOC00LjAwOSwyNy43MzgsMy42MjcsMzguMjIzYzQuMjczLDUuODY3LDEwLjUwNyw5LDE4LjUyOSw5LjMxM2MwLjAzMywwLjAwMSwwLjA2NSwwLjAwMiwwLjA5OCwwLjAwMiAgICBjOS44OTgsMCwxOC42NzUtNi42NjYsMjEuMzQ1LTE2LjIwOWMxLjU5NS01LjcwNSwwLjg3NC0xMS42ODgtMi4wMzItMTYuODUxQzQwLjk3MSw0OS4zMDcsMzYuMjM2LDQ1LjU4NiwzMC41MTIsNDMuOTM5eiIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik05Mi40NzEsNTQuNDEzYy0yLjg3NS01LjEwNi03LjYxLTguODI3LTEzLjMzNC0xMC40NzRjLTIuMzQ4LTAuNjc2LTQuNjk2LTEuMDE5LTYuOTc5LTEuMDE5ICAgIGMtMy41MjcsMC02LjQ3MSwwLjgwNi04Ljc1MywxLjc5M2MyLjItOC4wNTQsNy40ODUtMjEuOTUxLDE4LjAxNC0yMy41MTZjMC45NzUtMC4xNDUsMS43NzMtMC44NSwyLjA0LTEuNzk5bDIuMzAxLTguMjMgICAgYzAuMTk0LTAuNjk2LDAuMDc5LTEuNDQxLTAuMzE4LTIuMDQ1Yy0wLjM5Ni0wLjYwNC0xLjAzNC0xLjAwNy0xLjc1LTEuMTA1Yy0wLjc3Ni0wLjEwNi0xLjU2OC0wLjE2LTIuMzU0LTAuMTYgICAgYy0xMi42MzcsMC0yNS4xNTIsMTMuMTktMzAuNDM0LDMyLjA3NmMtMy4wOTksMTEuMDgtNC4wMDgsMjcuNzM4LDMuNjI5LDM4LjIyNWM0LjI3Miw1Ljg2NiwxMC41MDcsOSwxOC41MjgsOS4zMTIgICAgYzAuMDMzLDAuMDAxLDAuMDY1LDAuMDAyLDAuMDk5LDAuMDAyYzkuODk3LDAsMTguNjc1LTYuNjY2LDIxLjM0NS0xNi4yMDlDOTYuMDk4LDY1LjU1OSw5NS4zNzYsNTkuNTc1LDkyLjQ3MSw1NC40MTN6IiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              />
              <p>
                Passionnée par les problématiques et les enjeux actuels du
                digital j’ai acquis une expérience en marketing digital et
                gestion de projets digitaux avant de reprendre une formation en
                développement web et mobile sur React, React Native et Node Js.
                Forte de cette double compétence, je saurais aujourd'hui gérer
                et développer tous vos projets et site web et d'applications
                mobiles
              </p>
              <img
                className="quoteIconRight"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDk4LjgyOSA5OC44MjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTk2Ljc2LDQxLjYwM0M5MS41MTEsMjIuODMxLDc4LjU2Miw5LjIwNCw2NS45NzUsOS4yMDRjLTEuMDExLDAtMi4wMjEsMC4wODgtMy4wMDUsMC4yNjIgICAgYy0wLjU1OCwwLjA5OC0xLjA0NiwwLjQyNi0xLjM0OCwwLjkwMmMtMC4zMDEsMC40NzktMC4zODYsMS4wNjEtMC4yMzMsMS42MDVsMi41OTEsOS4yNjhjMC4yNSwwLjg5NSwxLjExMywxLjUsMi4wMSwxLjQ1OSAgICBsMC4yMDYtMC4wMDRjNC42NjgsMCwxMy4xOTksNi45OTYsMTcuNTQ4LDIyLjU0NWMwLjE3MiwwLjYxNywwLjMzNSwxLjI0OCwwLjQ5MiwxLjkwNmMtNC44ODItMi40MTYtMTAuNzA2LTIuOTc1LTE1Ljk4LTEuNTA2ICAgIEM1Ni4zNTgsNDguOTcsNDkuMzg4LDYxLjM1Niw1Mi43MTQsNzMuMjUyYzIuNjk2LDkuNjM5LDExLjU2MywxNi4zNzMsMjEuNTYzLDE2LjM3M2MyLjAzNywwLDQuMDcxLTAuMjgxLDYuMDQ2LTAuODM0ICAgIGM3Ljg0Ni0yLjE5MywxMy43NDUtOC43MDcsMTYuNjExLTE4LjMzOEM5OS41MjEsNjEuNzY0LDk5LjQ1Niw1MS4yNDksOTYuNzYsNDEuNjAzeiIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0xNC4wODgsOS4yMDZjLTEuMDA5LDAtMi4wMiwwLjA4Ni0zLjAwMywwLjI2Yy0wLjU1NywwLjA5Ni0xLjA0NiwwLjQyNi0xLjM0NywwLjkwMiAgICBjLTAuMzAxLDAuNDc5LTAuMzg2LDEuMDYxLTAuMjM0LDEuNjA1bDIuNTkyLDkuMjY4YzAuMjUsMC44OTUsMS4wOTcsMS41LDIuMDEsMS40NTlsMC4yMDQtMC4wMDQgICAgYzQuNjY4LDAsMTMuMiw2Ljk5NiwxNy41NDksMjIuNTQ1YzAuMTczLDAuNjIxLDAuMzM2LDEuMjUyLDAuNDkyLDEuOTA2Yy00Ljg4NC0yLjQxNi0xMC43MDYtMi45NzUtMTUuOTgtMS41MDYgICAgQzQuNDc1LDQ4Ljk3LTIuNDk3LDYxLjM1NiwwLjgzMSw3My4yNTJjMi42OTYsOS42MzksMTEuNTYzLDE2LjM3MywyMS41NjMsMTYuMzczYzIuMDM3LDAsNC4wNzEtMC4yODEsNi4wNDctMC44MzQgICAgYzcuODQ1LTIuMTkzLDEzLjc0NC04LjcwNywxNi42MTEtMTguMzM4YzIuNTg2LTguNjg5LDIuNTIyLTE5LjIwNS0wLjE3NS0yOC44NTJDMzkuNjI1LDIyLjgzMSwyNi42NzgsOS4yMDYsMTQuMDg4LDkuMjA2eiIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
              />
            </div>
          </div>
        </div>
        <div className="competencesBox">
          <h4>COMPETENCES</h4>
          <div className="competences">
            <div className="competenceGroup">
              <h5>Gestion de projet</h5>
              <RatingStars
                competence={"Sourcing besoins et étude de marché"}
                grade={5}
              />
              <RatingStars
                competence={"CDC techniques et fonctionnel"}
                grade={5}
              />
              <RatingStars
                competence={"Plannification et budgetisation"}
                grade={4}
              />
              <RatingStars
                competence={"Création de wireframes - UI et Ux design"}
                grade={4}
              />
              <RatingStars competence={"Suite Adobe"} grade={4} />
              <RatingStars
                competence={"Pilotage équipe et prestataires"}
                grade={4}
              />
              <RatingStars competence={"Recette fonctionnelle"} grade={4} />
              <RatingStars competence={"Product management"} grade={4} />
              <RatingStars competence={"Google Analytics"} grade={4} />
            </div>
            <div className="competenceGroup">
              <h5>Développement Web et Mobile</h5>
              <RatingStars competence={"React.js"} grade={5} />
              <RatingStars competence={"React Native"} grade={4} />
              <RatingStars competence={"Node JS"} grade={4} />
              <RatingStars competence={"Mongo DB / GraphQL / API"} grade={4} />
              <RatingStars competence={"Html / CSS"} grade={5} />
              <RatingStars competence={"SEO SEA"} grade={4} />
              <RatingStars competence={"GitLab, Gira"} grade={4} />
              <RatingStars competence={"WordPress"} grade={4} />
              <RatingStars competence={"Méthologie AGILE SCRUM"} grade={5} />
            </div>
          </div>
        </div>
        <div className="doubleColumns">
          <div className="littleColumn">
            <div className="formations">
              <h4 className="lines">FORMATIONS</h4>
              <div className="formation">
                <h5>Le Réacteur</h5>
                <p>2019</p>
                <p>Développeur fullstack React, React Native Node JS</p>
              </div>
              <div className="formation">
                <h5>Université Paris X</h5>
                <p>2014</p>
                <p>Marketing digital</p>
              </div>
              <div className="formation">
                <h5>ESSEC BUSINESS SCHOOL</h5>
                <p>2013</p>
                <p>Marketing et communication</p>
              </div>
            </div>
          </div>
          <div className="bigColumn">
            <div className="experiences">
              <h4 className="lines">EXPERIENCES PROFESSIONNELLES</h4>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">Jimmy Fairly</h5>
                <p className="year">- 2020 -</p>
                <p className="job">Développeur fullstack</p>
              </div>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">Res&amp;Co</h5>
                <p className="year">- 2019 -</p>
                <p className="job">Développeur fullstack</p>
              </div>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">Force Femmes</h5>
                <p className="year">- 2017-2019 -</p>
                <p className="job">Chef de projet digital</p>
              </div>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">Bayon Education</h5>
                <p className="year">- 2016-2017 -</p>
                <p className="job">Responsable marketing et communication</p>
              </div>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">Groupe SOS</h5>
                <p className="year">- 2016 -</p>
                <p className="job">Chargée de marketing et projet digital</p>
              </div>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">BNP Paribas</h5>
                <p className="year">- 2015 -</p>
                <p className="job">Développeur fullstack</p>
              </div>
              <div className="experience">
                <h5 className="bulletpoint">#</h5>
                <h5 className="office">Majencia</h5>
                <p className="year">- 2012-2015 -</p>
                <p className="job">Chef de projet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="interest">
          <h4 className="lines">Centre d'intérêts</h4>
          <div className="interets">
            <img
              className="interet"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDA2NyA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQzMC4zNzUgMjgzLjA3ODEyNSAxMS41NDI5NjktMTIuOTU3MDMxIDYzLjQ4ODI4MS03MS4yODkwNjNjNC43NTM5MDYtNS4zMzk4NDMgNy4xMDU0NjktMTIuMzk4NDM3IDYuNS0xOS41MTk1MzEtLjYwMTU2Mi03LjEyMTA5NC00LjEwOTM3NS0xMy42ODM1OTQtOS42OTUzMTItMTguMTQ0NTMxLTExLjQwNjI1LTguNDcyNjU3LTI3LjQyOTY4OC02LjY2Nzk2OS0zNi42NjQwNjMgNC4xMzI4MTJsLTU2LjczODI4MSA2My43MDMxMjVjLTEuNTI3MzQ0IDEuNzE4NzUtMy42Nzk2ODggMi43NjE3MTktNS45NzY1NjMgMi44OTQ1MzItMi4zMDA3ODEuMTMyODEyLTQuNTU0Njg3LS42NTIzNDQtNi4yNzM0MzctMi4xODM1OTRsLTUxLjg0Mzc1LTQ2LjE3NTc4Mi0zMi40MDIzNDQtMjguODUxNTYyYy0xLjcxODc1LTEuNTMxMjUtMy45NzY1NjItMi4zMTY0MDYtNi4yNzM0MzgtMi4xODM1OTQtMi4zMDA3ODEuMTMyODEzLTQuNDQ5MjE4IDEuMTc1NzgyLTUuOTgwNDY4IDIuODk0NTMybC0yOC44NTU0NjkgMzIuMzk0NTMxLTI0MS40Mjk2ODcgMjcxLjA4MjAzMWMtOS42NjQwNjMgMTAuNDIxODc1LTkuNjA1NDY5IDI2LjU0Njg3NS4xMjg5MDYgMzYuODk4NDM4IDUuMDcwMzEyIDUuMDM5MDYyIDExLjk5MjE4NyA3Ljc3NzM0MyAxOS4xMzY3MTggNy41NjI1IDcuMTQ0NTMyLS4yMTQ4NDQgMTMuODkwNjI2LTMuMzU1NDY5IDE4LjY0ODQzOC04LjY5MTQwN2wyMzYuNjIxMDk0LTI2NS43MzQzNzVjMS41MzEyNS0xLjcyMjY1NiAzLjY4MzU5NC0yLjc2MTcxOCA1Ljk4MDQ2OC0yLjg5NDUzMSAyLjI5Njg3Ni0uMTMyODEzIDQuNTU0Njg4LjY0ODQzNyA2LjI3MzQzOCAyLjE3OTY4N2w1MS44NDM3NSA0Ni4xNzU3ODIgMTIuOTY0ODQ0IDExLjU0Mjk2OGMxNC4zMTY0MDYgMTIuNzQ2MDk0IDM2LjI1MzkwNiAxMS40NzY1NjMgNDkuMDAzOTA2LTIuODM1OTM3em0wIDAiIGZpbGw9IiNmOGNlYzEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im03NC44MjAzMTIgMTc1LjUzOTA2MmMxMS40MTAxNTcgOC40NzI2NTcgMjcuNDI5Njg4IDYuNjY3OTY5IDM2LjY2NDA2My00LjEzMjgxMmw1Ni43MzgyODEtNjMuNzAzMTI1YzEuNTMxMjUtMS43MTg3NSAzLjY3OTY4OC0yLjc2MTcxOSA1Ljk4MDQ2OS0yLjg5NDUzMSAyLjI5Njg3NS0uMTMyODEzIDQuNTU0Njg3LjY1MjM0NCA2LjI3MzQzNyAyLjE4MzU5NGw1OC4zMjQyMTkgNTEuOTQ1MzEyYzEuNzE4NzUgMS41MzEyNSAzLjk3NjU2MyAyLjMxNjQwNiA2LjI3MzQzOCAyLjE4MzU5NCAyLjI5Njg3NS0uMTMyODEzIDQuNDQ5MjE5LTEuMTc1NzgyIDUuOTgwNDY5LTIuODk0NTMybDIzLjA4MjAzMS0yNS45MjE4NzRjMS41MzEyNS0xLjcxODc1IDIuMzE2NDA2LTMuOTc2NTYzIDIuMTgzNTkzLTYuMjczNDM4LS4xMzI4MTItMi4yOTY4NzUtMS4xNzU3ODEtNC40NDkyMTktMi44OTQ1MzEtNS45ODA0NjlsLTY0Ljc5Njg3NS01Ny43MDcwMzEtMTIuOTY4NzUtMTEuNTUwNzgxYy0xNC4zMTI1LTEyLjc0NjA5NC0zNi4yNTM5MDYtMTEuNDc2NTYzLTQ5LjAwMzkwNiAyLjgzNTkzN2wtMTEuNTM5MDYyIDEyLjk2NDg0NC02My40ODgyODIgNzEuMjgxMjVjLTQuNzU3ODEyIDUuMzM5ODQ0LTcuMTA5Mzc1IDEyLjM5ODQzOC02LjUwMzkwNiAxOS41MTk1MzEuNjA1NDY5IDcuMTIxMDk0IDQuMTA5Mzc1IDEzLjY4MzU5NCA5LjY5NTMxMiAxOC4xNDQ1MzF6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI3NC4zMjAzMTIgNDU4LjkyNTc4MWMtOS42NjQwNjIgMTAuNDIxODc1LTkuNjA1NDY4IDI2LjU0Njg3NS4xMjg5MDcgMzYuODk4NDM4IDUuMDc0MjE5IDUuMDMxMjUgMTEuOTk2MDkzIDcuNzU3ODEyIDE5LjE0MDYyNSA3LjUzNTE1NiA3LjE0NDUzMS0uMjI2NTYzIDEzLjg4MjgxMi0zLjM3NSAxOC42MzI4MTItOC43MTQ4NDRsNjMuNTM1MTU2LTcxLjI3MzQzNyAxMS41MzkwNjMtMTIuOTUzMTI1YzYuMTI1LTYuODc1IDkuMjY1NjI1LTE1LjkwMjM0NCA4LjczNDM3NS0yNS4wOTM3NS0uNTMxMjUtOS4xOTUzMTMtNC42OTUzMTItMTcuNzk2ODc1LTExLjU3MDMxMi0yMy45MjE4NzVsLTEyLjk1NzAzMi0xMS41MzkwNjMtNjQuODA4NTk0LTU3LjcxODc1Yy0xLjcxODc1LTEuNTMxMjUtMy45NzY1NjItMi4zMTY0MDYtNi4yNzM0MzctMi4xODM1OTMtMi4yOTY4NzUuMTM2NzE4LTQuNDQ5MjE5IDEuMTc1NzgxLTUuOTc2NTYzIDIuODk0NTMxbC0yMy4wODU5MzcgMjUuOTIxODc1Yy0xLjUzMTI1IDEuNzE4NzUtMi4zMTY0MDYgMy45NzY1NjItMi4xODM1OTQgNi4yNzM0MzcuMTM2NzE5IDIuMjk2ODc1IDEuMTc1NzgxIDQuNDQ5MjE5IDIuODk0NTMxIDUuOTgwNDY5bDU4LjMyNDIxOSA1MS45Mzc1YzEuNzE4NzUgMS41MzEyNSAyLjc1NzgxMyAzLjY4MzU5NCAyLjg5MDYyNSA1Ljk4MDQ2OS4xMzI4MTMgMi4yOTY4NzUtLjY1MjM0NCA0LjU1NDY4Ny0yLjE4NzUgNi4yNzM0Mzd6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzNS42NTYyNSAxMjEuMjY1NjI1YzI4LjYyODkwNiAyNS41MDM5MDYgNzIuNTExNzE5IDIyLjk2NDg0NCA5OC4wMTU2MjUtNS42Njc5NjkgMjUuNS0yOC42Mjg5MDYgMjIuOTY0ODQ0LTcyLjUxMTcxOC01LjY2Nzk2OS05OC4wMTU2MjUtMjguNjI4OTA2LTI1LjUtNzIuNTE1NjI1LTIyLjk2NDg0My05OC4wMTU2MjUgNS42Njc5NjktMTIuMjQ2MDkzIDEzLjc1LTE4LjUzMTI1IDMxLjgwMDc4MS0xNy40Njg3NSA1MC4xODM1OTQgMS4wNjI1IDE4LjM3ODkwNiA5LjM4NjcxOSAzNS41ODU5MzcgMjMuMTM2NzE5IDQ3LjgzMjAzMXptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtOC42Nzk2ODggMjM0LjMwNDY4OGg2OS40MjE4NzRjNC43OTI5NjkgMCA4LjY3OTY4OC0zLjg4MjgxMyA4LjY3OTY4OC04LjY3NTc4MiAwLTQuNzkyOTY4LTMuODg2NzE5LTguNjc5Njg3LTguNjc5Njg4LTguNjc5Njg3aC02OS40MjE4NzRjLTQuNzkyOTY5IDAtOC42Nzk2ODggMy44ODY3MTktOC42Nzk2ODggOC42Nzk2ODcgMCA0Ljc5Mjk2OSAzLjg4NjcxOSA4LjY3NTc4MiA4LjY3OTY4OCA4LjY3NTc4MnptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzQuNzEwOTM4IDI2MC4zMzk4NDRjMCA0Ljc5Mjk2OCAzLjg4NjcxOCA4LjY3OTY4NyA4LjY3OTY4NyA4LjY3OTY4N2g2OS40MjE4NzVjNC43OTI5NjkgMCA4LjY3OTY4OC0zLjg4NjcxOSA4LjY3OTY4OC04LjY3OTY4NyAwLTQuNzkyOTY5LTMuODg2NzE5LTguNjc5Njg4LTguNjc5Njg4LTguNjc5Njg4aC02OS40MjE4NzVjLTQuNzkyOTY5IDAtOC42Nzk2ODcgMy44ODY3MTktOC42Nzk2ODcgOC42Nzk2ODh6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
            />
            <img
              className="interet"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0zMzAuNjY3LDEyMi42NjdjMjMuNDY3LDAsNDIuNjY3LTE5LjIsNDIuNjY3LTQyLjY2N3MtMTkuMi00Mi42NjctNDIuNjY3LTQyLjY2N1MyODgsNTYuNTMzLDI4OCw4MCAgICAgUzMwNy4yLDEyMi42NjcsMzMwLjY2NywxMjIuNjY3eiIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMTA2LjY2NywyNjEuMzMzQzQ4LDI2MS4zMzMsMCwzMDkuMzMzLDAsMzY4czQ4LDEwNi42NjcsMTA2LjY2NywxMDYuNjY3YzU4LjY2NywwLDEwNi42NjctNDgsMTA2LjY2Ny0xMDYuNjY3ICAgICBTMTY1LjMzMywyNjEuMzMzLDEwNi42NjcsMjYxLjMzM3ogTTEwNi42NjcsNDQyLjY2N0M2NS4wNjcsNDQyLjY2NywzMiw0MDkuNiwzMiwzNjhzMzMuMDY3LTc0LjY2Nyw3NC42NjctNzQuNjY3ICAgICBjNDEuNiwwLDc0LjY2NywzMy4wNjcsNzQuNjY3LDc0LjY2N1MxNDguMjY3LDQ0Mi42NjcsMTA2LjY2Nyw0NDIuNjY3eiIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNNDA0LjI2NywyMzguOTMzdi00Mi42NjdjLTMyLDAtNTguNjY3LTExLjczMy03Ny44NjctMzAuOTMzTDI4NC44LDEyNC44Yy02LjQtNy40NjctMTcuMDY3LTEyLjgtMjguOC0xMi44ICAgICBzLTIyLjQsNC4yNjctMjkuODY3LDEyLjhsLTU4LjY2Nyw1OC42NjdjLTcuNDY3LDcuNDY3LTEyLjgsMTguMTMzLTEyLjgsMjkuODY3czUuMzMzLDIyLjQsMTIuOCwzMC45MzNsNjcuMiw1OS43MzN2MTA2LjY2NyAgICAgaDQyLjY2N1YyNzcuMzMzTDIzMC40LDIzMC40bDUwLjEzMy01MS4ybDE2LDE2QzMyMy4yLDIyMi45MzMsMzYwLjUzMywyMzguOTMzLDQwNC4yNjcsMjM4LjkzM3oiIGZpbGw9IiNmOGNlYzEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTQwNS4zMzMsMjYxLjMzM2MtNTguNjY3LDAtMTA2LjY2Nyw0OC0xMDYuNjY3LDEwNi42NjdzNDgsMTA2LjY2NywxMDYuNjY3LDEwNi42NjdDNDY0LDQ3NC42NjcsNTEyLDQyNi42NjcsNTEyLDM2OCAgICAgUzQ2NCwyNjEuMzMzLDQwNS4zMzMsMjYxLjMzM3ogTTQwNS4zMzMsNDQyLjY2N2MtNDEuNiwwLTc0LjY2Ny0zMy4wNjctNzQuNjY3LTc0LjY2N3MzMy4wNjctNzQuNjY3LDc0LjY2Ny03NC42NjcgICAgIEM0NDYuOTMzLDI5My4zMzMsNDgwLDMyNi40LDQ4MCwzNjhTNDQ2LjkzMyw0NDIuNjY3LDQwNS4zMzMsNDQyLjY2N3oiIGZpbGw9IiNmOGNlYzEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            />
            <img
              className="interet"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS44NTEgNTExLjg1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTc4Ljc1IDM2Mi43MDdjNi40NDkgNC40MiA4LjYyMiA1LjkwOSAxNS44MTggNS45MDkgNy4xOTUgMCA5LjM2Ny0xLjQ4OSAxNS44MTYtNS45MDkgOC43ODItNi4wMTkgMjIuMDU0LTE1LjExNiA0NS41MzQtMTUuMTE2IDIzLjQ4MSAwIDM2Ljc1MiA5LjA5NiA0NS41MzUgMTUuMTE2IDYuNDQ5IDQuNDIgOC42MjIgNS45MDkgMTUuODE4IDUuOTA5IDcuMTk3IDAgOS4zNy0xLjQ4OSAxNS44MTktNS45MSA2LjU3OS00LjUwOSAxNS42NzgtMTAuNzQ1IDI5LjcwMS0xMy41OWwtNDEuMjE5LTc2LjE3NCAzNC40OTItOTQuMzA1IDg3LjQyNi03NS4wMTdjMTEuODUzLTEwLjE3MSAxMy4yMTctMjguMDI1IDMuMDQ2LTM5Ljg3OC0xMC4xNzItMTEuODUzLTI4LjAyNS0xMy4yMTctMzkuODc4LTMuMDQ2bC05My4wMzIgNzkuODI4Yy0zLjY3NSAzLjE1NC02LjQ4IDcuMi04LjE0MyAxMS43NDhsLTQyLjIxMiAxMTUuNDA4LS4yMTQuNjM1LTE1MS42NyA4Mi4zYzYuMTEyLTEuODE5IDEzLjI5My0zLjAyNCAyMS44MjktMy4wMjQgMjMuNDggMCAzNi43NTIgOS4wOTcgNDUuNTM0IDE1LjExNnoiIGZpbGw9IiNmOGNlYzEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48ZWxsaXBzZSBjeD0iNDA0Ljc1NSIgY3k9IjI2Mi42MjMiIHJ4PSI1Ni44NzUiIHJ5PSI1Ni44NzUiIHRyYW5zZm9ybT0ibWF0cml4KC45OTQgLS4xMTIgLjExMiAuOTk0IC0yNi44MDMgNDYuODU2KSIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9lbGxpcHNlPjxwYXRoIGQ9Im0zNS4yNDQgMzkzLjA1N2M4LjAzIDUuNTA0IDE4LjAyNSAxMi4zNTQgMzYuNjE5IDEyLjM1NCAxOC41OTUgMCAyOC41ODktNi44NSAzNi42MTktMTIuMzU0IDcuMDY5LTQuODQ1IDEyLjY1Mi04LjY3MSAyNC43MzQtOC42NzEgMTIuMDgxIDAgMTcuNjY0IDMuODI2IDI0LjczMiA4LjY3MSA4LjAzMSA1LjUwNCAxOC4wMjUgMTIuMzU0IDM2LjYyIDEyLjM1NCAxOC41OTQgMCAyOC41ODgtNi44NSAzNi42MTgtMTIuMzU0IDcuMDY4LTQuODQ1IDEyLjY1MS04LjY3MSAyNC43MzItOC42NzFzMTcuNjY0IDMuODI3IDI0LjczMyA4LjY3MWM4LjAzIDUuNTA0IDE4LjAyNSAxMi4zNTQgMzYuNjE5IDEyLjM1NCAxOC41OTUgMCAyOC41OS02Ljg1IDM2LjYyLTEyLjM1NCA3LjA2OS00Ljg0NSAxMi42NTItOC42NzEgMjQuNzM0LTguNjcxIDEyLjA4MyAwIDE3LjY2NiAzLjgyNyAyNC43MzYgOC42NzIgOC4wMzEgNS41MDQgMTguMDI2IDEyLjM1MyAzNi42MjIgMTIuMzUzczI4LjU5MS02Ljg1IDM2LjYyMS0xMi4zNTNjNy4wNjktNC44NDUgMTIuNjUzLTguNjcyIDI0LjczNi04LjY3MiA1LjgwNiAwIDEwLjUxMy00LjcwNyAxMC41MTMtMTAuNTEzcy00LjcwNy0xMC41MTMtMTAuNTEzLTEwLjUxM2MtMTguNTk2IDAtMjguNTkxIDYuODUtMzYuNjIyIDEyLjM1My03LjA2OSA0Ljg0NS0xMi42NTMgOC42NzItMjQuNzM1IDguNjcyLTEyLjA4MyAwLTE3LjY2Ni0zLjgyNy0yNC43MzYtOC42NzItOC4wMzEtNS41MDQtMTguMDI2LTEyLjM1My0zNi42MjItMTIuMzUzLTE4LjU5NSAwLTI4LjU5IDYuODUtMzYuNjIgMTIuMzUzLTcuMDY5IDQuODQ1LTEyLjY1MiA4LjY3Mi0yNC43MzQgOC42NzItMTIuMDgxIDAtMTcuNjY0LTMuODI3LTI0LjczMy04LjY3MS04LjAzLTUuNTA0LTE4LjAyNS0xMi4zNTQtMzYuNjE5LTEyLjM1NHMtMjguNTg5IDYuODUtMzYuNjE5IDEyLjM1NGMtNy4wNjggNC44NDUtMTIuNjUxIDguNjcxLTI0LjczMSA4LjY3MS0xMi4wODEgMC0xNy42NjQtMy44MjctMjQuNzMzLTguNjcxLTguMDMtNS41MDQtMTguMDI0LTEyLjM1NC0zNi42MTktMTIuMzU0cy0yOC41OSA2Ljg1LTM2LjYyIDEyLjM1NGMtNy4wNjkgNC44NDUtMTIuNjUyIDguNjcxLTI0LjczMyA4LjY3MXMtMTcuNjY0LTMuODI2LTI0LjczMS04LjY3MWMtOC4wMy01LjUwNC0xOC4wMjUtMTIuMzU0LTM2LjYxOS0xMi4zNTQtNS44MDYgMC0xMC41MTMgNC43MDctMTAuNTEzIDEwLjUxM3M0LjcwNyAxMC41MTMgMTAuNTEzIDEwLjUxM2MxMi4wODEtLjAwMSAxNy42NjMgMy44MjYgMjQuNzMxIDguNjcxeiIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNTMuODkgNDQ1LjYyYy04LjAzIDUuNTA0LTE4LjAyNSAxMi4zNTQtMzYuNjIgMTIuMzU0cy0yOC41ODktNi44NS0zNi42MTktMTIuMzU0Yy03LjA2OS00Ljg0NS0xMi42NTItOC42NzEtMjQuNzMzLTguNjcxcy0xNy42NjQgMy44MjYtMjQuNzMyIDguNjcxYy04LjAzIDUuNTA0LTE4LjAyNCAxMi4zNTQtMzYuNjE4IDEyLjM1NC0xOC41OTUgMC0yOC41ODktNi44NS0zNi42Mi0xMi4zNTQtNy4wNjgtNC44NDUtMTIuNjUxLTguNjcxLTI0LjczMi04LjY3MXMtMTcuNjY1IDMuODI3LTI0LjczNCA4LjY3MWMtOC4wMyA1LjUwNC0xOC4wMjUgMTIuMzU0LTM2LjYxOSAxMi4zNTQtMzMuOTI5IDAtMzUuNzAyLTIxLjAyNS02MS4zNS0yMS4wMjUtNS44MDYgMC0xMC41MTMtNC43MDctMTAuNTEzLTEwLjUxM3M0LjcwNy0xMC41MTMgMTAuNTEzLTEwLjUxM2MzMy45MjkgMCAzNS43MDIgMjEuMDI1IDYxLjM1IDIxLjAyNSAyNS4wOTggMCAyNy44MzctMjEuMDI1IDYxLjM1My0yMS4wMjUgMTguNTk1IDAgMjguNTg5IDYuODUgMzYuNjE5IDEyLjM1NCA3LjA2OSA0Ljg0NSAxMi42NTIgOC42NzEgMjQuNzMzIDguNjcxIDEyLjA4IDAgMTcuNjYzLTMuODI2IDI0LjczMS04LjY3MSA4LjAzLTUuNTA0IDE4LjAyNC0xMi4zNTQgMzYuNjE5LTEyLjM1NHMyOC41ODkgNi44NSAzNi42MTkgMTIuMzU0YzcuMDY5IDQuODQ1IDEyLjY1MiA4LjY3MSAyNC43MzMgOC42NzEgMTIuMDgyIDAgMTcuNjY1LTMuODI3IDI0LjczNC04LjY3MiA4LjAzLTUuNTA0IDE4LjAyNS0xMi4zNTMgMzYuNjItMTIuMzUzIDE4LjU5NiAwIDI4LjU5MSA2Ljg1IDM2LjYyMiAxMi4zNTMgNy4wNjkgNC44NDUgMTIuNjUzIDguNjcyIDI0LjczNiA4LjY3MiAxMi4wODIgMCAxNy42NjYtMy44MjcgMjQuNzM1LTguNjcyIDguMDMxLTUuNTA0IDE4LjAyNi0xMi4zNTMgMzYuNjIyLTEyLjM1MyA1LjgwNiAwIDEwLjUxMyA0LjcwNyAxMC41MTMgMTAuNTEzcy00LjcwNyAxMC41MTMtMTAuNTEzIDEwLjUxM2MtMTIuMDgzIDAtMTcuNjY2IDMuODI3LTI0LjczNiA4LjY3Mi04LjAzMSA1LjUwNC0xOC4wMjYgMTIuMzUzLTM2LjYyMSAxMi4zNTMtMTguNTk2IDAtMjguNTkxLTYuODUtMzYuNjIyLTEyLjM1My03LjA2OS00Ljg0NS0xMi42NTMtOC42NzItMjQuNzM2LTguNjcyLTEyLjA4MSAwLTE3LjY2NSAzLjgyNy0yNC43MzQgOC42NzF6IiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQwMy4zNTkgNDQ1LjYyMWM4LjAzMSA1LjUwNCAxOC4wMjYgMTIuMzUzIDM2LjYyMiAxMi4zNTNzMjguNTkxLTYuODUgMzYuNjIxLTEyLjM1M2M3LjA2OS00Ljg0NSAxMi42NTMtOC42NzIgMjQuNzM2LTguNjcyIDUuODA2IDAgMTAuNTEzLTQuNzA3IDEwLjUxMy0xMC41MTNzLTQuNzA3LTEwLjUxMy0xMC41MTMtMTAuNTEzYy0xOC41OTYgMC0yOC41OTEgNi44NS0zNi42MjIgMTIuMzUzLTcuMDY5IDQuODQ1LTEyLjY1MyA4LjY3Mi0yNC43MzUgOC42NzItMTIuMDgzIDAtMTcuNjY2LTMuODI3LTI0LjczNi04LjY3Mi04LjAzMS01LjUwNC0xOC4wMjYtMTIuMzUzLTM2LjYyMi0xMi4zNTMtMTguNTk1IDAtMjguNTkgNi44NS0zNi42MiAxMi4zNTMtNy4wNjkgNC44NDUtMTIuNjUyIDguNjcyLTI0LjczNCA4LjY3Mi0xMi4wODEgMC0xNy42NjQtMy44MjctMjQuNzMzLTguNjcxLTguMDMtNS41MDQtMTguMDI1LTEyLjM1NC0zNi42MTktMTIuMzU0cy0yOC41ODkgNi44NS0zNi42MTkgMTIuMzU0Yy03LjA2OCA0Ljg0NS0xMi42NTEgOC42NzEtMjQuNzMxIDguNjcxLTEyLjA4MSAwLTE3LjY2NC0zLjgyNy0yNC43MzMtOC42NzEtOC4wMy01LjUwNC0xOC4wMjQtMTIuMzU0LTM2LjYxOS0xMi4zNTQtMzMuOTMxIDAtMzUuNzA0IDIxLjAyNS02MS4zNTMgMjEuMDI1LTEyLjA4MSAwLTE3LjY2NC0zLjgyNi0yNC43MzEtOC42NzEtOC4wMy01LjUwNC0xOC4wMjUtMTIuMzU0LTM2LjYxOS0xMi4zNTQtNS44MDUuMDAxLTEwLjUxMiA0LjcwNy0xMC41MTIgMTAuNTEzczQuNzA3IDEwLjUxMyAxMC41MTMgMTAuNTEzYzI1LjA5NyAwIDI3LjgzNiAyMS4wMjUgNjEuMzUgMjEuMDI1IDE4LjU5NSAwIDI4LjU4OS02Ljg1IDM2LjYxOS0xMi4zNTQgNy4wNjktNC44NDUgMTIuNjUyLTguNjcxIDI0LjczNC04LjY3MSAxMi4wODEgMCAxNy42NjQgMy44MjYgMjQuNzMyIDguNjcxIDguMDMxIDUuNTA0IDE4LjAyNSAxMi4zNTQgMzYuNjIgMTIuMzU0IDE4LjU5NCAwIDI4LjU4OC02Ljg1IDM2LjYxOC0xMi4zNTQgNy4wNjgtNC44NDUgMTIuNjUxLTguNjcxIDI0LjczMi04LjY3MXMxNy42NjQgMy44MjcgMjQuNzMzIDguNjcxYzguMDMgNS41MDQgMTguMDI1IDEyLjM1NCAzNi42MTkgMTIuMzU0IDE4LjU5NSAwIDI4LjU5LTYuODUgMzYuNjItMTIuMzU0IDcuMDY5LTQuODQ1IDEyLjY1Mi04LjY3MSAyNC43MzQtOC42NzEgMTIuMDgzIDAgMTcuNjY2IDMuODI3IDI0LjczNSA4LjY3MnoiIGZpbGw9IiNmOGNlYzEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
            />
            <img
              className="interet"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5Ny41MzUsMTQuNDY1Yy0xOS41NjktMTkuNTY4LTUxLjM5NS0xOS4yNDEtNzAuNTU3LDAuNzI2TDMyMi4wOTIsMTI0LjQ4OEw2Ni4xMzEsMzkuNzgxTDEyLjQsOTMuNTEzbDIxMy4zNTIsMTMxLjM2NSAgICBMMTE3Ljc5NiwzMzcuMzcybC02OS4yMzEtMTEuMzY2TDAsMzc0LjU3MWwxMDEuNzgsMzUuNjQ5TDEzNy40MjksNTEybDQ4LjU2NS00OC41NjVsLTExLjM2Ni02OS4yMzFsMTEyLjQ5NC0xMDcuOTU1ICAgIEw0MTguNDg3LDQ5OS42bDUzLjczMi01My43MzJsLTg0LjcwNi0yNTUuOTYxTDQ5Ni44MDgsODUuMDIyQzUxNi43NzYsNjUuODYsNTE3LjEwMywzNC4wMzQsNDk3LjUzNSwxNC40NjV6IiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            />
            <img
              className="interet"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMwOS4yODUxNTYgMzI4LjQ5MjE4OGgtNzUuNDA2MjV2MTgzLjUwNzgxMmg0OS41NTg1OTR6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQzOC4wMzUxNTYgMjY1LjkzNzVjMC0xNy45NTMxMjUtMTQuNjA1NDY4LTMyLjU1ODU5NC0zMi41NTg1OTQtMzIuNTU4NTk0aC0xNS4zMTI1bC0yLjQ2MDkzNy0xMS45ODQzNzVjLTE2LjMzNTkzNy03OS42MTMyODEtODcuMjc3MzQ0LTEzNy4zOTQ1MzEtMTY4LjY4NzUtMTM3LjM5NDUzMS03NS4xMjg5MDYgMC0xNDEuMzQzNzUgNDkuMjE0ODQ0LTE2My45NDkyMTkgMTE5LjM3ODkwNmgyNDkuNDEwMTU2djMwaC0yNzEuOTE3OTY4Yy0xNy45NTMxMjUgMC0zMi41NTg1OTQgMTQuNjA1NDY5LTMyLjU1ODU5NCAzMi41NTg1OTRzMTQuNjA1NDY5IDMyLjU1ODU5NCAzMi41NTg1OTQgMzIuNTU4NTk0aDM3Mi45MTc5NjhjMTcuOTUzMTI2LS4wMDM5MDYgMzIuNTU4NTk0LTE0LjYwNTQ2OSAzMi41NTg1OTQtMzIuNTU4NTk0em0tMjcwLjY4NzUtODYuNzM0Mzc1aC0zMC42Njc5Njh2LTMwLjY2Nzk2OWgzMC42Njc5Njh6bTY2Ljg2NzE4OC0zNi4zNzEwOTRoLTMwLjY2Nzk2OXYtMzAuNjY3OTY5aDMwLjY2Nzk2OXptNjYuODYzMjgxIDM2LjM3MTA5NGgtMzAuNjY3OTY5di0zMC42Njc5NjloMzAuNjY3OTY5em01NiA1NC41MDc4MTNoLTMwLjY2Nzk2OXYtMzAuNjY0MDYzaDMwLjY2Nzk2OXptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTU0LjMyMDMxMiA1MTJoNDkuNTU4NTk0di0xODMuNTA3ODEyaC03NS40MDYyNXptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtOTguMTc1NzgxIDMyOC40OTIxODhoLTY1LjYxNzE4N2MtNS4zODY3MTkgMC0xMC42MTMyODItLjY4MzU5NC0xNS42MDU0NjktMS45Njg3NWw1My4xMTcxODcgMTg1LjQ3NjU2Mmg1My45NTMxMjZ6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQwNS40NzY1NjIgMzI4LjQ5MjE4OGgtNjUuODk0NTMxbC0yNS44NDc2NTYgMTgzLjUwNzgxMmg1My45NTMxMjVsNTMuMDk3NjU2LTE4NS40MDYyNWMtNC45MDIzNDQgMS4yMzQzNzUtMTAuMDI3MzQ0IDEuODk4NDM4LTE1LjMwODU5NCAxLjg5ODQzOHptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjE5LjAxNTYyNSA1NGMxOS41MTk1MzEgMCAzOC44MzIwMzEgMi44NTU0NjkgNTcuMzM1OTM3IDguMzI4MTI1LjEyNS0xLjUzOTA2My4xOTUzMTMtMy4wODk4NDQuMTk1MzEzLTQuNjYwMTU2IDAtMzEuODAwNzgxLTI1Ljg3MTA5NC01Ny42Njc5NjktNTcuNjY3OTY5LTU3LjY2Nzk2OXMtNTcuNjY3OTY4IDI1Ljg2NzE4OC01Ny42Njc5NjggNTcuNjY3OTY5YzAgMS41OTc2NTYuMDc0MjE4IDMuMTc1NzgxLjE5OTIxOCA0Ljc0MjE4NyAxOC41ODU5MzgtNS41MjczNDQgMzcuOTkyMTg4LTguNDEwMTU2IDU3LjYwNTQ2OS04LjQxMDE1NnptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            />
          </div>
        </div>
        <div className="contactButtonSection">
          <button className="button" onClick={() => setPage("contact")}>
            <h5>Me Contacter</h5>
            <img
              className="arrowRight"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAyIDUxMi4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzg4LjQyNSwyNDEuOTUxTDE1MS42MDksNS43OWMtNy43NTktNy43MzMtMjAuMzIxLTcuNzItMjguMDY3LDAuMDRjLTcuNzQsNy43NTktNy43MiwyMC4zMjgsMC4wNCwyOC4wNjdsMjIyLjcyLDIyMi4xMDUNCgkJCUwxMjMuNTc0LDQ3OC4xMDZjLTcuNzU5LDcuNzQtNy43NzksMjAuMzAxLTAuMDQsMjguMDYxYzMuODgzLDMuODksOC45Nyw1LjgzNSwxNC4wNTcsNS44MzVjNS4wNzQsMCwxMC4xNDEtMS45MzIsMTQuMDE3LTUuNzk1DQoJCQlsMjM2LjgxNy0yMzYuMTU1YzMuNzM3LTMuNzE4LDUuODM0LTguNzc4LDUuODM0LTE0LjA1UzM5Mi4xNTYsMjQ1LjY3NiwzODguNDI1LDI0MS45NTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
