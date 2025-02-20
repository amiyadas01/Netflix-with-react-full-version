import { Client, Account } from "appwrite";
const client = new Client()
  .setProject("67af33cf0013bda5a077");
export const account = new Account(client);
console.log(client);

export default client;
