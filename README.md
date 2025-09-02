# Vijay K Andem - Gen-AI Enthusiast & Business Analyst Portfolio

A comprehensive, modern portfolio website built with Next.js 15, showcasing 13+ years of experience in business analysis, data visualization, and AI-augmented analytics. This portfolio serves as both a professional showcase and a demonstration of cutting-edge web development practices.

## 🚀 Key Features

### 🎨 **User Experience & Design**
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Optimized for all devices and screen sizes with mobile-first approach
- **Interactive Animations**: Smooth animations and transitions using Framer Motion
- **Light/Dark Mode**: Seamless theme switching with system preference detection
- **Professional UI**: Clean, modern interface with subtle animations and micro-interactions

### 💼 **Professional Showcase**
- **Tech Stack Visualization**: Interactive 3D cloud of technologies with hover effects and tooltips
- **Comprehensive Experience**: Detailed work history with achievements and key projects
- **Project Portfolio**: Advanced carousel showcasing data visualization and analytics projects
- **Resume Integration**: Modal-based resume viewing and direct PDF download functionality
- **Professional Branding**: Cohesive brand identity as "Gen-AI Enthusiast"

### 🤖 **AI Integration & Modern Features**
- **Ask AI Button**: Multi-platform AI integration allowing visitors to ask questions about the portfolio
- **LLM-Optimized Content**: Special endpoints for AI models (llms.txt, structured markdown routes)
- **Contact Form**: Full-featured contact form with server-side email processing via Nodemailer
- **Analytics Integration**: Vercel Analytics for visitor tracking and insights
- **SEO Optimized**: Advanced SEO with structured data and comprehensive meta tags

### 🔒 **Security & Performance**
- **Environment Variable Validation**: Robust server-side validation and error handling
- **SMTP Verification**: Real-time email service verification before sending
- **Security Best Practices**: Proper credential handling and sensitive data protection
- **Optimized Performance**: Code splitting, lazy loading, and build optimization

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion 12 for smooth transitions
- **UI Components**: Radix UI primitives (Dialog, Dropdown, Tabs, Tooltip, etc.)
- **Icons**: Lucide React with 500+ professional icons
- **Carousel**: Embla Carousel for project showcases
- **3D Effects**: React Icon Cloud for tech stack visualization

### **Backend & APIs**
- **Email Service**: Nodemailer with Gmail SMTP integration
- **API Routes**: Next.js 15 serverless functions
- **Environment Management**: Robust env validation and error handling
- **LLM Integration**: Custom endpoints for AI model consumption

### **Development & Tools**
- **Linting**: ESLint 9 with Next.js configuration
- **Type Safety**: Strict TypeScript configuration
- **Build System**: Next.js optimized builds with code splitting
- **Analytics**: Vercel Analytics integration
- **Version Control**: Git with semantic commit messages

### **Deployment & Infrastructure**
- **Platform**: Vercel with automatic deployments
- **Domain**: Custom domain with SSL
- **Environment**: Production/Preview environment separation
- **Monitoring**: Function logs and error tracking

## 🏃‍♂️ Getting Started

### Prerequisites

- **Node.js 18+** installed on your machine
- **npm or yarn** package manager
- **Git** for version control

### Local Development Setup

1. **Clone the repository:**
```bash
git clone https://github.com/And3m/vijayandem.github.io.git
cd vijay-k-andem-portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Environment Configuration (Optional for local development):**
```bash
# Copy example environment file
cp .env.local.example .env.local

# Edit .env.local with your configuration (only needed for contact form testing)
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will auto-reload as you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Development Features

- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type checking and IntelliSense
- **Linting**: Automatic code quality checks
- **Component Development**: Modular component architecture

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (root)/            # Main application routes
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page with form
│   │   │   ├── experience/    # Professional experience
│   │   │   └── projects/      # Project portfolio
│   │   ├── (llm)/            # AI/LLM optimized endpoints
│   │   │   ├── about.md/     # Structured about data
│   │   │   ├── projects.md/  # Structured project data
│   │   │   └── llms.txt/     # LLM consumption format
│   │   ├── api/              # API routes
│   │   │   └── contact/      # Contact form submission
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Homepage
│   ├── components/            # Reusable React components
│   │   ├── common/           # Shared components
│   │   │   ├── ask-ai-button.tsx     # AI integration button
│   │   │   ├── contact-form.tsx      # Contact form with validation
│   │   │   ├── resume-modal.tsx      # Resume viewer modal
│   │   │   └── theme-toggle.tsx      # Dark/light mode switch
│   │   ├── hero/             # Hero section components
│   │   ├── nav/              # Navigation components
│   │   ├── projects/         # Project showcase components
│   │   ├── techs/            # Technology visualization
│   │   └── ui/               # Base UI primitives (Radix UI)
│   ├── configs/              # Configuration files
│   │   ├── site.ts           # Site metadata and SEO
│   │   ├── nav.config.ts     # Navigation configuration
│   │   └── projects.ts       # Project data
│   ├── lib/                  # Utility functions
│   ├── sections/             # Page sections and layouts
│   └── types/                # TypeScript definitions
├── public/                   # Static assets
│   ├── branding/            # Logo and brand assets
│   ├── hero/                # Profile images
│   ├── projects/            # Project screenshots
│   └── resume.pdf           # Downloadable resume
├── VERCEL_SETUP.md          # Deployment guide
└── README.md                # This file
```

## 🚀 Deployment

### Production Deployment on Vercel

The portfolio is optimized for seamless deployment on Vercel with automatic builds and deployments.

#### **Prerequisites for Production:**
- Vercel account connected to your GitHub repository
- Environment variables configured (see [VERCEL_SETUP.md](./VERCEL_SETUP.md))

#### **Deployment Steps:**

1. **Build locally (optional):**
```bash
npm run build
```

2. **Automatic Deployment:**
   - Push to `main` branch triggers automatic deployment
   - Preview deployments created for all pull requests
   - Custom domains supported with SSL

3. **Environment Configuration:**
   - Contact form requires SMTP credentials
   - See [VERCEL_SETUP.md](./VERCEL_SETUP.md) for detailed setup

#### **Production Features:**
- ⚡ **Edge Runtime**: Optimized for global performance
- 🔒 **SSL Certificate**: Automatic HTTPS with custom domain
- 📊 **Analytics**: Built-in Vercel Analytics integration
- 🚀 **CDN**: Global content delivery network
- 📱 **Mobile Optimization**: PWA-ready with responsive design

#### **Monitoring & Maintenance:**
- Real-time function logs in Vercel dashboard
- Automatic error tracking and notifications
- Performance monitoring with Core Web Vitals
- Uptime monitoring and status checks

### Alternative Deployment Options

While optimized for Vercel, the portfolio can be deployed on:
- **Netlify**: Static site generation
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment
- **Traditional hosting**: Static export available

## 🔧 Key Features Deep Dive

### 🤖 **AI Integration**
The portfolio includes a sophisticated "Ask AI" button that allows visitors to inquire about professional experience, projects, or skills through multiple AI platforms:
- **Multi-Platform Support**: Claude, ChatGPT, Gemini, and Perplexity integration
- **Contextual Queries**: Pre-built prompts for common inquiries
- **LLM-Optimized Content**: Special endpoints providing structured data for AI consumption

### 📧 **Contact System**
Professional-grade contact form with robust backend processing:
- **Server-Side Validation**: Comprehensive form validation and sanitization
- **Email Integration**: Nodemailer with Gmail SMTP for reliable delivery
- **Error Handling**: Detailed error messages and fallback contact information
- **Responsive Design**: Mobile-optimized form with real-time validation

### 📊 **Analytics & SEO**
Built-in analytics and search engine optimization:
- **Vercel Analytics**: Privacy-focused visitor tracking
- **Structured Data**: Rich snippets for search engines
- **Open Graph Tags**: Social media optimization
- **Performance Monitoring**: Core Web Vitals tracking

## 🏆 Professional Highlights

This portfolio showcases expertise in:
- **Business Analysis**: 13+ years of experience in data-driven decision making
- **Data Visualization**: Advanced Power BI and Tableau implementations
- **AI Integration**: Cutting-edge AI tools and workflow optimization
- **Full-Stack Development**: Modern web development with latest technologies
- **User Experience**: Professional design and intuitive navigation

## 📧 Contact & Professional Links

**Vijay K Andem - Gen-AI Enthusiast & Business Analyst**
- 📧 **Email**: [vijayandem@gmail.com](mailto:vijayandem@gmail.com)
- 🌍 **Location**: Bengaluru, India
- 💼 **LinkedIn**: [vijay-andem](https://www.linkedin.com/in/vijay-andem-b2092223/)
- 🌐 **Portfolio**: [Live Demo](https://vijayandem.vercel.app)
- 📄 **Resume**: Available for download on the website

## 🤝 Contributing & Feedback

This portfolio represents professional work and personal projects. For collaboration inquiries or professional opportunities:

1. **Use the Contact Form**: Available on the website with direct email delivery
2. **LinkedIn Connection**: Professional networking and project discussions  
3. **Email Direct**: For urgent professional inquiries

## 📄 License & Usage

This project is **private and proprietary**. The code serves as a demonstration of technical capabilities and professional experience.

- ✅ **Viewing and learning** from the code structure
- ✅ **Inspiration** for your own portfolio projects
- ❌ **Direct copying** of content or professional information
- ❌ **Commercial use** without explicit permission

## 🙏 Acknowledgments

Special thanks to:
- **Next.js Team**: For the amazing framework and documentation
- **Vercel**: For seamless deployment and hosting
- **Radix UI**: For accessible component primitives
- **Framer Motion**: For smooth animations and interactions
- **Tailwind CSS**: For utility-first styling approach

---

**Built with ❤️ by Vijay K Andem | Gen-AI Enthusiast & Business Analyst**
