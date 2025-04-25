import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Send, Mail, Phone, MapPin, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    to_name: 'Yashwanth', // Your name as the recipient
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRefs.current) {
      contentRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (contentRefs.current) {
        contentRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_z7k9yzl',
        'template_j7ds1da',
        formRef.current,
        'wQpBFZ0XJEuF06q1Q'
      );

      setShowSuccess(true);
      setFormData({
        to_name: 'Yashwanth',
        from_name: '',
        from_email: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        action: (
          <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-green-500" />
          </div>
        ),
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        action: (
          <div className="h-8 w-8 bg-red-500/20 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-red-500" />
          </div>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section 
        id="contact" 
        ref={sectionRef}
        className="py-20 pb-8 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div 
              ref={(el) => contentRefs.current[0] = el}
              className="opacity-0 transition-all duration-700"
            >
              <h3 className="text-2xl font-bold mb-6 neon-text-purple">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-pink/10 rounded-lg">
                    <Mail className="h-5 w-5 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <a href="mailto:yashwanthpothala04@gmail.com" className="text-gray-300 hover:text-neon-pink transition-colors">
                      yashwanthpothala04@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-purple/10 rounded-lg">
                    <Phone className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <a href="tel:+919989982567" className="text-gray-300 hover:text-neon-purple transition-colors">
                      +91 9989982567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-teal/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-neon-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-300">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/__yash__04___?igsh=ZTV3OXlpbzJ4bzF3" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 hover:neon-shadow-purple transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/YashwanthPoth13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 hover:neon-shadow-teal transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/Y-a-s-h-0-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 hover:neon-shadow-pink transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/yashwanth-pothala-419023259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 hover:neon-shadow-purple transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div 
              ref={(el) => contentRefs.current[1] = el}
              className="opacity-0 transition-all duration-700 glass-effect p-8 rounded-lg border border-white/10"
            >
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6"
              >
                <div>
                  <label htmlFor="from_name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="from_email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white resize-none"
                    required
                  ></textarea>
                </div>

                {/* Hidden input for to_name */}
                <input
                  type="hidden"
                  name="to_name"
                  value={formData.to_name}
                />
                
                <div className="relative">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-opacity-70 cursor-not-allowed' 
                        : 'hover:neon-shadow-teal'
                    } transition-all bg-gradient-to-r from-neon-purple to-neon-teal border-0`}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                  
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute -bottom-16 left-0 right-0 text-center"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400">
                        <FaPaperPlane className="animate-bounce" />
                        <span>Message sent successfully!</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-400 border-t border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-sm">© 2025 Yashwanth Pothala. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">Crafted with passion and creativity</p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
