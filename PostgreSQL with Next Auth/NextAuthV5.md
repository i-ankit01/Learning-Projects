###For Auth.js v5

####WorkFlow of next-auth cli

1. We need to install prisma adapters with mongodb or postgres 
   
   npm install prisma --save-dev
   npm install @prisma/client
   npx prisma init
   - select your database prisma or mongodb [change the schema file accordingly]
   - enter a database url 

2. Then update the schema.prisma file with basic user, session, account etc model

3. Update the .env file with it and migrate dev and push

4. Then create a lib/db.ts in the root directory

5. Create the file auth.ts in the root directory

6. Create auth.config.ts in the root directory having all the providers name

7. Create api/auth/[...nextauth]/route.ts 