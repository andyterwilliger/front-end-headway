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
import Footer from "./components/Footer";
const client = new ApolloClient({
  uri: "https://7tnxqt.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query AllLinks {
        allLinks {
          id
          url
          slug
        }
      }
    `
  })
  .then((result) => console.log(result));

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Header />
        <Form />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
