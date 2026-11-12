
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState<string>('Connecting...');

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data: { status: string }) => {
        setStatus(data.status);
      })
      .catch(() => {
        setStatus('Connection failed');
      });
  }, []);

  return (
    <main>
      <h1>Wonder</h1>
      <p>Backend connection: {status}</p>
    </main>
  );
}

export default App;
