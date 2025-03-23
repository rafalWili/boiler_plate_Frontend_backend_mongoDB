# Boiler plate Frontend Backend and MongoDB 

This project is a full-stack web application built with modern technologies and a focus on simplicity and performance. The entire environment runs seamlessly with Docker Compose, making it easy to set up and run locally with just one command.

## Technologies Used

### Frontend

- React
- TypeScript
- TailwindCSS
- Webpack

### Backend

- Node.js
- Express
- MongoDB

### Containerization

- Docker
- Docker Compose

### Package Management

- Yarn (Yarn Workspaces)

## Project Structure

The project is structured as a Yarn workspace with separate frontend and backend packages. Each workspace has its own Dockerfile and configuration, while Docker Compose handles the entire setup and orchestration.

```bash
project-root/
├── docker-compose.yml
├── packages/
│   ├── frontend/
│   │   ├── Dockerfile
│   │   └── src/
│   └── backend/
│       ├── Dockerfile
│       └── src/
└── README.md
```

## Prerequisites

Ensure you have the following installed on your system:

- Docker
- Docker Compose
- Yarn

## Getting Started

Clone the repository:

```bash
git clone https://github.com/rafalWili/boiler_plate_Frontend_backend_mongoDB.git
cd project-name
```

Install dependencies:

```bash
yarn install
```

## Running the Application

To start the entire environment using Docker Compose, simply run:

```bash
docker-compose up --build
```

This command will:

1. Build the frontend and backend images.
2. Start the frontend, backend, and MongoDB containers.

Once everything is up and running, you can access the application at:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:7001](http://localhost:7001)

## Stopping the Application

To stop the application, press `Ctrl + C` in the terminal or run:

```bash
docker-compose down
```

## Troubleshooting

If you encounter any issues, you can view the logs of each container by running:

```bash
docker-compose logs -f
```

For specific containers, use:

```bash
docker-compose logs -f frontend
```

## License

This project is licensed under the MIT License.

