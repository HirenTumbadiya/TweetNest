# TweetNest

Welcome to the Social Media project! This is a full-stack web application built with Next.js, Prisma, and React. It provides a platform for users to connect, share content, and engage with each other.

## Features

- User authentication and authorization
- Real-time chat functionality
- Rich text editor for posts
- Image uploading and resizing
- Responsive design with Tailwind CSS
- Dark and light mode support
- Admin dashboard for managing content

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [TypeScript](https://www.typescriptlang.org/)
- **Backend**:
  - [Prisma](https://www.prisma.io/)
  - [Node.js](https://nodejs.org/)
- **Database**:
  - PostgreSQL (or your chosen database)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn
- PostgreSQL (if using)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social_media.git
   cd social_media

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps

3. Set up your database:
- Update your database connection in the .env file.
- Run Prisma migrations:

   ```bash
   npx prisma migrate dev

### Running the Application

To start the development server, run:

   ```bash
   npx prisma migrate dev
  ```

### Build for Production

To build the application for production, run:
   ```bash
   npm run build
  ```

Then, start the production server with:

   ```bash
   npm run start
  ```

### License
This project is licensed under the MIT License. See the LICENSE file for details.