import { gql, GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master";

async function createOrderItem(id, quantity, total) {
  const graphQLClient = new GraphQLClient(endpoint, {});

  const mutation = gql`
    mutation createOrderItem(
      $quantity: Int = 10
      $total: Int = 10
      $id: ID = ""
    ) {
      createOrderItem(
        data: {
          quantity: $quantity
          total: $total
          order: { connect: { id: $id } }
        }
      ) {
        id
        quantity
        total
        order {
          id
        }
      }
      publishManyOrderItems(to: PUBLISHED) {
        count
      }
    }
  `;
  const variables = {
    quantity: quantity,
    total: total,
    id: id,
  };

  const data = await graphQLClient.request(mutation, variables);
  console.log(data);
  return data;
}

async function placeOrder(
  transactionId,
  total,
  address,
  customerId,
) {
  const graphQLClient = new GraphQLClient(endpoint, {});

  const mutation = gql`
    mutation createOreder(
      $address: String = ""
      $clerkId: String = ""
      $total: Int = 10
        $transactionId: String = ""
    ) {
      createOrder(
        data: {
          total: $total
          address: $address
          customer: { connect: { clerkId: $clerkId } }
          delivered: false
          transactionId: $transactionId
        }
      ) {
        address
        id
        total
        transactionId
      }
      publishManyOrders(to: PUBLISHED) {
        count
      }
    }
  `;

  const variables = {
    total: total,
    address: address,
    clerkId: customerId,
    transactionId: transactionId,
  };

  const data = await graphQLClient.request(mutation, variables);
  console.log(data);
  return data;
}

export default { placeOrder, createOrderItem }
