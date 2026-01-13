# Tic Tac Toe Game

A classic Tic Tac Toe game built with React and TypeScript. This project was created to learn React and TypeScript by following the official React learning tutorial.

## About

This is a learning project that implements the traditional Tic Tac Toe game with a clean, interactive user interface. The project demonstrates key React concepts and showcases the benefits of using TypeScript for type safety in a React application.

## Features

- **Interactive Gameplay**: Play against another player on the same device
- **Game State Management**: Track moves and determine winners
- **Responsive Design**: Works on desktop browsers
- **TypeScript**: Full type safety for React components

## Tech Stack

- **React** (v19) - UI library
- **TypeScript** (v5.9) - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting for code quality

## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── main.tsx          # Entry point
├── App.tsx           # Main application component
├── Board.tsx         # Game board component
├── Square.tsx        # Individual square component
└── styles.css        # Styling
```

## Component Overview

- **App**: Root component managing the overall game logic
- **Board**: Renders the game grid and handles game state
- **Square**: Individual clickable square on the board

## Learning Goals

This project was created to practice:

- React component structure and composition
- TypeScript type definitions in React
- State management with hooks
- Event handling in React
- Building interactive user interfaces

## How to Play

1. Players take turns clicking empty squares
2. X always goes first
3. The first player to get three in a row (horizontally, vertically, or diagonally) wins
4. If all squares are filled with no winner, the game is a draw

## Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## License

This is a learning project created for educational purposes.
