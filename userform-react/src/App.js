import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form autocomplete="off" method="post">
        <fieldset>
          <legend>UserForm</legend>
          <label htmlFor="" type="text">
            Name:
            <input />
          </label>
          <br />
          <label htmlFor="" type="email">
            Email:
            <input />
          </label>
          <br />
          <label>
            phone number:
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" />
          </label>
          <br />
          <label htmlFor="">
            Age:
            <input type="number" min="18" max="125" />
          </label>
          <br />
          <label>
            Birthdate:
            <input type="date" name="" />
          </label>
          <br />
          <label>
            Select a file:
            <input type="file" name="myfile" />
          </label>
          <br />
          <label htmlFor="">
            Comment:
            <textarea type="textarea" />
          </label>
          <br />
          <input type="range" />
          <br />
          <label>
            Search Google:
            <input type="search" name="gsearch" />
          </label>
          <br />
          <label>
            Skills:
            <label htmlFor="html">
              HTML{" "}
              <input type="radio" id="html" name="fav_language" value="HTML" />
            </label>
            <br />
            <label>
              CSS
              <input type="radio" id="css" name="fav_language" value="CSS" />
            </label>
            <br />
            <label htmlFor="javascript">
              JavaScript
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
            </label>
          </label>
          <br />
          <label>
            favourite Color:
            <input type="color" />
          </label>
          <br />
          <input type="submit" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
