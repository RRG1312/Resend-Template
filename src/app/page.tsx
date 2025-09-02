import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Our Dev Team
          </h1>
          <p className="text-lg text-gray-600">
            Have a question or need support? Send us an email using the form below.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
