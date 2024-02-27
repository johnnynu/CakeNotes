# CakeNotes

🍰 CakeNotes is an all-in-one productivity tool that features notetaking, whiteboarding, and in-app coding. (Currently in development)

## Features
* Real-time collaboration
* Simple text editor for notetaking
* Safely delete and recover documents
* Safe authentication with Firebase
* In-app IDE for pair programming
* Virtual whiteboarding for brainstorming or visualizing ideas

## Technology Used
* Frontend: Next.js/TypeScript
* Backend: Firebase/Golang
* DB: Firebase Realtime Database (for real-time editing), Cloud SQL
* Auth: Firebase
* Caching: Memorystore for Memcached
* Content Delivery: Cloud CDN
* CI/CD: Github Actions
* Other: Docker, Google Kubernetes Engine (GKE), NGINX, Excalidraw, CodeMirror, Gitpod

## Development considerations to think about
* Conflict Resolution: When multiple users are editing the same piece of information simultaneously, conflicts can occur. Real-time databases like Firebase handle this quite well, but you should still design your application's data flow and user interactions to minimize conflict scenarios.

* Presence System: Implementing a presence system can show which users are currently online and which part of the document they are interacting with. Firebase Realtime Database offers features that can be used to build such a system.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
