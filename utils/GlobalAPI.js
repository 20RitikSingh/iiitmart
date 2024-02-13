import { request, gql } from 'graphql-request'
async function getBanners(){
    const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
    const query = gql`
    query getBanners {
        banners {
          id
          createdAt
          title
          image {
            url
          }
        }
      }
    `
   const res = await request(MASTER_URL ,query)
   return res 
}
export default {getBanners}