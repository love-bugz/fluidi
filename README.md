### Database

- SQLite for dev, PostgreSQL in prod

#### Tables
- Users

Users authenticate, primarily, with an OAuth provider using NextAuth.js. We still need to have a record of each user so that we have something to reference when we interact with them in the app. 
Expected Flow: 
1. User navigates to the home page
2. User authorizes with an OAuth provider, giving us a provider ID
3. We check the user uid with the Users table
4. If the user uid exists already, grab the User ID, user handle, add this to the user object in client app, and redirect the User to the home page
5. If the user uid does not exist, create a new Users row and redirect the user to the onboarding page to get data to populate the new row. Perhaps navigate first?
5a. If onboarding, get a user handle and create a new Users record. After onboarding, redirect to the "New User" home page (might have some frills like explaining wtf is going on)