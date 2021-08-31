// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// Components

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return <div>Home Page</div>
}

export default Home;