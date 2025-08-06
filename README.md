# React Profile Page with Tailwind CSS

This is a responsive profile page built with **React.js** and **Tailwind CSS**, showcasing Staff Data such as name, contact info, social links, and more.

Deployed link -> https://staff-profile-nu.vercel.app/

---

## ✨ Features

- Responsive grid layout using Tailwind CSS
- Dynamic user profile with name, picture, email, phone, and academic level
- Social media icons with links (LinkedIn, Facebook, Skype, Email)
- Scroll-to-end indicator animation
- Form with Save and Close buttons at the bottom
- Fully scrollable container with fixed height

---

🧰 Tech Stack

⚛️ React.js (via Create React App)

💨 Tailwind CSS v3.4.17

📦 Lucide React icons

🛠 ESLint via react-scripts


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-profile-page.git
cd react-profile-page

2. Install dependencies
  npm install

3. Start the development server
  npm start

📁 Project Structure
my-app/
├── public/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── GeneralInformation.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileTab.jsx
│   │   ├── RelatedInformation.jsx
│   │   ├── RelatedInfoTab.jsx
│   │   ├── StaffProfileForm.jsx
│   │   ├── StaffProfileList.jsx
│   │   └── StaffProfileView.jsx
│   ├── pages/
│   │   └── StaffProfileManager.jsx   # Main page
│   ├── types/
│   │   └── staffProfile.js           # Profile type definitions
│   ├── utils/
│   │   └── dateUtils.jsx             # Utility functions
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
