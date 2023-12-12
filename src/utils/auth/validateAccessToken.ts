import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
  try {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value || ''
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer }: {
      customer: {
        firstName: string
        email: string
      }
    } = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken
    })
    return customer
  } catch (error) {
    console.error(error)
  }
}