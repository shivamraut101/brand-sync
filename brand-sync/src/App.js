import React, { useState, useEffect } from 'react';
import { fetchInstagramData } from './api';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchInstagramData();
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Influencer Marketing App</h1>
      {error && <p>Error: {error.message}</p>}
      {data ? (
        <div>
          <h2>Instagram Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
