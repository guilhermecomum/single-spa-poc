import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
