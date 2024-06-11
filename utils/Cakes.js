import { request, gql } from 'graphql-request'
async function getCakes() {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const query = gql`
    query getCakes {
      products(where: {isCake: true
      }) {
        id
        name
        price
        description
        images {
          url
        }
      }
      }
    `
  const res = await request(MASTER_URL, query)
  return res
}
export default { getCakes }