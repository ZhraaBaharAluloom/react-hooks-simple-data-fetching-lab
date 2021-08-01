// create your App component here
import React, { useEffect, useState } from "react";
const App = () => {
  const [dogs, setDogs] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setDogs(data.message);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div>
      <img src={dogs} alt="A Random Dog" />
    </div>
  );
};

export default App;
