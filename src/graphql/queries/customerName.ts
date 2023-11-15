import { gql } from "graphql-request";

export const customerName = gql`
query customerName($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
        firstName
        email
    }
}
`