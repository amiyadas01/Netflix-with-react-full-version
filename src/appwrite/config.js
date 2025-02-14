import { Client ,Account } from 'appwrite';
import conf from '../conf/conf';
const client = new Client();
client.setProject(conf.appwriteProjectId);
export const account = new Account(client);

export default client;