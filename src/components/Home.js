// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// Components
import HeroImage from './HeroImage';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state.results[0]);

  return (
    <>
      {state.results[0] ? (
        <HeroImage />
      ) : null}
    </>
  );
};

export default Home;