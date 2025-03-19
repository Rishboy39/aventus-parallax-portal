
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import RevealText from './ui/RevealText';
import { toast } from 'sonner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  ///Vercel
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you soon.',
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <RevealText>
              <p className="text-aventus-red font-medium uppercase tracking-wider mb-3">
                Contact Us
              </p>
            </RevealText>
            
            <RevealText delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-aventus-black">
                Get in <span className="text-gradient-red">Touch</span>
              </h1>
            </RevealText>
            
            <RevealText delay={400} className="max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg">
                We'd love to hear from you. Reach out for sponsorship opportunities, partnerships, or just to say hello.
              </p>
            </RevealText>
          </div>
          
          <RevealText delay={600}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aventus-red focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aventus-red focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aventus-red focus:border-transparent transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aventus-red focus:border-transparent transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
              
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "bg-aventus-red hover:bg-aventus-red-dark text-white px-8 py-3 rounded-full transition-all duration-300",
                    "inline-flex items-center justify-center",
                    "shadow-lg hover:shadow-aventus-red/20",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </RevealText>
        </div>
      </div>
    </div>
  );
}
