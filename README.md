# Wall Street Docs Task

**Project Setup Guide**

Welcome to our project! Follow these steps to set up the project locally on your machine.

### Step 1: Clone the Repository
Clone the project repository from GitHub using the following command:
```bash
git clone https://github.com/sahariar-safin/wsd-task.git
```

### Step 2: Navigate to Project Directory
Navigate into the project directory:
```bash
cd wsd-task
```

### Step 3: Install Dependencies
The project consists of two folders: `client` and `server`. You need to install dependencies for both.

#### For Server:
Navigate to the `server` folder:
```bash
cd server
```
Run npm install to install dependencies:
```bash
npm install
```

#### For Client:
Navigate to the `client` folder:
```bash
cd ../client
```
Run npm install to install dependencies:
```bash
npm install
```

### Step 4: Set up Environment Variables
Create an `.env` file in the `server` folder. Add the following environment variable:

```plaintext
DATABASE_URL=<your-database-url>
```

Replace `<your-database-url>` with the actual URL of your database.

### Step 5: Start the Server
Navigate back to the `server` folder if you are not already there:
```bash
cd ../server
```
Start the server in development mode:
```bash
npm run start:dev
```

### Step 6: Start the Client
Navigate back to the `client` folder if you are not already there:
```bash
cd ../client
```
Start the frontend development server:
```bash
npm run dev
```

### Step 7: Access the Application
Once both the server and client are running, you can access the application locally by opening your web browser and navigating to `http://localhost:3000`.

That's it! You've successfully set up the project locally on your machine. Happy coding!
