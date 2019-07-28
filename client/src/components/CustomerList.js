import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Customer from "./Customer";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

//const CUSTOMERS_QUERY = gql``;

const CUSTOMERS_QUERY = gql`
  query CustomersQuery {
    customers {
      name
      email
      age
    }
  }
`;
class CustomerList extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <Query query={CUSTOMERS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              console.log(data);
              return (
                <React.Fragment>
                  {data.customers.map(customer => (
                    <Customer key={customer.id} {...customer} />
                  ))}
                </React.Fragment>
              );
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default CustomerList;
