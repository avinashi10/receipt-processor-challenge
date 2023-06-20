# Fetch My Points App

## Introduction
This repository contains the source code for the Fetch My Points App, which is a backend webservice that takes in receipt data and returns the points earned for the purchase.

## Running the App with Docker

Follow the steps below to run the Fetch My Points App on your machine using Docker.

### Prerequisites
- Docker installed on your machine. Refer to the official Docker installation instructions for your operating system.

### Clone the Repository
Clone the repository for the Receipt Processor App by running the following command:
`git clone https://github.com/avinashi10/receipt-processor-challenge.git`

### Navigate to the Project Directory
Open a command line or terminal and navigate to the directory where you cloned the repository.

### Build the Docker Image
Build the Docker image for the app by running the following command:
`docker build -t fetch-my-points .`


### Run the Docker Container
Run the Docker container based on the built image using the following command:
`docker run -d -p 1000:3000 --name fetch_the_dog --rm fetch-my-points`

### Access the Webserver
The webserver is now live. You can check that it's live by navigating to http://localhost:1000 in your web browser. Then test the server using an API testing tool like Postman.
