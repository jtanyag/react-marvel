// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';

const Home = () => {
  const { state, loading, error, searchTerm } = useHomeFetch();

  console.log(state.results[0]);

  return (
    <>
      {state.results[0] ? (
        <HeroImage />
      ) : null}
      <Grid header={searchTerm ? 'Search Results' : 'Characters'}>

      </Grid>
    </>
  );
};

export default Home;