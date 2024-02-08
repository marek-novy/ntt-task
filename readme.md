# Full Stack Coding Challenge: Dog Breeds Directory

![Dog Breeds Directory](https://i.ibb.co/0XWXcFp/dog-breeds-directory.png)

## Overview

Welcome to our coding challenge! This task is designed to assess your full stack development skills, focusing on creating a feature within a monorepo setup using NestJS for the backend and Vite with TypeScript and React for the frontend. Your goal is to develop a dog breeds directory that showcases a list of dog breeds fetched from the backend and displayed in a paginated table on the frontend.

## Project Structure

- The project is organized as a Lerna monorepo.
- **Backend**: The backend service is built with NestJS.
- **Frontend**: The frontend application is developed using Vite, TypeScript, and React.

## Getting Started

Install the dependencies

```bash
npm install
```

Running the backend and frontend

```bash
npm run dev
```

## Task Description

### Backend (NestJS)

1. **Create a New Endpoint**
   - Develop a new endpoint in the NestJS backend that serves a list of dog breeds.
   - The data for dog breeds is available in `src/assets/dog-breeds.txt`.
   - Implement pagination support for the endpoint.

### Frontend (Vite + TypeScript + React)

1. **Route and Table Setup**
   - Create a new route `/dogs` in the frontend application.
   - Display the dog breeds in a table on the `/dogs` page. The table should fetch its data from the backend endpoint you created.
   - Implement pagination controls to navigate through the list. The table should display 10 dog breeds per page.
   
2. **State Management**
   - Use MobX for state management.
   - Store the table data within a MobX store to manage the application's state effectively.

## Requirements

- Ensure the backend endpoint properly handles pagination parameters and serves the dog breeds data from the provided text file.
- The frontend should correctly fetch data from the backend, display it in a table, and allow users to paginate through the dog breeds list.
- State management on the frontend should be handled using MobX, ensuring that the application's state is well-organized and reactive.
- Follow best practices for code structure, styling, and comments to maintain readability and scalability.

## Submission Guidelines

- Fork/clone the provided repository to begin your work.
- Ensure your code is well-documented and includes any necessary installation and running instructions.
- Submit your solution by creating a pull request to the original repository or by providing a link to your forked repository.

Good luck with your task! We look forward to seeing your creative and technical capabilities in action.
