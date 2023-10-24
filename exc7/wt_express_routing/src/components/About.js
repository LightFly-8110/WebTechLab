// AboutPage.js
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>This page provides information about us.</p>
      {data && <div>Data from server: {JSON.stringify(data)}</div>}
    </div>
  );
};

export default AboutPage;

