import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Form from "./components/Form";
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
        <Header />
        <Form />
      </div>
    </BrowserRouter>
  );
}

export default App;
