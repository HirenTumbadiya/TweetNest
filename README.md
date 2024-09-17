TweetNest
TweetNest is a Next.js project bootstrapped with create-next-app. It features PostgreSQL and Prisma for fullstack development.

Getting Started
To get started with TweetNest, follow these steps:

1. Clone the Repository
Clone the repository to your local machine:



git clone <repository-url>
cd tweetnest
2. Install Dependencies
Install the project dependencies using one of the following commands:



npm install
# or
yarn install
# or
pnpm install
# or
bun install
3. Set Up Environment Variables
Create a .env file in the root of your project directory with the necessary environment variables. For example:

env

DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase
4. Run Database Migrations
Apply database migrations using Prisma:

npx prisma migrate dev
# or
yarn prisma migrate dev
# or
pnpm prisma migrate dev
# or
bun prisma migrate dev
5. Start the Development Server
Run the development server with one of the following commands:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser to see the result.

6. Editing the Page
You can start editing the page by modifying app/page.tsx. The page will auto-update as you make changes.

Font Optimization
This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Learn More
To learn more about Next.js, explore the following resources:

Next.js Documentation - Learn about Next.js features and API.
Learn Next.js - An interactive Next.js tutorial.
Next.js GitHub Repository - Your feedback and contributions are welcome!
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

For more details, check out our Next.js deployment documentation.