# Women's Health AI Assistant

A full-stack web application that helps women track their menstrual cycle phases and receive personalized AI-powered health tips and wellness quotes.

![Women's Health AI Assistant](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Express](https://img.shields.io/badge/Express-4.21.2-green)
![Groq AI](https://img.shields.io/badge/Groq-AI-orange)

## 🌟 Features

- **Phase-Based Dynamic Theming**: Beautiful UI that changes colors and themes based on menstrual cycle phase
- **AI-Powered Wellness Quotes**: Generate unique, personalized quotes tailored to your current cycle phase
- **Symptom Tracker**: Get AI-generated health tips based on symptoms and cycle phase
- **Quick Symptom Selection**: Common symptoms available with one click
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Modern React hooks and async/await patterns

### Backend
- **Express.js** RESTful API
- **Groq AI** (Llama 3.3 70B) for AI responses
- **Winston** for logging
- **Helmet** for security
- **Rate limiting** for API protection

## 📁 Project Structure

```
rove/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API routes
│   │   ├── services/       # AI service & prompts
│   │   ├── middleware/     # Validation & error handling
│   │   ├── utils/          # Logger
│   │   └── server.js       # Express server
│   ├── logs/               # Application logs
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── services/       # API client
    │   ├── utils/          # Config & constants
    │   ├── App.jsx         # Main app component
    │   └── main.jsx        # Entry point
    ├── index.html
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Groq API key (free at [console.groq.com](https://console.groq.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/womens-health-ai-assistant.git
   cd womens-health-ai-assistant
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3001
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   
   Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:3001/api
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on http://localhost:3001

2. **Start the frontend** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   App runs on http://localhost:5173

## 🎨 Menstrual Cycle Phases

The app supports four cycle phases, each with unique theming:

- **Menstrual** (Days 1-5): Red/pink theme, Droplets icon
- **Follicular** (Days 1-13): Yellow/orange theme, Sun icon
- **Ovulation** (Days 14-16): Pink/purple theme, Sparkles icon
- **Luteal** (Days 17-28): Blue/indigo theme, Moon icon

## 🤖 AI Integration

The application uses **Groq AI** with the Llama 3.3 70B model for generating responses. Advanced prompt engineering ensures:

- Unique quotes every time (high temperature, randomized prompts)
- Context-aware responses based on cycle phase
- Personalized health tips considering symptoms + phase
- Warm, empathetic, and supportive tone

## 📝 API Endpoints

- `POST /api/quotes` - Generate wellness quote for a phase
- `POST /api/health-tips` - Get health tip for a symptom and phase
- `GET /api/health` - Health check endpoint

## 🔒 Security Features

- Helmet.js for HTTP headers security
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Input validation middleware
- Environment variable protection

## 📦 Dependencies

### Backend
- express
- groq-sdk
- cors
- helmet
- express-rate-limit
- winston
- dotenv

### Frontend
- react
- react-dom
- lucide-react
- tailwindcss
- vite

## 🎯 Key Features Explained

### Unique Quote Generation
Each quote request includes:
- Random quote style selection (12 different styles)
- Random format selection (affirmation, reminder, statement, etc.)
- Unique request ID and timestamp
- Time-of-day context
- High temperature (1.2) for maximum creativity

### Dynamic Theming
The entire UI adapts based on selected phase:
- Background colors
- Button gradients
- Icon colors
- Card styling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Built with ❤️ for women's health and wellness

## 🙏 Acknowledgments

- Groq AI for providing free API access
- Lucide for beautiful icons
- Tailwind CSS for amazing utility classes

---

**Note**: This application provides general wellness information and should not replace professional medical advice.

