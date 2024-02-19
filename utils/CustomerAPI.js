import { request, gql } from 'graphql-request'
async function getCustomers(){
    const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
    const query = gql`
    query getCustomers {
        customers {
          clerkId
          cart {
            cartorder {
              ... on OrderItem {
                id
                product {
                  images {
                    url
                  }
                  price
                  variants {
                    ... on ProductColorVariant {
                      id
                      name
                    }
                    ... on ProductSizeColorVariant {
                      id
                      name
                      color
                    }
                    ... on ProductSizeVariant {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    `
   const res = await request(MASTER_URL ,query)
   return res 
}
export default getCustomers