# Backend Portfolio

Modern portfolio website for backend developers, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Runtime**: Node.js 20+

## ✨ Features

- 📱 Fully responsive design
- 🌓 Dark mode support
- ⚡ Server-side rendering (SSR)
- 🎨 Modern UI with Tailwind CSS
- 🔌 RESTful API routes
- 📊 Dynamic project showcase
- 💼 Professional experience timeline
- 📧 Contact form with API integration

## 🛠️ API Routes

The portfolio includes functional backend API routes demonstrating backend development skills:

### Available Endpoints

- **GET** `/api/health` - Health check endpoint
- **GET** `/api/projects` - List all projects (supports `?tech=` and `?limit=` query params)
- **GET** `/api/projects/[id]` - Get specific project by ID
- **GET** `/api/stats` - Portfolio statistics and metrics
- **POST** `/api/contact` - Contact form submission

### Example API Usage

```bash
# Get all projects
curl http://localhost:3000/api/projects

# Filter projects by technology
curl http://localhost:3000/api/projects?tech=node

# Get portfolio stats
curl http://localhost:3000/api/stats

# Health check
curl http://localhost:3000/api/health
```

## 📦 Getting Started

### Prerequisites

- Node.js 20+ (use NVM: `nvm use`)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── contact/      # Contact form endpoint
│   │   ├── projects/     # Projects API
│   │   ├── stats/        # Statistics endpoint
│   │   └── health/       # Health check
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts          # Portfolio data
└── public/              # Static assets
```

## 🎨 Customization

Edit the portfolio data in `lib/data.ts`:

- Personal information
- Skills and technologies
- Projects and achievements
- Work experience
- Certifications

## 🚀 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Your portfolio will be live!

### Environment Variables

No environment variables required for basic deployment. Add these if you want to extend functionality:

- `SMTP_HOST` - For email notifications
- `DATABASE_URL` - For storing contact form submissions
- `ANALYTICS_ID` - For analytics tracking

## 📝 License

MIT License - feel free to use this portfolio template for your own projects!
