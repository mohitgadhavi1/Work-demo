import "./App.css";

const formStorage = async function (e) {
  e.preventDefault();
  console.log(e.target);
  const res = await fetch("/", {
    method: "post",
    body: JSON.stringify({ data: "some Information" }),
    headers: { "content-type": "application-json" },
  });
  const cl = await res.json();
  console.log(cl);
};

function App() {
  return (
    <div className="App">
      <form method="post">
        <fieldset>
          <legend>UserForm</legend>
          <label htmlFor="name" type="text">
            Name:
            <input name="name" />
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

          <input type="submit" onClick={formStorage} />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
