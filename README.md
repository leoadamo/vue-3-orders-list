# Vue 3 Orders List

A modern, fully typed Vue 3 application for managing and viewing orders.  
This project demonstrates best practices in Vue 3, TypeScript, composables, and component-driven architecture.

---

## 🚀 Technologies Used

- **Vue 3** – Modern frontend framework, using the Composition API and `<script setup>` for concise, reactive components.
- **TypeScript** – Provides strict typing and enhanced developer experience.
- **Vite** – Lightning-fast development server and build tool.
- **Vue Router** – Enables single-page application (SPA) navigation and routing.
- **Tailwind CSS** – Utility-first CSS framework for rapid, responsive styling.
- **Vitest** – Lightweight, fast unit testing framework for Vue components.
- **Husky** – Git hooks manager for enforcing pre-commit rules.
- **Commitizen** – Standardized commit message formatting.
- **Commitlint** – Ensures commit messages follow conventional commit conventions.
- **LintStaged** – Runs linters on staged Git files for cleaner commits.

---

## 📁 General App Structure

```
src/
├── assets/             # Static assets like images, fonts, and icons
├── components/         # Reusable Vue components
│   ├── AppRow/         # Row component for contacts or orders
│   └── OrderHeader/    # Header component for order lists
├── composables/        # Vue composables (custom hooks, e.g., useOrder, useContact)
├── plugins/            # Vue or third-party plugin setup
├── router/             # Vue Router configuration and routes
├── styles/             # Global CSS/Tailwind styles
├── types/              # TypeScript types and interfaces
├── utils/              # Utility functions (date formatting, API helpers, etc.)
├── views/              # Page-level components for different routes
├── App.vue             # Root Vue component
└── main.ts             # Application entry point
```

---

## 🛠️ Installation & Local Development

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/vue-3-orders-list.git
cd vue-3-orders-list
```

### 2. Install Dependencies

```sh
npm install
# or
yarn install
```

### 3. Create a local .env file

Copy the example environment file to create your local `.env`:

```sh
cp .env.example .env
```

### 4. Run the Development Server

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### 4. Run Unit Tests

```sh
npm run test
# or
yarn test
```

---

## 📝 Notes

- API endpoints are expected to be available at `/api/orders/:id`.
- All types are strictly enforced for reliability and maintainability.
- For custom icons, see the `src/assets/icons/` directory and update the icon mapping in config as needed.

---
