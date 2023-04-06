import { useRoutes } from "react-router-dom";
import routes from "routes";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
function App() {
  const {user} = useSelector(state => state.auth)
  console.log(user)
  return (
    <>
      <Toaster />
      {useRoutes(routes)}
    </>
  );
}

export default App;
