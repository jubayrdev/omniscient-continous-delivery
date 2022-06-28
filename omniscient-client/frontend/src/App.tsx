import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api/master")
      .then((res) => {
        return res.json();
      })
      .then((data) => setMessage(data.message));
  }, []);
  return <h1>Omniscient CD {message}</h1>;
}

export default App;
