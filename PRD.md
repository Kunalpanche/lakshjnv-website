# Product Requirements Document (PRD)

# Laksh JNV – Coming Soon Website

**Version:** 1.0  
**Status:** Draft  
**Product:** Laksh JNV Coming Soon Landing Page  
**Prepared For:** Laksh JNV Platform Launch

---

# 1. Product Overview

## Purpose

The Laksh JNV Coming Soon website serves as the official pre-launch landing page for the Laksh JNV online learning platform.

The primary objective is to build anticipation, collect waitlist registrations, establish trust among students and parents, and prepare a qualified audience before the official platform launch.

The website should deliver a premium educational brand experience while maintaining excellent performance, accessibility, responsiveness, and SEO optimization.

---

# 2. Goals

## Business Goals

- Build brand awareness
- Generate qualified leads
- Increase launch-day registrations
- Grow social media audience
- Improve organic SEO before launch
- Create trust with students and parents

## User Goals

Students should be able to:

- Understand what Laksh JNV offers
- Learn about upcoming features
- Join the waitlist
- Subscribe for launch updates
- Follow official social media

---

# 3. Target Audience

### Primary Audience

- Students preparing for Jawahar Navodaya Vidyalaya Entrance Exam
- Parents of JNV Aspirants

### Secondary Audience

- Teachers
- Schools
- Coaching Institutes

---

# 4. Success Metrics (KPIs)

| Metric | Target |
|---------|--------|
| Waitlist Registrations | 10,000+ |
| Newsletter Subscribers | 5,000+ |
| Landing Page Conversion Rate | >25% |
| Bounce Rate | <35% |
| Lighthouse Performance | >95 |
| Mobile Accessibility Score | >95 |
| Average Session Duration | >2 Minutes |

---

# 5. Technology Stack

## Frontend

- ReactJS
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL (Supabase)

## Authentication

- OTP Verification (Optional)

## Email

- Resend

## Deployment

Frontend

- Vercel

Backend

- Railway / Render

Analytics

- Google Analytics 4
- Microsoft Clarity

---

# 6. User Journey

```
Visitor
    │
    ▼
Landing Page
    │
    ▼
Reads About Laksh JNV
    │
    ▼
Views Features
    │
    ▼
Checks Launch Countdown
    │
    ▼
Joins Waitlist
    │
    ▼
Receives Confirmation Email
    │
    ▼
Gets Launch Updates
```

---

# 7. Information Architecture

```
Home
│
├── Hero
├── Countdown
├── About Laksh JNV
├── Features
├── Platform Preview
├── Upcoming Features
├── Benefits
├── Waitlist Form
├── FAQ
├── Newsletter
├── Social Links
├── Contact
└── Footer
```

---

# 8. Functional Requirements

---

## 8.1 Hero Section

### Description

The first screen should immediately communicate the value proposition.

### Components

- Logo
- Navigation
- Main Heading
- Short Description
- Primary CTA
- Secondary CTA
- Animated Illustration

### Buttons

- Join Waitlist
- Notify Me

---

## 8.2 Launch Countdown

### Description

Shows the remaining time until launch.

### Features

- Live countdown
- Auto refresh
- Configurable launch date
- Smooth animation
- Mobile responsive

---

## 8.3 About Section

Explain

- Mission
- Vision
- Why Laksh JNV
- Platform Overview

---

## 8.4 Why Choose Laksh JNV

Display feature cards.

Each card contains

- Icon
- Title
- Description

Example

- Live Classes
- Recorded Lectures
- Mock Tests
- AI Performance Analysis
- Daily Practice
- Expert Teachers
- Study Notes
- Mobile Learning

---

## 8.5 Platform Preview

Display screenshots of

- Student Dashboard
- Course Screen
- Video Player
- Test Interface
- Analytics
- Mobile App

Features

- Carousel
- Auto Slide
- Lightbox

---

## 8.6 Upcoming Features

Grid Layout

Include

- Live Classes
- Daily Quiz
- Mock Tests
- Leaderboard
- Doubt Solving
- Certificates
- Parent Dashboard
- Smart Analytics
- AI Recommendations
- Offline Learning

---

## 8.7 Benefits Section

Highlight launch benefits.

Examples

- Free Mock Test
- Early Access
- Launch Discount
- Premium Notes
- Exclusive Live Session
- Priority Support

---

## 8.8 Waitlist Registration

### Fields

- Full Name
- Email
- Mobile Number
- Class
- State
- Preferred Language

### Validation

- Required Fields
- Email Format
- Phone Validation
- Duplicate Prevention

### Success Flow

```
Submit
    │
    ▼
Validate
    │
    ▼
Store Database
    │
    ▼
Send Welcome Email
    │
    ▼
Success Message
```

---

## 8.9 Newsletter

Collect

- Email Address

Purpose

Launch announcements

---

## 8.10 FAQ

Accordion Component

Questions

- When will Laksh JNV launch?
- Is registration free?
- Will there be live classes?
- Is there a mobile app?
- Which languages are supported?
- Will there be mock tests?

---

## 8.11 Contact Section

Display

- Email
- Phone
- Address

Optional

Embedded Google Map

---

## 8.12 Footer

Links

- About
- Privacy Policy
- Terms & Conditions
- Refund Policy
- Contact
- Social Media

---

# 9. Admin Features

Admin should be able to

- View waitlist
- Search users
- Delete records
- Export CSV
- Update launch date
- Update website content
- Update social links
- Send launch emails

---

# 10. Email Automation

## Welcome Email

Automatically sent after registration.

Contains

- Thank you message
- Launch information
- Social media links
- Support contact

---

# 11. Database Design

## Waitlist Table

| Column | Type |
|----------|------|
| id | UUID |
| full_name | VARCHAR |
| email | VARCHAR |
| phone | VARCHAR |
| class | VARCHAR |
| state | VARCHAR |
| language | VARCHAR |
| created_at | TIMESTAMP |

---

## Newsletter Table

| Column | Type |
|----------|------|
| id | UUID |
| email | VARCHAR |
| created_at | TIMESTAMP |

---

# 12. API Endpoints

## Waitlist

### Create Registration

```
POST /api/waitlist
```

### Get Registrations

```
GET /api/admin/waitlist
```

### Delete Registration

```
DELETE /api/admin/waitlist/:id
```

### Export CSV

```
GET /api/admin/waitlist/export
```

---

## Newsletter

### Subscribe

```
POST /api/newsletter
```

### Get Subscribers

```
GET /api/admin/newsletter
```

---

## Settings

### Fetch Website Settings

```
GET /api/settings
```

### Update Website Settings

```
PUT /api/admin/settings
```

---

# 13. UI/UX Requirements

## Design Language

- Modern
- Educational
- Premium
- Clean
- Minimal

---

## Color Palette

Primary

```
#FF6B00
```

Secondary

```
#1E3A8A
```

Accent

```
#FACC15
```

Background

```
#F8FAFC
```

---

## Typography

Primary Font

- Poppins

Secondary Font

- Inter

---

## Animations

- Fade In
- Slide Up
- Floating Icons
- Hover Cards
- Scroll Reveal
- Smooth Page Transitions

---

# 14. Non-Functional Requirements

## Performance

- First Paint < 1.5 seconds
- Lighthouse Score >95
- Image Optimization
- Lazy Loading
- Code Splitting

---

## Security

- HTTPS
- Helmet
- Rate Limiting
- Input Validation
- SQL Injection Protection
- XSS Prevention
- Environment Variables

---

## SEO

- Meta Tags
- Open Graph
- Structured Data
- Robots.txt
- Sitemap.xml
- Canonical URLs

---

## Accessibility

- WCAG AA Compliance
- Keyboard Navigation
- Screen Reader Support
- Proper Contrast Ratio
- Alt Text

---

## Responsiveness

Support

- Mobile
- Tablet
- Laptop
- Desktop
- Large Displays

---

# 15. Development Roadmap

## Phase 1

- Branding
- UI Design
- Wireframes

---

## Phase 2

- Landing Page Development
- Responsive Layout
- Animations

---

## Phase 3

- Backend APIs
- Database
- Waitlist Integration

---

## Phase 4

- Email Automation
- Admin Dashboard
- Newsletter

---

## Phase 5

- SEO Optimization
- Performance Optimization
- Accessibility Testing

---

## Phase 6

- QA Testing
- Bug Fixes
- Production Deployment

---

# 16. Future Enhancements

- Dark Mode
- Multi-language Support
- Referral System
- AI Chat Assistant
- WhatsApp Notifications
- PWA Support
- Blog
- Student Community
- Live Visitor Counter
- Gamified Countdown
- Launch Event Registration

---

# 17. Risks

| Risk | Mitigation |
|------|------------|
| Low waitlist conversion | Strong CTAs and social proof |
| Spam registrations | CAPTCHA and validation |
| Email delivery issues | Resend with retry logic |
| Slow loading | Image optimization and lazy loading |
| SEO ranking delay | Early indexing and structured data |

---

# 18. Final Vision

The Laksh JNV Coming Soon website should create excitement, establish credibility, and maximize lead generation before launch. It should provide a polished, responsive, high-performance experience while serving as the first impression of the Laksh JNV brand. By combining modern design, intuitive user experience, and robust backend functionality, the website will effectively convert visitors into engaged early adopters and build a strong community ahead of the platform's official release.