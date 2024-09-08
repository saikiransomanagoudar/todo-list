# Todo List App

A simple and efficient Todo List application built with **Next.js**, **React**, **Convex**, **TailwindCSS**, and **TypeScript**. This application helps users manage their tasks in an organized manner.

## Features

- Add, update, and delete tasks.
- Mark tasks as complete.
- Responsive UI with TailwindCSS.
- Utilizes Convex for backend storage.
- Built using modern front-end technologies: Next.js, React, and TypeScript.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

`git clone https://github.com/saikiransomanagoudar/todo-list.git`

`cd todo-list`

2. Install the dependencies:

`npm install`

or

`yarn install`

### Running the Development Server

To run the app locally:

`npm run dev`

or

`yarn dev`

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized build:

`npm run build`

or

`yarn build`

To start the production server:

`npm run start`

or

`yarn start`

## Technologies Used

- **Next.js**: React framework for building fast and optimized web applications.
- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for responsive designs.
- **TypeScript**: Typed superset of JavaScript for better code quality.
- **Convex**: Backend as a service for managing application state.

## Folder Structure

- `src/`: Contains the main application code (components, pages, etc.).
- `convex/`: Convex backend configuration.
- `.env.local`: Environment variables for sensitive data (ignored by Git).
- `tailwind.config.ts`: TailwindCSS configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project dependencies and scripts.

## Environment Variables

Ensure you set up the following environment variables in a `.env.local` file:

`NEXT_PUBLIC_API_KEY=your_api_key`
