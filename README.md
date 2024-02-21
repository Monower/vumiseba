To update the api url or admin url, please goto config/index.ts.

If there is no config folder, then make one and create index.ts file.
Then add the following code.

    export const API_URL =  process.env.NEXT_PUBLIC_API_URL || 'your api url'
    export const ADMIN_PANEL_URL = 'your admin url'


    export const PER_PAGE = 3
    export const Review_Limit = 8

place your api url and admin url like so:

    export const API_URL =  process.env.NEXT_PUBLIC_API_URL || 'www.example.com'
    export const ADMIN_PANEL_URL = 'admin.example.com'


    export const PER_PAGE = 3
    export const Review_Limit = 8


Then you will need to update the next.config.js

In next.config.js, in nextConfig, add 

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.example.com',
      },
    ],
  },

This will set the remote host name of your images.

Then you are all set to run the app.

To run the app in the terminal type, npm run dev (for development environment) or npm run start (for production environment).

Thank you.
