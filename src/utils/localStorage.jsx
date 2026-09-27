const employees =[
    {
      "id": 1,
      "firstName": "John",
      "email": "employee1@example.com",
      "password": "123",
      "taskNumber": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Complete Sales Report",
          "taskDescription": "Prepare and submit the monthly sales performance report.",
          "taskDate": "2026-09-02",
          "category": "Reporting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Client Follow-up",
          "taskDescription": "Follow up with the client regarding the pending proposal.",
          "taskDate": "2026-09-03",
          "category": "Client Management"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend the weekly sales team meeting.",
          "taskDate": "2026-09-01",
          "category": "Meeting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Update Customer Database",
          "taskDescription": "Update outdated customer contact information.",
          "taskDate": "2026-08-30",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for the upcoming quarterly business review.",
          "taskDate": "2026-09-05",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Sarah",
      "email": "employee2@example.com",
      "password": "123",
      "taskNumber": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Homepage",
          "taskDescription": "Create the initial design for the company homepage.",
          "taskDate": "2026-09-02",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Review UI Components",
          "taskDescription": "Review existing UI components and suggest improvements.",
          "taskDate": "2026-09-04",
          "category": "UI/UX"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Create Logo Concepts",
          "taskDescription": "Prepare three logo concepts for the new product.",
          "taskDate": "2026-08-29",
          "category": "Branding"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Mobile Mockup",
          "taskDescription": "Create a mobile version mockup for the dashboard.",
          "taskDate": "2026-08-28",
          "category": "Mobile Design"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prototype Dashboard",
          "taskDescription": "Build an interactive prototype of the employee dashboard.",
          "taskDate": "2026-09-06",
          "category": "Prototyping"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Michael",
      "email": "employee3@example.com",
      "password": "123",
      "taskNumber": {
        "active": 3,
        "newTask": 2,
        "completed": 2,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Investigate and fix the authentication issue in the login system.",
          "taskDate": "2026-09-02",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "API Integration",
          "taskDescription": "Integrate the employee API with the frontend application.",
          "taskDate": "2026-09-03",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Code Review",
          "taskDescription": "Review the pull requests submitted by the development team.",
          "taskDate": "2026-09-01",
          "category": "Code Review"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Database Setup",
          "taskDescription": "Set up the initial database structure for the application.",
          "taskDate": "2026-08-30",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Create unit tests for the authentication and task modules.",
          "taskDate": "2026-09-07",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Emily",
      "email": "employee4@example.com",
      "password": "123",
      "taskNumber": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Invoice",
          "taskDescription": "Prepare invoices for all completed client projects.",
          "taskDate": "2026-09-02",
          "category": "Finance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Expense Verification",
          "taskDescription": "Verify employee expense claims for the previous month.",
          "taskDate": "2026-09-04",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Budget Review",
          "taskDescription": "Review the department's monthly budget and expenses.",
          "taskDate": "2026-08-31",
          "category": "Budget"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Payment Reconciliation",
          "taskDescription": "Reconcile outstanding payments with the accounting records.",
          "taskDate": "2026-08-29",
          "category": "Accounting"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Quarterly Financial Report",
          "taskDescription": "Compile financial data for the quarterly management report.",
          "taskDate": "2026-09-08",
          "category": "Reporting"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "David",
      "email": "employee5@example.com",
      "password": "123",
      "taskNumber": {
        "active": 3,
        "newTask": 2,
        "completed": 2,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Recruitment Screening",
          "taskDescription": "Review applications and shortlist candidates for open positions.",
          "taskDate": "2026-09-02",
          "category": "Recruitment"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Schedule Interviews",
          "taskDescription": "Schedule interviews with shortlisted candidates.",
          "taskDate": "2026-09-03",
          "category": "Recruitment"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Employee Onboarding",
          "taskDescription": "Complete onboarding documentation for the new employee.",
          "taskDate": "2026-09-01",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update Employee Records",
          "taskDescription": "Update employee records with the latest information.",
          "taskDate": "2026-08-30",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Employee Feedback Survey",
          "taskDescription": "Send out the quarterly employee satisfaction survey.",
          "taskDate": "2026-09-06",
          "category": "Employee Relations"
        }
      ]
    }
  ]


const admin =[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };

}
