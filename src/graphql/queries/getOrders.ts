import { gql } from "graphql-request"

export const getOrdersQuery = gql`
query getCustomerOrders($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
        orders(first: 200) {
            totalCount
            edges {
                node {
                    cancelReason
                    canceledAt
                    currencyCode
                    customerLocale
                    customerUrl
                    edited
                    email
                    financialStatus
                    fulfillmentStatus
                    id
                    name
                    orderNumber
                    phone
                    processedAt
                    statusUrl
                    lineItems(first: 200) {
                        edges {
                            cursor
                            node {
                                currentQuantity
                                quantity
                                title
                            }
                        }
                    }
                }
            }
        }
    }
}

`