# Employee Management System (EMS)

A real-time, responsive **Employee Management System** built with **React** and **Tailwind CSS**. This application features a dual-dashboard architecture that allows Administrators to assign tasks and monitor progress globally, while enabling Employees to view, manage, and update their personal task statuses instantly.

## 🚀 Key Features

- **Dual-Role Authentication:** Separate dashboard environments tailored specifically for Admin (`admin@me.com`) and standard Employee profiles.
- **State-Lifted Architecture:** Built with a central data pipeline in `App.jsx`, ensuring modifications on one side of the platform propagate instantly across the entire application workspace without requiring page reloads.
- **Task Creation & Management Form:** Admin-exclusive interface to generate tasks, define target deadlines, log categories, and delegate work via string-matching identifiers.
- **Real-Time KPI Trackers:** Interactive counter grids that automatically increment or decrement values (`New`, `Active`, `Completed`, `Failed`) dynamically as tasks shift operational states.
- **Persistent Data Store:** Utilizes `localStorage` handlers to safely cache authorization states, active tracking records, and system progress loops across browser sessions.
- **Responsive Interface:** Styled natively with Tailwind CSS utilities configured for cross-device fluidity, dark-mode styling variables, and optimized input inner spacing padding.

---

## 🛠️ Tech Stack & Directory Structure

- **Core Library:** React (Functional Hooks, Context, State Lifters)
- **Styling Utility:** Tailwind CSS
- **Data Persistence:** Web Storage Browser API (`localStorage`)

```text
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx               # Validates user authorization credentials
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx       # Global tracking parent container
│   │   └── EmployeeDashboard.jsx    # Personal workplace view layer
│   └── other/
│       ├── Header.jsx              # Session greetings and logout dispatchers
│       ├── CreateTask.jsx          # Form input validation and object creators
│       ├── AllTask.jsx             # Grid matrix compiling worker metrics
│       └── TaskListNumber.jsx      # Adaptive numerical accumulator panel
└── TaskList/
    ├── TaskList.jsx                # Layout row determining visual task types
    ├── AcceptTask.jsx              # Active card deck binding functional triggers
    ├── NewTask.jsx                 # Dynamic card for unaccepted items
    ├── CompleteTask.jsx            # Static panel preserving green success flags
    └── FailedTask.jsx              # Static panel archiving yellow warning flags
```

---

## 💻 Installation & Quickstart

To run this application locally, follow these straightforward steps:

### 1. Clone the repository
```bash
git clone https://github.com
cd YOUR_REPO_NAME
```

### 2. Install dependency modules
```bash
npm install
```

### 3. Spin up the local development web server
```bash
npm run dev
```
Open the provided local URL (typically `http://localhost:5173`) in your browser to view the application.

---

## 🔒 Test Credentials

You can use the following default credentials initialized in your local storage engine to evaluate the dual-dashboard mechanics:

### Administrator Account
- **Email:** `admin@me.com`
- **Password:** `123`

### Employee Accounts
Check your system initialization scripts or look into your browser's **Developer Tools -> Application -> Local Storage -> employees** payload to locate specific generated names (such as *John* or *Sarah*) and their corresponding passwords.