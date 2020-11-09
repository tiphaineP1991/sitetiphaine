import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const response = await axios.post("http://localhost:4000/form/create", {
        name: name,
        mail: mail,
        message: message,
      });
      alert("Votre message a bien été envoyé ! Merci !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="contactBox">
        <h4>
          Vous souhaitez discuter d'un projet, ou simplement avez une question ?
        </h4>
        <p>N'hésitez pas à me contacter !</p>
        <br />
        <div className="doubleColumns">
          <div style={{ paddingTop: 50 }}>
            <div className="contactDetail">
              <img
                className="icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMxNC4zNzUgMTQ0aC0xODAuNzVsOTAuMzc1IDc3LjQ2NDg0NHptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjI0IDI0MGMtMS45MTAxNTYgMC0zLjc1NzgxMi0uNjgzNTk0LTUuMjA3MDMxLTEuOTI5Njg4bC05OC43OTI5NjktODQuNjc5Njg3djE1MC42MDkzNzVoMjA4di0xNTAuNjA5Mzc1bC05OC43OTI5NjkgODQuNjc5Njg3Yy0xLjQ0OTIxOSAxLjI0NjA5NC0zLjI5Njg3NSAxLjkyOTY4OC01LjIwNzAzMSAxLjkyOTY4OHptMCAwIiBmaWxsPSIjZjhjZWMxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjI0IDBjLTEyMy43MTA5MzggMC0yMjQgMTAwLjI4OTA2Mi0yMjQgMjI0czEwMC4yODkwNjIgMjI0IDIyNCAyMjQgMjI0LTEwMC4yODkwNjIgMjI0LTIyNGMtLjE0MDYyNS0xMjMuNjUyMzQ0LTEwMC4zNDc2NTYtMjIzLjg1OTM3NS0yMjQtMjI0em0xMjAgMzEyYzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTIyNGMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHYtMTc2YzAtNC40MTc5NjkgMy41ODIwMzEtOCA4LThoMjI0YzQuNDE3OTY5IDAgOCAzLjU4MjAzMSA4IDh6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              />
              <p>
                <a href="mailto:tiphaine.pellet@essec.edu">
                  tiphaine.pellet@essec.edu
                </a>
              </p>
            </div>
            <div className="contactDetail">
              <img
                className="icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzYzMjgxIDAtMjU2IDExNC42MzY3MTktMjU2IDI1NnMxMTQuNjM2NzE5IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjM2NzE5IDI1Ni0yNTYtMTE0LjYzNjcxOS0yNTYtMjU2LTI1NnptLTc0LjM5MDYyNSAzODdoLTYyLjM0NzY1NnYtMTg3LjU3NDIxOWg2Mi4zNDc2NTZ6bS0zMS4xNzE4NzUtMjEzLjE4NzVoLS40MDYyNWMtMjAuOTIxODc1IDAtMzQuNDUzMTI1LTE0LjQwMjM0NC0zNC40NTMxMjUtMzIuNDAyMzQ0IDAtMTguNDA2MjUgMTMuOTQ1MzEzLTMyLjQxMDE1NiAzNS4yNzM0MzctMzIuNDEwMTU2IDIxLjMyODEyNiAwIDM0LjQ1MzEyNiAxNC4wMDM5MDYgMzQuODU5Mzc2IDMyLjQxMDE1NiAwIDE4LTEzLjUzMTI1IDMyLjQwMjM0NC0zNS4yNzM0MzggMzIuNDAyMzQ0em0yNTUuOTg0Mzc1IDIxMy4xODc1aC02Mi4zMzk4NDR2LTEwMC4zNDc2NTZjMC0yNS4yMTg3NS05LjAyNzM0My00Mi40MTc5NjktMzEuNTg1OTM3LTQyLjQxNzk2OS0xNy4yMjI2NTYgMC0yNy40ODA0NjkgMTEuNjAxNTYzLTMxLjk4ODI4MiAyMi44MDA3ODEtMS42NDg0MzcgNC4wMDc4MTMtMi4wNTA3ODEgOS42MDkzNzUtMi4wNTA3ODEgMTUuMjE0ODQ0djEwNC43NWgtNjIuMzQzNzVzLjgxNjQwNy0xNjkuOTc2NTYyIDAtMTg3LjU3NDIxOWg2Mi4zNDM3NXYyNi41NTg1OTRjOC4yODUxNTctMTIuNzgxMjUgMjMuMTA5Mzc1LTMwLjk2MDkzNyA1Ni4xODc1LTMwLjk2MDkzNyA0MS4wMTk1MzEgMCA3MS43NzczNDQgMjYuODA4NTkzIDcxLjc3NzM0NCA4NC40MjE4NzR6bTAgMCIgZmlsbD0iI2Y4Y2VjMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              />
              <p>
                <a href="https://www.linkedin.com/in/tiphaine-pellet-54316078/">
                  Tiphaine Pellet
                </a>
              </p>
            </div>
            <div className="contactDetail">
              <img
                className="icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzE0OC40OCwwLDYxLDg3LjQ4LDYxLDE5NWMwLDQyLjU1LDEzLjQ0LDgyLjk4LDM4LjksMTE2LjlsMTQ0LjA4LDE5NC4wNTFjMC4zNiwwLjQ3LDAuOTEsMC42NSwxLjMxLDEuMDcgICAgYzcuMiw3LjcxLDE3LjU5LDUuNzcsMjIuNzItMS4wN0MzMDkuNSw0NTAuNTkxLDM4NS41NSwzNDcuMiw0MTQuNzksMzA4LjJjMCwwLDAuMDEtMC4wMywwLjAyLTAuMDVsMC4xOC0wLjI0ICAgIEM0MzguNTUsMjc0LjgxLDQ1MSwyMzUuNzcsNDUxLDE5NUM0NTEsODcuNDgsMzYzLjUyLDAsMjU2LDB6IE0yNTYsMzAwLjJjLTU3Ljg5LDAtMTA1LjItNDcuMzEtMTA1LjItMTA1LjJTMTk4LjExLDg5LjgsMjU2LDg5LjggICAgUzM2MS4yLDEzNy4xMSwzNjEuMiwxOTVTMzEzLjg5LDMwMC4yLDI1NiwzMDAuMnoiIGZpbGw9IiNmOGNlYzEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
              />
              <p>141 rue Lamarck - 75018 Paris</p>
            </div>
          </div>
          <div>
            <form className="form" onSubmit={(event) => sendMessage()}>
              <p>Formulaire de contact</p>
              <input
                type="name"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="mail"
                placeholder="Votre email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              ></input>
              <input
                type="message"
                className="inputMessage"
                placeholder="Votre message ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
              <input
                type="submit"
                value="Envoyer"
                className="inputValider"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
