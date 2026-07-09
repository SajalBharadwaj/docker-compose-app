# docker-compose-app 
# Multi-Container Automation with Docker Compose & Redis 🚀

Welcome to my Day 2 DevOps Challenge! This repository demonstrates how to orchestrate a multi-container application architecture using **Docker Compose**, featuring a Node.js web application seamlessly connected to a high-performance **Redis Database**. The entire workflow is fully automated with a **GitHub Actions CI Pipeline**.

---

## 🛠️ Tech Stack Used
* **Backend Framework:** Node.js & Express.js
* **Database:** Redis (In-Memory Key-Value Store)
* **Containerization:** Docker & Docker Compose
* **CI/CD Automation:** GitHub Actions (Ubuntu Environment)

---

## 🏗️ Architecture & How It Works
Instead of using hardcoded IP addresses, this project utilizes **Docker Embedded DNS Networking**. The Node.js application communicates securely with the Redis database container over an isolated internal bridge network using the service name `redis-db`.

1. **`web-app` service:** Dynamically builds from the local `Dockerfile` and exposes port `3000`.
2. **`redis-db` service:** Pulls the lightweight, secure, official `redis:alpine` image and operates on port `6379`.
3. **Orchestration Control:** The `depends_on` instruction guarantees that the Redis database container fully initializes before the web application spins up, avoiding runtime connection errors.

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have **Docker** and **Docker Compose** installed on your system.

### Deployment Steps:
1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/SajalBharadwaj/docker-compose-challenge.git](https://github.com/SajalBharadwaj/docker-compose-challenge.git)
   cd docker-compose-challenge
