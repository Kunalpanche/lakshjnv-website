import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLanguage,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaDownload,
  FaBell,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const launchDate = "2026-07-15T09:00:00+05:30";

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
    title: "Why Laksh JNV Academy",
    copy: "A focused platform for JNV aspirants with classes, tests, notes, analytics, and parent-friendly progress visibility.",
  },
];

export const chooseFeatures = [
  {
    icon: "/icons/live_classes_new_1783831286446.png",
    title: "Live Classes",
    description:
      "Interactive classes led by expert teachers with exam-focused guidance.",
  },
  {
    icon: "/icons/recorded_lectures_1783830943122.png",
    title: "Recorded Lectures",
    description:
      "Replay lessons anytime with concise topic coverage and revision support.",
  },
  {
    icon: "/icons/mock_tests_1783830951697.png",
    title: "Mock Tests",
    description:
      "Timed test practice designed around JNV entrance exam patterns.",
  },
  {
    icon: "/icons/ai_analysis_1783830960531.png",
    title: "AI Performance Analysis",
    description:
      "Smart insights to identify strengths, weak areas, and next steps.",
  },
  {
    icon: "/icons/daily_practice_1783830971677.png",
    title: "Daily Practice",
    description:
      "Habit-building questions, quizzes, and study streaks for consistent preparation.",
  },
  {
    icon: "/icons/expert_teachers_1783830982459.png",
    title: "Expert Teachers",
    description:
      "Guidance from educators who understand student doubts and parent expectations.",
  },
  {
    icon: "/icons/study_notes_1783830991994.png",
    title: "Study Notes",
    description:
      "Premium notes, summaries, and formulas organized for faster revision.",
  },
  {
    icon: "/icons/mobile_learning_1783831001740.png",
    title: "Mobile Learning",
    description:
      "A responsive experience ready for students learning on any screen.",
  },
];



export const benefits = [
  {
    badge: "50 Marks",
    icon: "/icons/module_mental.png",
    title: "Mental Ability",
    description: "Master pattern recognition and logical reasoning for the MAT section.",
  },
  {
    badge: "25 Marks",
    icon: "/icons/module_arithmetic.png",
    title: "Arithmetic Test",
    description: "Learn short tricks and concepts to solve math problems quickly.",
  },
  {
    badge: "25 Marks",
    icon: "/icons/module_language.png",
    title: "Language Test",
    description: "Improve reading comprehension and grammar for English or Hindi.",
  },
  {
    badge: "PDFs",
    icon: "/icons/module_notes.png",
    title: "Revision Notes",
    description: "Download premium PDF notes summarizing every important topic.",
  },
  {
    badge: "10+ Tests",
    icon: "/icons/module_tests.png",
    title: "Full Mock Tests",
    description: "Practice with real-exam level mock tests to secure top ranks.",
  },
  {
    badge: "Live",
    icon: "/icons/module_doubt.png",
    title: "Doubt Clearing",
    description: "Get your difficult questions answered by expert Navodaya teachers.",
  },
];

export const faqs = [
  {
    question: "When will Laksh JNV Academy launch?",
    answer:
      "The launch is currently planned for July 15, 2026. Join the waitlist to receive confirmed launch updates first.",
  },
  {
    question: "Is registration free?",
    answer:
      "Yes. Joining the waitlist and subscribing for launch updates is free.",
  },
  {
    question: "Will there be live classes?",
    answer:
      "Yes. Live classes are part of the planned platform experience, along with recordings for revision.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "A mobile-first learning experience is planned, with app-focused features included in the roadmap.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Hindi and English are planned first, with additional regional language support considered for future phases.",
  },
  {
    question: "Will there be mock tests?",
    answer:
      "Yes. Mock tests, daily quizzes, analytics, and practice tracking are core upcoming features.",
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
  {
    icon: FaEnvelope,
    label: "Email",
    value: "info@lakshjnv.in",
    href: "mailto:info@lakshjnv.in",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 81494 42326",
    href: "tel:+918149442326",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: "ShivsunderNagar, Dighori, Nagpur, Maharashtra 440034, India",
    href: "https://www.google.com/maps/search/?api=1&query=ShivsunderNagar%2C%20Dighori%2C%20Nagpur%2C%20Maharashtra%20440034%2C%20India",
  },
  {
    icon: FaLanguage,
    label: "Languages",
    value: "Hindi, English",
    href: "#waitlist",
  },
];

export const appDownloadContent = {
  title: "Learning on the Go!",
  description:
    "Download the Laksh JNV Academy mobile app for seamless access to mock tests, recorded lectures, and offline study materials. Your child's preparation, right in your pocket.",
  benefits: [
    {
      icon: FaDownload,
      title: "Offline Mode",
      description: "Download videos and notes to study without internet.",
    },
    {
      icon: FaBell,
      title: "Smart Alerts",
      description: "Get push notifications before live classes begin.",
    },
    {
      icon: FaChartLine,
      title: "Parent Dashboard",
      description: "Track daily practice and mock test scores easily.",
    },
  ],
};
