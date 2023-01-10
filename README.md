# Alrouf-Backend
This is a **NodeJS** back-end application and is part of a bundled system for sorting CVs and exporting a report.
The back-end part of the system is responsible for recieving data sent out from the front-end and saving it into a working local database.
This system was meant for demonstration purposes only.

## Other parts of the system
* [Alrouf front-end](https://github.com/tenmayos/Alrouf-frontend)
* [Alrouf Reporter](https://github.com/tenmayos/Alrouf-Reporter)

## Prerequisites
* [MongoDB](https://www.mongodb.com/try/download/community) Installed on the local host with the default ports **27017**.
    * Alternatively a docker image of [MongoDB](https://hub.docker.com/_/mongo) could be used so long as it runs on ports **27017**.
* [NodeJS](https://nodejs.org/en/) JavaScript runtime environment which comes along with NPM (Node package manager) which installs all the required dependencies.

## How to use

1. We will need to install the required dependencies using NPM ![npm install](/Ref_Images/npm.png)

 * We should see the following message when the installation of dependencies is complete ![dependencies installed successfully](/Ref_Images/npm-installed.png)

2. Run the api through the entry file index.js using the following command `**node index.js**`
 * If all is well the following output should be displayed in the terminal ![API is waiting for calls](/Ref_Images/running.png)

Now this small API should be ready to recieve requests from the frontend with the assumption that they are running on the same machine.