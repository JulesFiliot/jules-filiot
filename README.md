## julesfiliot.com - Backend

This project serves as a platform for me to exhibit my skills and identity. The web application has been constructed using React for the front-end and NestJS for the back-end. All of the code for both the React and NestJS apps is self made, clean and well structured. The front-end components have been created from scratch without the use of toolkits such as bootstrap. The back-end offers access to a REST API that includes Swagger documentation. The architecture of the back-end is monolithic, and I have incorporated an authentication system with password hashing and salting. For secure API requests, a JWT token is utilized for authentication. The PostgreSQL database is managed using TypeORM entities and migration files.

**This is the backend repository. The frontend repository can be found [here](https://github.com/JulesFiliot/jules-filiot-front).**

## CI/CD

The Frontend Deployment Pipeline automatically deploys the React application to Cloudflare Pages with each push to the main branch, ensuring the availability of the latest stable version. Concurrently, the Backend Deployment Pipeline deploys the NestJS application to the Google Cloud Platform under the same conditions, maintaining consistent backend service updates. Together, these pipelines optimize the development workflow, maintaining seamless integration and reliability of the system’s components.