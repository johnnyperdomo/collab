import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/just-html/index.html">Go back to main page.</a>
              </li>
              <li>
                <a href="/just-html/quiz/index.html">Go back to quizes page.</a>
              </li>
            </ul>
          </nav>
        </header>
        <h1>What is 3 - 2?</h1>
        <ol>
          <li>
            <a href="0/index.html">-1</a>
          </li>
          <li>
            <a href="1/index.html">5</a>
          </li>
          <li>
            <a href="2/index.html">1</a>
          </li>
          <li>
            <a href="3/index.html">1.5</a>
          </li>
        </ol>
        <details>
          <summary>
            Quiz Progress: <progress value="1" max="4"></progress>
          </summary>
          <ul>
            <li>1 out of 4 questions answered.</li>
            <li>1 out of 4 questions answered correctly.</li>
          </ul>
        </details>
        <hr/>
        <div>
          <h1 className="red-letters">Creating clean design is very complicated. Attempt to add good styline to this project.</h1>
        </div>
      </>
    </div>
  );
}

export default App;