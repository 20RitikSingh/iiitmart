import { request, gql } from 'graphql-request'

async function GetCartByClerkID(id) {
    const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
    const query = gql`
    query GetCartByClerkID {
        cart(where: {clerkid: "`+ id + `"}) {
          total
          cartItems {
            id
            quantity
            product {
              images {
                url
              }
              price
              name
            }
          }
        }
      }   
    `
    const res = await request(MASTER_URL, query)
    return res
}
async function UpdateCart( id, quantity, clerkid) {
    const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
    const query = gql`
    mutation UpdateCart {
        createCartItem(
          data: {product: {connect: {id: "`+id+`"}}, quantity: `+quantity+`, cart: {connect: {clerkid: "`+clerkid+`"}}}
        ) {
          id
        }
        publishManyCartItems {
          count
        }
        publishManyCarts {
          count
        }
      }
    `
    const res = await request(MASTER_URL, query)
    return res
}

async function updateCartItemQuantity(cartItemID, quantity) {
    const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
    const query = gql`
    mutation updateCartItemQuantity {
        updateCartItem(where: {id: "`+ cartItemID +`"}, data: {quantity: `+ quantity +`}) {
          quantity
        }
      }
    `
    const res = await request(MASTER_URL, query)
    return res
}
async function deleteCartItem(cartItemID) {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const query = gql`
  mutation updateCartItemQuantity {
    deleteCartItem(where: {id: "`+ cartItemID +`"}) {
      id
    }
  }
  `
  const res = await request(MASTER_URL, query)
  return res
}

export default { GetCartByClerkID,UpdateCart,updateCartItemQuantity,deleteCartItem }
