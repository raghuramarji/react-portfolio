# Professional React Portfolio

A modern, responsive portfolio website built with React, Redux, and contemporary web technologies. This portfolio showcases professional experience as a Software Trainee, EDI Developer, and Business Analyst with a focus on clean design and optimal user experience.

## 🚀 Live Demo

Visit the portfolio: [https://raghuramarji.github.io/react-portfolio](https://raghuramarji.github.io/react-portfolio)

## ✨ Features

- **Modern React Architecture**: Built with functional components and React Hooks
- **State Management**: Redux integration for seamless navigation and state control
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Timeline Components**: Professional work experience and project showcases
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Glass Morphism UI**: Contemporary design with backdrop filters and gradients
- **Real-time Features**: Live work experience timer and expandable skill sections
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Optimized for fast loading and smooth interactions

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with Hooks
- **Redux** - State management
- **Vite** - Fast build tool and development server
- **React Icons** - Comprehensive icon library

### Styling
- **Modern CSS** - CSS Grid, Flexbox, CSS Variables
- **Glass Morphism** - Backdrop filters and modern UI effects
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Smooth transitions and interactions

### Development Tools
- **ESLint** - Code quality and consistency
- **Git** - Version control
- **VS Code** - Development environment

## 📁 Project Structure

```
src/
├── components/
│   ├── NavBar.jsx          # Navigation with smooth scrolling
│   ├── Home.jsx            # Hero section and introduction
│   ├── Skills.jsx          # Technical skills showcase
│   ├── Projects.jsx        # Project timeline with details
│   ├── WorkExperience.jsx  # Professional experience timeline
│   ├── Contacts.jsx        # Contact form and information
│   └── BackToTop.jsx       # Floating back-to-top button
├── styling/
│   ├── projects.css        # Project section styles
│   ├── contacts.css        # Contact section styles
│   ├── workExperience.css  # Work experience styles
│   └── backToTop.css       # Back-to-top button styles
├── redux/
│   ├── store.js           # Redux store configuration
│   ├── reducer.js         # State reducers
│   └── action.js          # Action creators
├── assets/
│   └── *.jpg, *.jpeg      # Images and visual assets
└── App.jsx                # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/raghuramarji/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📚 Documentation

For detailed information about the concepts, patterns, and syntax used in this portfolio, refer to:
- [`PORTFOLIO_CONCEPTS_GUIDE.txt`](./PORTFOLIO_CONCEPTS_GUIDE.txt) - Comprehensive guide covering all technologies and patterns used

## 🎨 Key Sections

### Home
Professional introduction with animated elements and modern typography.

### Skills
Interactive skill cards with expandable descriptions, covering:
- Frontend Development (React, JavaScript, HTML/CSS)
- Backend Technologies (Java, Spring Boot, SQL)
- Tools & Platforms (IBM Sterling Integrator, Eclipse, Git)
- Process Knowledge (BPML, EDI, Business Analysis)

### Projects
Timeline-based project showcase featuring:
- **EDI Integration System** - B2B data exchange solutions
- **Customer Management Portal** - React-based dashboard
- **Process Automation Tools** - Workflow optimization
- **Business Intelligence Dashboard** - Data visualization

### Work Experience
Real-time work experience tracker with:
- Live timer showing current experience duration
- Expandable skill sections for each role
- Timeline visualization of career progression

### Contact
Functional contact form with:
- Form validation
- Professional contact information
- Social media links
- Location details

## 🔧 Customization

### Updating Personal Information
1. Modify content in respective component files
2. Update images in `src/assets/`
3. Adjust styling in component-specific CSS files

### Adding New Sections
1. Create new component in `src/components/`
2. Add corresponding CSS file in `src/styling/`
3. Import and integrate in `App.jsx`
4. Update navigation in `NavBar.jsx`

### Modifying Styles
- Global styles: `src/index.css` and `src/App.css`
- Component-specific styles: `src/styling/[component].css`
- CSS variables are defined in `:root` for easy theme customization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Raghu Ramarji**
- GitHub: [@raghuramarji](https://github.com/raghuramarji)
- LinkedIn: [Raghu Ramarji](https://linkedin.com/in/raghuramarji)
- Email: raghuramarji@example.com

---

⭐ Star this repository if you found it helpful!
