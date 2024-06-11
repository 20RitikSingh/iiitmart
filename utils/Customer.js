import { request, gql } from 'graphql-request'
async function createUser(address, clerkId, name, number) {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const mutationQuery = gql`
      mutation createUser {
        createCustomer(
          data: {address: "`+ address + `", clerkId: "` + clerkId + `", name: "` + name + `", number: ` + number + `}
        ) 
        {
            name
        } 
          publishManyCustomers {
            count
          }
      }      
    `
  const res = await request(MASTER_URL, mutationQuery)
  return res
}
async function createEmptyUser(clerkId) {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const mutationQuery = gql`
      mutation createEmptyUser {
        createCustomer(
          data: {clerkId: "` + clerkId + `"}
        ) 
        {
            name
        } 
          publishManyCustomers {
            count
          }
      }      
    `
  const res = await request(MASTER_URL, mutationQuery)
  return res
}
async function getUserbyId(id) {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const query = gql`
    query getCustomer {
        customer(where: {clerkId: "`+ id + `"}) {
          name
          number
          address
        }
      }     
    `
  const res = await request(MASTER_URL, query)
  return res
}
async function updateUser(address, number, id) {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const query = gql`
    mutation updateUser {
        updateCustomer(data: {address: "`+ address + `", number: ` + number + `}, where: {clerkId: "` + id + `"})
        {
            id
          }
      }
        
    `
  const res = await request(MASTER_URL, query)
  return res
}
async function createEmptyCart(clerkid) {
  const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsj4vqoa000008l18w0o8mis/master';
  const query = gql`
    mutation MyMutation {
      createCart(data: {clerkid: "`+clerkid+`"}) {
        id
      }
      publishManyCarts {
        count
      }
    }
    
        
    `
  const res = await request(MASTER_URL, query)
  return res
}

export default { createUser, getUserbyId, updateUser, createEmptyUser, createEmptyCart }