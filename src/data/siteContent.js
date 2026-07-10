import {
  FaBookOpen,
  FaBrain,
  FaCalendarCheck,
  FaCertificate,
  FaChartLine,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaCrown,
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLanguage,
  FaLaptopCode,
  FaMedal,
  FaMobileAlt,
  FaPhoneAlt,
  FaPlayCircle,
  FaQuestionCircle,
  FaRegLightbulb,
  FaRocket,
  FaStar,
  FaTelegramPlane,
  FaTrophy,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const launchDate = "2026-10-15T09:00:00+05:30";

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "10K+", label: "Waitlist Goal" },
  { value: "95+", label: "Lighthouse Target" },
  { value: "25%", label: "Conversion Goal" },
];

export const aboutPillars = [
  {
    title: "Mission",
    copy: "Make high-quality JNV entrance preparation accessible to students across India through structured digital learning.",
  },
  {
    title: "Vision",
    copy: "Build a trusted online learning community where every aspirant can practice, improve, and prepare with confidence.",
  },
  {
    title: "Why Laksh JNV",
    copy: "A focused platform for JNV aspirants with classes, tests, notes, analytics, and parent-friendly progress visibility.",
  },
];

export const chooseFeatures = [
  { icon: FaChalkboardTeacher, title: "Live Classes", description: "Interactive classes led by expert teachers with exam-focused guidance." },
  { icon: FaPlayCircle, title: "Recorded Lectures", description: "Replay lessons anytime with concise topic coverage and revision support." },
  { icon: FaClipboardCheck, title: "Mock Tests", description: "Timed test practice designed around JNV entrance exam patterns." },
  { icon: FaBrain, title: "AI Performance Analysis", description: "Smart insights to identify strengths, weak areas, and next steps." },
  { icon: FaCalendarCheck, title: "Daily Practice", description: "Habit-building questions, quizzes, and study streaks for consistent preparation." },
  { icon: FaUsers, title: "Expert Teachers", description: "Guidance from educators who understand student doubts and parent expectations." },
  { icon: FaBookOpen, title: "Study Notes", description: "Premium notes, summaries, and formulas organized for faster revision." },
  { icon: FaMobileAlt, title: "Mobile Learning", description: "A responsive experience ready for students learning on any screen." },
];

export const previewSlides = [
  {
    title: "Student Dashboard",
    subtitle: "Daily plan, test score, progress streak",
    metric: "82%",
    bars: ["w-11/12", "w-8/12", "w-10/12"],
  },
  {
    title: "Course Screen",
    subtitle: "Chapter-wise learning path",
    metric: "24",
    bars: ["w-9/12", "w-7/12", "w-11/12"],
  },
  {
    title: "Video Player",
    subtitle: "Live and recorded classes",
    metric: "HD",
    bars: ["w-10/12", "w-8/12", "w-6/12"],
  },
  {
    title: "Test Interface",
    subtitle: "Timed practice with instant review",
    metric: "60m",
    bars: ["w-8/12", "w-11/12", "w-9/12"],
  },
  {
    title: "Analytics",
    subtitle: "AI-backed performance summary",
    metric: "+18%",
    bars: ["w-7/12", "w-10/12", "w-8/12"],
  },
  {
    title: "Mobile App",
    subtitle: "Learning on every device",
    metric: "App",
    bars: ["w-10/12", "w-6/12", "w-9/12"],
  },
];

export const upcomingFeatures = [
  { icon: FaChalkboardTeacher, title: "Live Classes" },
  { icon: FaQuestionCircle, title: "Daily Quiz" },
  { icon: FaClipboardCheck, title: "Mock Tests" },
  { icon: FaTrophy, title: "Leaderboard" },
  { icon: FaHeadset, title: "Doubt Solving" },
  { icon: FaCertificate, title: "Certificates" },
  { icon: FaUsers, title: "Parent Dashboard" },
  { icon: FaChartLine, title: "Smart Analytics" },
  { icon: FaRegLightbulb, title: "AI Recommendations" },
  { icon: FaDownload, title: "Offline Learning" },
];

export const benefits = [
  { icon: FaStar, title: "Free Mock Test", description: "Be first to access a launch-week practice test." },
  { icon: FaRocket, title: "Early Access", description: "Explore the platform before the public launch." },
  { icon: FaCrown, title: "Launch Discount", description: "Unlock early-bird offers for premium plans." },
  { icon: FaBookOpen, title: "Premium Notes", description: "Receive curated launch notes and revision sheets." },
  { icon: FaMedal, title: "Exclusive Live Session", description: "Attend a launch masterclass with expert teachers." },
  { icon: FaHeadset, title: "Priority Support", description: "Get faster onboarding help during the launch window." },
];

export const faqs = [
  {
    question: "When will Laksh JNV launch?",
    answer: "The launch is currently planned for October 15, 2026. Join the waitlist to receive confirmed launch updates first.",
  },
  {
    question: "Is registration free?",
    answer: "Yes. Joining the waitlist and subscribing for launch updates is free.",
  },
  {
    question: "Will there be live classes?",
    answer: "Yes. Live classes are part of the planned platform experience, along with recordings for revision.",
  },
  {
    question: "Is there a mobile app?",
    answer: "A mobile-first learning experience is planned, with app-focused features included in the roadmap.",
  },
  {
    question: "Which languages are supported?",
    answer: "Hindi and English are planned first, with additional regional language support considered for future phases.",
  },
  {
    question: "Will there be mock tests?",
    answer: "Yes. Mock tests, daily quizzes, analytics, and practice tracking are core upcoming features.",
  },
];

export const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Telegram", href: "https://telegram.org", icon: FaTelegramPlane },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "WhatsApp", href: "https://whatsapp.com", icon: FaWhatsapp },
];

export const contact = [
  { icon: FaEnvelope, label: "Email", value: "info@lakshjnv.in", href: "mailto:info@lakshjnv.in" },
  { icon: FaPhoneAlt, label: "Phone", value: "+91 81494 42326", href: "tel:+918149442326" },
  {
    icon: FaLaptopCode,
    label: "Address",
    value: "ShivsunderNagar, Dighori, Nagpur, Maharashtra 440034, India",
    href: "https://www.google.com/maps/search/?api=1&query=ShivsunderNagar%2C%20Dighori%2C%20Nagpur%2C%20Maharashtra%20440034%2C%20India",
  },
  { icon: FaLanguage, label: "Languages", value: "Hindi, English", href: "#waitlist" },
];
