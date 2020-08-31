# Rabobank Customer Statement Processor web client

## Objective

Rabobank receives monthly deliveries of customer statement records. This information is delivered in JSON Format. These records need to be validated.

### Condition
Implement a REST service which receives the customer statement JSON as a POST data, Perform the below validations.  
1. All transaction references should be unique  
2. The end balance needs to be validated (Start Balance +/- Mutation = End Balance)  

## Technology
- Angular 8
- NPM - Node package manager
- Visual Studio Code

## Run the Application

- After running the Spring boot application

- Download https://github.com/AnandKenta/rabo-bank-customer and follow the ReadMe.md file for running the application

- Install Node packages - npm install

- To run application - npm run start

- Application will start in http://localhost:4200/

## Implementation Details
- Used Angular 8 CLI
- Implemented 1 Service , Created 3 components
- CORS issue is resolved using the proxy.conf.json file. added the backend Rest url.

