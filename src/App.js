import './App.css';
import useGoogleSheets from 'use-google-sheets';


function App() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    sheetsOptions: [{ id: 'ИВБО-03-18' }, { id: 'ИВБО-10-18'}],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY, process.env.REACT_APP_GOOGLE_SHEETS_ID)
    return <div>Error!</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <code>{JSON.stringify(data)}</code>
      </header>
    </div>
  );
}

export default App;
