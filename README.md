# CYBER201 Phishing Demo

A social engineering awareness demonstration for CYBER201. This interactive demo shows users how much personal information can be collected by a website without their explicit consent.

## 🎯 Purpose

This project is designed for **educational purposes only** to teach students about:
- Browser fingerprinting and data collection techniques
- The importance of verifying website authenticity before entering credentials
- How phishing attacks gather user information
- Why you should always read Terms of Service

## ✨ Features

- **Realistic Login Page**: Mimics a legitimate sign-in interface
- **Data Collection Dashboard**: Displays all collected user data including:
  - Device & OS information with icons
  - Browser details
  - Hardware specs (CPU cores, RAM, GPU)
  - Screen resolution and display info
  - IP-based geolocation (city, country, ISP)
  - Network connection details
  - Timezone and language preferences
  - Browser fingerprint capabilities
- **Satirical Terms of Service**: Humorous terms highlighting why people should read ToS
- **Mobile-Responsive Design**: Works on phones, tablets, and desktops
- **"Password Almost Got You" Warning**: Snarky reminder about credential theft

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/awittmannTech/CYBER201-phishing-demo.git

# Navigate to project directory
cd CYBER201-phishing-demo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling with modern features
- **ipapi.co** - IP geolocation API

## ⚠️ Disclaimer

**This project is for educational and demonstration purposes only.**

Do NOT use this tool for:
- Actual phishing attacks
- Collecting real user credentials
- Any malicious purposes

Always obtain proper authorization before conducting security awareness training.

## 📄 License

MIT License - See LICENSE file for details.

## 👤 Author

Created for BYU-Idaho CYBER201 Security Awareness Training.
