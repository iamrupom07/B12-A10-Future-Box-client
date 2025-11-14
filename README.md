# 📦 Habit Tracker Client

This repository contains the client-side (frontend) code for **Habit Tracker**, a full-stack web application. This is the User Interface (UI) that users interact with in their browser. It communicates with the [Habit Tracker Server](https://github.com/iamrupom07/B12-A10-Future-Box-server) to fetch and display data.

## 🔗 Quick Links

* **Live Website:** `[https://habittrackerrupom.netlify.app/]`
* **Server-Side Repository:** `[https://github.com/iamrupom07/B12-A10-Future-Box-server]`
* **Live Server API:** `[https://habittrackerapi.vercel.app/]`

---

## ✨ Features

* **User Authentication:** Secure user registration, login (including social login via [Google]), and logout.
* **Responsive Design:** Fully responsive UI that works on desktop, tablet, and mobile devices.
* **Protected Routes:** User-specific pages like "My Habits" are protected and only accessible to logged-in users.
* **Dynamic Data:** Fetches and displays dynamic data (like [products, services, etc.]) from the server.
* **CRUD Operations:** Users can create, read, update, and delete [their orders/items] through the UI.

---

## 🛠️ Technology Stack

* **Framework:** [React.js](https://reactjs.org/)
* **Routing:** [React Router](https://reactrouter.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [daisyUI](https://daisyui.com/) (or [Bootstrap / Material-UI])
* **Authentication:** [Firebase Authentication](https://firebase.google.com/products/auth)
* **Hosting:** [Firebase Hosting / Netlify / Vercel]

---


## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) (which includes npm) installed on your local machine.


### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/iamrupom07/B12-A10-Future-Box-client.git](https://github.com/iamrupom07/B12-A10-Future-Box-client.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd B12-A10-Future-Box-client
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Create an environment file:**
    Create a `.env.local` file in the root of the project. Add the URL of your **local** or **live** server API.

    *(Note: React projects require variables to start with `VITE_` or `REACT_APP_`)*

    **If using Vite (e.g., `VITE_`):**
    ```.env.local
    VITE_API_URL=[http://localhost:5000]
    ```
    **If using Create React App (e.g., `REACT_APP_`):**
    ```.env.local
    REACT_APP_API_URL=[http://localhost:5000]
    ```

    *(If you are using Firebase, add your Firebase config keys here as well.)*

5.  **Run the application:**
    ```sh
    npm run dev
    ```
    or
    ```sh
    npm start
    ```

The application will open in your browser at `http://localhost:5173` (for Vite)

---


## 🧑‍💻 Author

* **Rupom (iamrupom07)**
* GitHub: [@iamrupom07](https://github.com/iamrupom07)



