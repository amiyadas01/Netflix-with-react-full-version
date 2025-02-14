import { Client, Account } from "appwrite";
// import conf from '../conf/conf';
const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67af33cf0013bda5a077");
export const account = new Account(client);
console.log(client);

export default client;
