import { getCustomerOrders } from "app/services/shopify/graphql/customer";
import styles from './OrderInfo.module.sass'

type OrderType = {
  name: string;
  orderNumber: number;
  statusUrl: string
  lineItems: {
    edges: Array<{
      node: {
        currentQuantity: number;
        title: 2
      }
    }>
  }
}

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  return (
    <div>
      <h2>Your orders</h2>
      <section>
        {ordersInfo.orders?.map((order: OrderType) => (
          <a href={order.statusUrl} key={order.orderNumber} className={styles.OrderInfo}>
            <h3>Order {order.name}</h3>
            {
              order.lineItems.edges.map(({ node }) => (
                <div key={node.title}>
                  <span>{node.title}</span>
                  <span className={styles.OrderInfo__quantity}> x{node.currentQuantity}</span>
                </div>
              )
              )
            }
          </a>
        ))}
      </section>
    </div>
  );
}