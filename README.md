# 🍰 CakeNotes

CakeNotes is an all-in-one productivity tool that features notetaking, whiteboarding, and in-app coding. (Currently in development)

## Features
* Real-time collaboration
* Simple text editor for notetaking
* Safely delete and recover documents
* Safe authentication with Firebase
* In-app IDE for pair programming
* Virtual whiteboarding for brainstorming or visualizing ideas

# Technology Stack

## Frontend

- **Next.js (React Framework):** Provides the foundation for building structured, performant, and interactive web interfaces. Enables features like routing, server-side rendering, and seamless integration with other React components.

- **TypeScript:** Adds type safety and improved developer tooling to the frontend codebase, promoting maintainability and reducing errors as the application scales.

## Backend

- **Fiber (Go Web Framework):** Powers RESTful APIs, providing high-performance request handling and routing for interaction with frontend components and data storage systems.

- **Go (Golang):** The language behind Fiber, offering concurrency, speed, and a rich ecosystem for building robust backend services.

- **Firebase Admin SDK (Go):** Used to securely interact with various Firebase services from the Go backend, specifically for user authentication token validation.

## Databases

- **Firebase Realtime Database:** Facilitates real-time collaboration by enabling instant updates across connected clients. Ideal for whiteboard elements, chat, or other features requiring low-latency synchronization.

- **Cloud SQL:** Provides a fully-managed SQL database for storing structured data (e.g., user preferences, project metadata) that requires robust relational modeling.

## Infrastructure & Delivery

- **Firebase Authentication:** Handles user login, registration, and session management, streamlining the development process and ensuring secure access.

- **Memorystore (Memcached):** Provides an in-memory caching layer to reduce database load, optimize frequently accessed data, and enhance application speed.

- **GitHub Actions:** Automates CI/CD pipelines, enabling code testing, builds, and deployments whenever changes are introduced.

- **Docker:** Simplifies deployment by packaging applications and dependencies into portable containers, ensuring consistent environments.

- **Google Kubernetes Engine (GKE):** Orchestrates containerized applications, providing scalability, load-balancing, and self-healing capabilities for deployment.

- **NGINX:** Acts as a flexible reverse-proxy, load balancer, and gateway into the Kubernetes cluster, handling incoming traffic routing and potential SSL termination.

## Collaborative Tools

- **Excalidraw:** Powers the interactive whiteboard component within CakeNotes, enabling visual brainstorming and diagramming.

- **CodeMirror:** Provides the foundation for the code editor in the IDE section, responsible for syntax highlighting, completions, and other essential coding features.

- **Gitpod (Potential):** If integrated, allows users to spin up cloud-based development environments directly within CakeNotes, promoting collaboration and streamlining onboarding. (Would replace CodeMirror)


## Development considerations to think about
* Conflict Resolution: When multiple users are editing the same piece of information simultaneously, conflicts can occur. Real-time databases like Firebase handle this quite well, but should still design the application's data flow and user interactions to minimize conflict scenarios.

* Presence System: Implementing a presence system can show which users are currently online and which part of the document they are interacting with. Firebase Realtime Database offers features that can be used to build such a system.

## License

[MIT](https://choosealicense.com/licenses/mit/)
