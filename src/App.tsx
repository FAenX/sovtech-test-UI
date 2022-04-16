import './App.css';
import { SingleCharacter, SWCharacters } from './components/star-wars-characters';

import {

  ApolloClient,

  InMemoryCache,

  ApolloProvider,
  HttpLink,


} from "@apollo/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { store } from './redux';
import { Provider } from 'react-redux'

const httpLink = new HttpLink({ uri: 'https://node-test-backend-sovteck.herokuapp.com/graphql' })


const client = new ApolloClient({

  link: httpLink,

  cache: new InMemoryCache()

});

function App() {
  return (
   
    <Provider store={store}>
      <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>      
          <Route path="/" element={<SWCharacters />}/>
          <Route path="/character" element={<SingleCharacter />} />
        
        </Routes>
      </BrowserRouter>,
      </ApolloProvider>
    </Provider>
    
  );
}

export default App;
