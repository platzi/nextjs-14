import { gql } from "graphql-request"


export const createUserMutation = gql`
mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
        customer {
            firstName
            lastName
            email
            phone
        }
        customerUserErrors {
            field
            message
            code
        }
    }
}
`