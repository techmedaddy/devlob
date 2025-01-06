# Node.js TypeScript Server with CI/CD Pipeline

## Project Overview

This project is a basic DevOps portfolio project that demonstrates the setup of a Node.js server written in TypeScript, containerized using Docker, and integrated with a CI/CD pipeline using Jenkins and Gradle. The project showcases the use of various tools and technologies to automate the build, test, and deployment processes.

### Explanation of Project Structure

- **.github/workflows/ci-cd.yml**: GitHub Actions workflow file for CI/CD pipeline.
- **node_modules/**: Directory containing project dependencies (ignored by Git).
- **src/server.ts**: Main TypeScript file for the Node.js server.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **build.gradle**: Gradle build file defining tasks for building, testing, and linting the project.
- **docker-compose.yml**: Docker Compose file for containerizing the application.
- **Jenkinsfile**: Jenkins pipeline configuration file.
- **package.json**: Node.js project configuration file with scripts and dependencies.
- **tsconfig.json**: TypeScript configuration file.
- **README.md**: Project documentation file.

## Tools and Technologies

### Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side.

### TypeScript
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static typing and other features to improve code quality and maintainability.

### Docker
Docker is a platform for developing, shipping, and running applications in containers. Containers allow you to package an application with all its dependencies, ensuring consistency across different environments.

### Gradle
Gradle is a build automation tool that is used to automate the building, testing, and deployment of applications. In this project, Gradle is used to define tasks for building, testing, and linting the Node.js application.

### Jenkins
Jenkins is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying. Jenkins is used to set up a CI/CD pipeline for this project.

### GitHub Actions
GitHub Actions is a CI/CD service provided by GitHub. It allows you to automate workflows directly from your GitHub repository. In this project, GitHub Actions is used to define a CI/CD pipeline that runs on every push and pull request to the `main` branch.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Docker installed
- Gradle installed
- Jenkins installed and configured
- Git installed

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Build the project:**
    ```sh
    npm run build
    ```

4. **Run the server:**
    ```sh
    npm start
    ```

### Running with Docker

1. **Build and start the Docker container:**
    ```sh
    docker-compose up --build
    ```

### CI/CD Pipeline

#### GitHub Actions

The CI/CD pipeline is defined in the `.github/workflows/ci-cd.yml` file. It runs on every push and pull request to the `main` branch and performs the following steps:

1. Checkout the repository
2. Set up Node.js
3. Install dependencies
4. Compile TypeScript
5. Run tests
6. Lint code
7. Deploy the application

#### Jenkins

The Jenkins pipeline is defined in the [Jenkinsfile](http://_vscodecontentref_/8). It performs the following stages:

1. Checkout the repository
2. Build the project using Gradle
3. Run tests using Gradle
4. Lint code using Gradle
5. Deploy the application using Gradle

### Project Scripts

- **build**: Compiles the TypeScript code.
- **start**: Starts the compiled server.
- **test**: Placeholder for running tests.
- **lint**: Placeholder for running a linter.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Gradle](https://gradle.org/)
- [Jenkins](https://www.jenkins.io/)
- [GitHub Actions](https://github.com/features/actions)
