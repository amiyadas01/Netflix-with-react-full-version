const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apikey: String(import.meta.env.VITE_API_KEY),
    apiurl : String(import.meta.env.VITE_API_URL),
    apitoken : String(import.meta.env.VITE_API_TOKEN),
   
};

export default conf;