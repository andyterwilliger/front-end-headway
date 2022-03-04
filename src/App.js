import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import NavBar from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <h2>My first Apollo app </h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
