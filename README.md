# 🔐 Next.js Authentication with Better Auth

A **practice authentication project** built with **Next.js** and **Better Auth** to learn and implement modern authentication concepts.

The project focuses on building a complete authentication flow including **email/password authentication, Google OAuth, email verification, session management, and protected routes using Proxy**.

> 📚 **This is a practice project created for learning and improving my understanding of authentication in Next.js.**

## ✨ Features

* 📝 User Sign Up
* 🔑 Email & Password Sign In
* 🚪 Log Out
* 🔵 Continue with Google
* ✉️ Email Verification
* 🛡️ Protected Routes with Proxy
* 🔐 Session-based Authentication
* ⚡ Next.js App Router

## 🛠️ Tech Stack

* **Next.js**
* **React**
* **Better Auth**
* **JavaScript**
* **Tailwind CSS**
* **MongoDB**
* **Google OAuth**

## 📂 Authentication Flow

### Sign Up

Users can create an account using their email and password.

### Sign In

Registered users can sign in using their email and password or continue with Google.

### Email Verification

Users can verify their email address as part of the authentication flow.

### Google Authentication

Users can authenticate using their Google account through OAuth.

### Log Out

Authenticated users can securely end their session by logging out.

### Route Protection

Protected routes are handled using **Next.js Proxy**, preventing unauthenticated users from accessing restricted pages.

## 🧩 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js
│   └── ...
├── lib/
│   └── auth.js
└── proxy.js
```

> The exact structure may vary depending on the implementation.

## 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required authentication, database, and Google OAuth environment variables.

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 🎯 Learning Goals

This practice project was built to understand and implement:

* Authentication setup with Better Auth
* Email/password authentication
* Google OAuth
* Session management
* Email verification
* Protected routes
* Next.js Proxy
* Database integration
* Authentication flow in the Next.js App Router

## 👨‍💻 Author

**Abdus Salam Talukder**

Software Engineering Student
Daffodil International University
