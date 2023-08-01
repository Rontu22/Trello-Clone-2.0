// import { Client } from "./node_modules/appwrite/types/client";
// import { ID } from "./node_modules/appwrite/types/id";
// import { Databases } from "./node_modules/appwrite/types/index";
// import { Storage } from "./node_modules/appwrite/types/index";
// import { Account } from "./node_modules/appwrite/types/index";

import { Client, Account, ID, Databases, Storage } from "appwrite";

// make above in one line
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage, ID };
