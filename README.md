# 🐞 Bug Tracker

Welcome to our Bug Tracker project! This repository contains two separate applications: a client and a server.

## Prerequisites

Before you begin, make sure you have the following programs installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn**

## Installation

### Clone the Repository

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```
## Client Setup 🛠️

1. **Navigate to the client directory:**

    ```bash
    cd client
    ```

    This command changes your current directory to where the client-side code is located.

2. **Install dependencies:**

    ```bash
    npm install
    ```

    This command installs all the required dependencies for the client. If you prefer using yarn, you can use `yarn install` instead.

3. **Run the client in development mode:**

    ```bash
    npm run dev
    ```

    This command starts the client in development mode. Changes made in the code will automatically reload the application.

4. **Build the client for production:**

    ```bash
    npm run build
    ```

    This command compiles and optimizes the client code for production deployment.

5. **Preview the built application:**

    ```bash
    npm run preview
    ```

    This command allows you to preview the application after it has been built for production.
## Server Setup 🖥️

1. **Navigate to the server directory:**

    ```bash
    cd server
    ```

    This command changes your current directory to where the server-side code is located.

2. **Install dependencies:**

    ```bash
    npm install
    ```

    This command installs all the required dependencies for the server. Ensure Node.js and npm are installed on your machine.

3. **Build the server (if applicable):**

    ```bash
    npm run dev
    ```

    This command compiles TypeScript files to JavaScript using TypeScript compiler (`tsc`).

4. **Start the server:**

    ```bash
    npm start
    ```

    This command starts the server using the compiled JavaScript files in the `dist` directory.

5. **Run the server in development mode:**

    ```bash
    npm run dev
    ```

    This command uses `nodemon` to automatically restart the server when changes are detected in TypeScript files (`index.ts`).
```bash
<ROOT_OF_REPOSITORY>
├── client
│   ├── package.json
│   └── ...
├── server
│   ├── package.json
│   └── ...
└── README.md
```
## Contact 📬

If you have any questions, feedback, or need assistance, please feel free to reach out:

- **Open an Issue**: If you encounter any bugs or have suggestions, [open an issue](<URL_TO_ISSUE_TRACKER>) on the repository.
- **Author Contact**: You can contact the author directly via email at [riigarXX@gmail.com](mailto:author@example.com).
- **Social Media**: Follow us on Twitter [@BugTrackerApp](https://twitter.com/rigarXX) for updates and announcements.

We are here to help and improve the Bug Tracker project together!
