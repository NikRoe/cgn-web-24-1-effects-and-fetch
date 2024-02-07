import { useEffect, useState } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState();
  const [jokeId, setJokeId] = useState(0);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${jokeId}`
      );
      const fetchedJoke = await response.json();

      setJoke(fetchedJoke);
    }

    startFetching();
  }, [jokeId]);

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button
        type="button"
        onClick={() => {
          setJokeId(joke.nextId);
        }}
      >
        Next Joke
      </button>
    </>
  );
}
