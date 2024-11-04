import {gql} from '@apollo/client';

const GET_ZELLER = gql`
query ListZellerCustomers($roleFilter: TableStringFilterInput) {
    listZellerCustomers(
      filter: {
        role: $roleFilter
      },
      limit: 10
    ) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;
export default GET_ZELLER;
