import {
  InMemoryCache,
  HttpLink,
  ApolloLink,
  ApolloClient,
  from,
} from '@apollo/client';
import {NEXT_PUBLIC_DEVELOPMENT} from '@env';

const link = new HttpLink({
  uri: NEXT_PUBLIC_DEVELOPMENT,
});

const client = new ApolloClient({
  link: from([authMiddleware(), link]),
  cache: new InMemoryCache(),
});

function authMiddleware() {
  return new ApolloLink((operation, forward) => {
    const authToken = 'dc0bc3ad3245e9f4b1c4650efe9636c6';

    if (!authToken) {
      return forward(operation);
    }

    // add the authorization to the headers
    operation.setContext(context => ({
      headers: {
        authorization: authToken,
        ...context.headers,
      },
    }));

    return forward(operation);
  });
}

export default client;
