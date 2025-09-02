# 📧 Contact Form Template with Resend

A modern, responsive contact form built with **Next.js 15** and **Resend** email service. This template provides a complete solution for collecting user inquiries and automatically sending them via email.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Email Integration**: Powered by Resend for reliable email delivery
- **Responsive Design**: Styled with Tailwind CSS for mobile-first design
- **Error Handling**: Comprehensive error handling with user feedback
- **Fast Performance**: Optimized with Turbopack for lightning-fast development

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Resend API key** (get one at [resend.com](https://resend.com))

### 1. Clone the Repository

```bash
git clone https://github.com/RRG1312/plantilla_resend_form.git
cd plantilla_resend_form
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure Resend API Key

> ⚠️ **Important**: You must update the API key before using this template.

Open `src/app/api/send-email/route.ts` and replace the placeholder API key:

```typescript
// Replace 'you_wont_see_mmy_api_key_xd' with your actual Resend API key
const resend = new Resend('your_actual_resend_api_key_here');
```

**To get your Resend API key:**
1. Sign up at [resend.com](https://resend.com)
2. Go to your dashboard
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it in the route file

### 4. Customize Email Settings

In the same `route.ts` file, update the email configuration:

```typescript
await resend.emails.send({
  from: 'your-domain@resend.dev', // Update with your verified domain
  to: 'your-email@example.com',   // Update with your email address
  subject: `Contact Form: Question from ${name} ${surname}`,
  html: emailContent
});
```

### 5. Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Development

### Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts      # Email API endpoint
│   ├── page.tsx              # Main contact form page
│   └── layout.tsx            # Root layout
└── components/               # Reusable components (if any)
```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Form Fields

The contact form includes:
- **Name** (required)
- **Surname** (required)
- **Email** (required)
- **Description/Message** (required)


## 📧 Email Template

The email template includes:
- Professional HTML formatting
- All form field data
- Proper line breaks for messages
- Clear subject line with sender information

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to a Git repository
2. Import your project on [Vercel](https://vercel.com)
3. Add your Resend API key as an environment variable (recommended)
4. Deploy

### Environment Variables (Recommended)

For production, it's recommended to use environment variables for the API key:

1. Create a `.env.local` file:
```bash
RESEND_API_KEY=your_actual_api_key_here
```

2. Update `route.ts` to use the environment variable:
```typescript
const resend = new Resend(process.env.RESEND_API_KEY);
```

3. Add `.env.local` to your `.gitignore` file

## 🎨 Customization

- **Styling**: Modify Tailwind CSS classes in components
- **Form Fields**: Add or remove fields in the form and API route
- **Email Template**: Customize the HTML email template in `route.ts`
- **Validation**: Add custom validation rules as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and feature requests!

---

Built with ❤️ using [Next.js](https://nextjs.org) and [Resend](https://resend.com)
