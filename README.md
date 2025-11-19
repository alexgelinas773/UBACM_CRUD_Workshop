
# UB ACM CRUD Workshop - Assignment Tracker

This simple CRUD app is styled as a To-Do List for assignment tracking. The To-Do list highlights basic CRUD operations. 

In order to complete this workshop you will need:  
  1. A code editor capable of handling Java, Tailwind CSS, React, SpringBoot, and MongoDB. We will be live coding with IntelliJ community edition.
  2. A MongoDB account, a live setup will be covered.
                                                   
Follow along with our live workshop in Davis 101 to end up with a scalable project that you can customize as much or as little as you like! 

## Overview

The application allows users to:
- Add new assignments with name, class, and due date
- View all assignments in a clean, organized interface
- Edit existing assignments inline
- Update assignment status
- Delete completed or unwanted assignments

## Features

- **Full CRUD Operations**: Create, Read, Update, and Delete functionality
- **RESTful API**: Clean API design with Spring Boot
- **Responsive UI**: Modern interface built with React and Tailwind CSS
- **Real-time Updates**: Instant UI updates after database operations
- **MongoDB Integration**: NoSQL database for flexible data storage
- **Status Tracking**: Monitor assignment progress

## Tech Stack

### Backend
- **Spring Boot 3.5.7** - Java-based backend framework
- **Spring Data MongoDB** - Database integration
- **Maven** - Dependency management
- **Java 21** - Programming language

### Frontend
- **React 19.2.0** - UI library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Fetch API** - HTTP client for API calls

### Database
- **MongoDB Atlas** - Cloud-hosted NoSQL database

## Project Structure

```
UBACM_CRUD_Workshop-main/
│
├── src/                                # Backend source code
│   └── main/
│       ├── java/com/example/ACM_CRUD_demo/
│       │   ├── Model/
│       │   │   └── TaskModel.java      # Task data model
│       │   ├── AcmCrudDemoApplication.java  # Main Spring Boot application
│       │   ├── Controller.java         # REST API controller (to be implemented)
│       │   └── PostRepository.java     # MongoDB repository interface
│       └── resources/
│           └── application.properties  # Application configuration
│
├── frontend/                           # React frontend
│   ├── src/
│   │   ├── App.js                      # Main React component
│   │   ├── index.js                    # React entry point
│   │   ├── App.css                     # Component styles
│   │   ├── index.css                   # Global styles (Tailwind)
│   │   └── ubacmlogo.png               # UB ACM logo
│   ├── public/
│   │   ├── index.html                  # HTML template
│   │   └── ...                         # Static assets
│   ├── package.json                    # Frontend dependencies
│   ├── tailwind.config.js              # Tailwind configuration
│   └── postcss.config.js               # PostCSS configuration
│
├── pom.xml                             # Maven configuration
├── mvnw                                # Maven wrapper (Unix)
├── mvnw.cmd                            # Maven wrapper (Windows)
└── README.md                           # This file
```

### Key Components

#### Backend Structure

**TaskModel.java**
- Defines the task data structure with fields: `_id`, `Name`, `Class`, `DueDate`, `Status`
- MongoDB document mapped to "Tasks" collection
- Includes getters, setters, and utility methods

**PostRepository.java**
- Extends `MongoRepository<TaskModel, String>`
- Provides built-in CRUD methods for database operations
- Automatically implements common database queries

**Controller.java**
- REST API controller (workshop implementation required)
- Should handle HTTP requests for CRUD operations
- Maps endpoints to service methods

#### Frontend Structure

**App.js**
- Main React component with all UI logic
- State management for tasks and form inputs
- API integration using Fetch API
- Inline editing functionality
- Responsive design with Tailwind CSS

**Key Frontend Features:**
- Form inputs for adding new tasks
- Task list with edit/delete buttons
- Inline editing mode with save/cancel options
- Real-time UI updates after API calls

## Prerequisites

Before starting the workshop, ensure you have the following installed:

1. **Java Development Kit (JDK) 21 or higher**
   - Download from [Oracle](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://openjdk.org/)
   - Verify installation: `java --version`

2. **IntelliJ IDEA Community Edition** (recommended)
   - Download from [JetBrains](https://www.jetbrains.com/idea/download/)
   - Alternatively, use VS Code, Eclipse, or any Java IDE

3. **Node.js and npm** (for React frontend)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

4. **MongoDB Atlas Account** (free tier available)
   - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Setup will be covered in the workshop

5. **Git** (optional, for version control)
   - Download from [git-scm.com](https://git-scm.com/)

## Installation & Setup

### Step 1: Clone or Download the Repository

```bash
git clone https://github.com/yourusername/UBACM_CRUD_Workshop-main.git
cd UBACM_CRUD_Workshop-main
```

Or download and extract the ZIP file.

### Step 2: Configure MongoDB

1. Create a MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is sufficient)
3. Create a database user with read/write permissions
4. Get your connection string (looks like `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Update `src/main/resources/application.properties`:

```properties
spring.application.name=ACM_CRUD_demo
spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
spring.data.mongodb.database=TodoApp
```

Replace `username` and `password` with your MongoDB credentials.

### Step 3: Install Backend Dependencies

The Maven wrapper will automatically download dependencies when you run the application:

```bash
# Unix/Mac
./mvnw clean install

# Windows
mvnw.cmd clean install
```

### Step 4: Install Frontend Dependencies

```bash
cd frontend
npm install
```

## Running the Application

### Start the Backend (Spring Boot)

Option 1: Using Maven wrapper
```bash
# Unix/Mac
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run
```

Option 2: Using IntelliJ IDEA
1. Open the project in IntelliJ
2. Right-click on `AcmCrudDemoApplication.java`
3. Select "Run 'AcmCrudDemoApplication'"

The backend will start on `http://localhost:8080`

### Start the Frontend (React)

In a new terminal window:

```bash
cd frontend
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.


**Workshop Goals:**
- Understand full-stack application architecture
- Learn CRUD operations with REST APIs
- Practice Spring Boot and React integration
- Work with MongoDB NoSQL database
- Build a scalable, production-ready foundation

**What You'll Learn:**
1. Setting up a Spring Boot project with Maven
2. Creating MongoDB data models
3. Implementing RESTful API controllers
4. Building React components with hooks
5. Styling with Tailwind CSS
6. Connecting frontend to backend
7. Deploying to MongoDB Atlas

## Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Documentation](https://react.dev/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [REST API Best Practices](https://restfulapi.net/)

## Contact

For questions about this workshop:
- Visit [UB ACM](https://ubacm.org/)
- Join the UB ACM Discord community

---
