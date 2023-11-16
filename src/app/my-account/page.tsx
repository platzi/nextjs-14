import { getCustomerOrders } from "app/services/shopify/graphql/customer";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();
  const ordersInfo = await getCustomerOrders();

  return (
    <div>
      <h1>Bienvenido {customer.name}</h1>
      <p>email: {customer.email}</p>
    </div>
  );
}