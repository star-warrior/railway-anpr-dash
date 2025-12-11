# 🚂 Railways ANPR Dashboard

A modern, real-time Automatic Number Plate Recognition (ANPR) dashboard for tracking railway gate entries. Built with React and Vite.

## ✨ Features

- **📹 Live Camera Feed**: Real-time integration with webcam to simulate ANPR camera.
- **📊 Interactive Analytics**: Visual charts for traffic trends and vehicle distribution.
- **🔔 Real-time Alerts**: Instant notifications for blacklisted vehicles or unauthorized access.
- **📱 Responsive Design**: Fully responsive UI for desktop and tablet usage.
- **🔐 Authentication**: Secure login interface for operators.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Routing**: [React Router](https://reactrouter.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 📥 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/star-warrior/railway-anpr-dash.git
    cd railway-anpr-dash
    cd anpr-ui
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### 🏃‍♂️ Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

> **Note**: You will be prompted to allow camera access for the live feed feature.

## 📂 Project Structure

```
anpr-ui/
├── src/
│   ├── components/    # Reusable UI components (LiveFeed, Charts, etc.)
│   ├── pages/         # Route pages (Login, Dashboard)
│   ├── assets/        # Static assets
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
├── public/            # Public assets
└── package.json       # Dependencies and scripts
```

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

Built with ❤️ by the ANPR Team.
