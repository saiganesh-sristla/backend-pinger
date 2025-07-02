import { useEffect } from 'react';
import axios from 'axios';

const urls = [
  'https://eventhub-backend-krle.onrender.com/',
  'https://certichain-e6kz.onrender.com/',
  'https://backend-ruby-five-72.vercel.app/',
  'https://prescription-backend-9lkm.onrender.com/',
  'https://leadflow-backend-ercn.onrender.com/',
  'https://crm-backend-lwxu.onrender.com/api/companies'
  // Add all your backend URLs here
];

function App() {
  useEffect(() => {
    const pingBackends = () => {
      urls.forEach(url => {
        axios.get(url)
          .then(() => console.log(`Pinged ${url}`))
          .catch(err => console.error(`Failed to ping ${url}`, err));
      });
    };

    pingBackends(); // Initial ping
    const interval = setInterval(pingBackends, 1000 * 60 * 13); // every 13 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Render Pinger</h1>
      <p>This app keeps your backends alive 🌐</p>
    </div>
  );
}

export default App;
