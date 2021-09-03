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
        <HeroImage
          image={`${state.results[0].thumbnail.path}.${state.results[0].thumbnail.extension}`}
          name={state.results[0].name}
          text={`${state.results[0].thumbnail.path}.${state.results[0].thumbnail.extension}`}
        />
      ) : null}
    </>
  );
};

export default Home;