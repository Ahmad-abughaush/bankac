
import Form from "./component/form";


function App() {
  return (
    <>
      <header className="hide-when-mobile">
        <h1> ahmad`s web</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="www">
              home
            </a>

          </li>
          <li className="main-list">
            <a className="main-link" href="#">
              Account
            </a>

          </li>


          <li className="main-list">
            <a className="main-link" href="#">
              more
            </a>

          </li>
        </ul>
      </header>



      <header style={{ backgroundColor: "red" }} className="show-when-mobile">
        <h1>ahmad`s web</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              home <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">


            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              account <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              more <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>




      <main>

        <div >


        </div>
      </main>




      <footer>
        Designed and developed by ahmad abughaush
        <span>🧡</span>
      </footer>
    </>
  );
}

export default App;
