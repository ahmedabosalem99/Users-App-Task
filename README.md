# Users Management Application

![Angular](https://img.shields.io/badge/Angular-v19.2.6-red)
![Bootstrap](https://img.shields.io/badge/Bootstrap-v5-purple)

A modern Angular application for managing user data with create and read operations. This application demonstrates Angular best practices including components, services, routing, and HTTP communication.

## 📋 Features

- View a list of all users
- View detailed information for individual users
- Add new users to the system
- Responsive design using Bootstrap
- Angular routing with path protection

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- npm (usually comes with Node.js)
- [Angular CLI](https://github.com/angular/angular-cli) (v19.2.6)
- [JSON Server](https://github.com/typicode/json-server) for the mock backend

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/users-management-app.git
   cd users-management-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the JSON Server (mock backend)
   ```bash
   # Install JSON Server if you haven't already
   npm install -g json-server

   # Start JSON Server using the database file
   json-server --watch src/Database/userDB.json
   ```

4. In a new terminal, start the Angular development server
   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── add-new-user/    # Component for adding users
│   │   ├── error/           # Error handling component
│   │   ├── header/          # Navigation header
│   │   ├── one-user/        # Individual user card component
│   │   ├── user-details/    # Detailed user view component
│   │   └── users/           # Users list component
│   ├── app.component.*      # Root component
│   ├── app.config.ts        # Application configuration
│   └── app.routes.ts        # Route definitions
├── Services/
│   └── users.service.ts     # HTTP service for user operations
└── Database/
    └── userDB.json          # Mock database file for JSON Server
```

## 🔄 API Endpoints

The application communicates with a JSON Server with the following endpoints:

- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch a specific user by ID
- `POST /users` - Add a new user

## 🛠️ Development

### Code Generation

This project uses Angular CLI for code generation:

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name
```

### Running Tests

```bash
# Unit tests
ng test

# End-to-end tests
ng e2e
``

## 🙏 Acknowledgments

- [Angular](https://angular.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)
