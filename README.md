# AI Chat App

## Overview

This AI Chat App is a full-stack chat application that integrates OpenAI's GPT model to provide an interactive chat experience. Built with React, Node.js, and various other technologies, this app allows users to engage with an AI-driven chatbot for text and code completions, as well as thought assistance.

## Features

React Frontend: Modern, responsive UI built with React.
Node.js Backend: Robust backend architecture using Express.js.
OpenAI Integration: Leverages OpenAI's GPT models for dynamic chat interactions.
Chat Functionality: Users can send messages and receive AI-generated responses.
Text, Code, and Thought Completion: Offers various modes of AI-driven interactions.

## Installation

Before installation, ensure you have Node.js version 20.x installed.

1. Clone the Repository
   ```sh
   git clone https://github.com/matthewloweng/chat-app
   ```
2. Install Dependencies
   Install root dependencies:
   ```sh
   npm install
   ```
   Install client dependencies:
   ```sh
   cd client
   npm install
   ```
   Install server dependencies:
   ```sh
   cd server
   npm install
   ```
3. Environment setup
   Create a '.env' file in the server directory.
   Add the following keys:
   ```sh
   OPENAI_API_KEY=[Your OpenAI API Key]
   PROJECT_ID=[Your Chat Engine Project ID]
   BOT_USER_NAME=[Bot Username]
   BOT_USER_SECRET=[Bot User Secret]
   ```
4. Running the Application
   To run both client and server conurrently:

```sh
npm run dev
```

To run the server only:

```sh
npm run start-server
```

To run the client only:

```sh
npm run start-client
```

## Usage

After starting the application, navigate to 'https://localhost3000' in your browser to access the chat interface. You can use the chat to interact with the following AI chat bots:

1. Auto-text completion
2. Code suggestions/completion
3. Thought assistance

## Notes

Broke authentication :( going to try to debug but need to finish other features first.
When features are complete, will deploy to heroku.

## Contact

matthew.j.ng@gmail.com
