
import { useGetBmiQuery } from "@store/Services/UsersBMI";

import HomeUX from "./HomeUX";
const Home = () => {
  const {data,isLoading,error} = useGetBmiQuery({} ,  {refetchOnMountOrArgChange: true, refetchOnFocus: true});
  return (
  <HomeUX
  data={data} error={error}
  />
  );
};
export default Home;
