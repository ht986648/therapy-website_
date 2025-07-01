'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Mail, Clock, Star, Heart, Shield, Users, ChevronDown } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };


  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium text-gray-900">
              Dr. Serena Blake, PsyD
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6953848/pexels-photo-6953848.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Dr. Serena Blake, PsyD
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100 font-light">
              Clinical Psychologist
            </p>
            
            <div className="max-w-3xl mx-auto pt-6">
              <p className="text-xl md:text-2xl text-blue-50 leading-relaxed">
                Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma
              </p>
            </div>
            
            <div className="pt-12">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-12 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.
                </p>
                <p>
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">8+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Client Sessions</div>
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Office Hours</h3>
                  <p className="text-gray-700">In-person: Tue & Thu, 10 AM–6 PM</p>
                  <p className="text-gray-700">Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Contact</h3>
                  <p className="text-gray-700">Phone: (323) 555-0192</p>
                  <p className="text-gray-700">Email: serena@blakepsychology.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=2000&userId=&cache=v2" 
                  alt="Dr. Serena Blake" 
                  className="w-96 h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Services
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Personalized therapy approaches tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Anxiety & Stress Management" 
                  className="w-full h-56 object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Anxiety & Stress Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed mb-4">
                  Learn effective coping strategies and mindfulness techniques to manage anxiety and stress. Together, we'll identify triggers and develop personalized tools to help you find calm and confidence in daily life.
                </CardDescription>
                <div className="font-bold text-blue-900">$200 / individual session</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Relationship Counseling" 
                  className="w-full h-56 object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Relationship Counseling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed mb-4">
                  Strengthen communication, rebuild trust, and deepen emotional connections. Whether you're dating, married, or navigating family dynamics, I'll help you create healthier, more fulfilling relationships.
                </CardDescription>
                <div className="font-bold text-blue-900">$240 / couples session</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7176205/pexels-photo-7176205.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Trauma Recovery" 
                  className="w-full h-56 object-cover"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Trauma Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed mb-4">
                  Heal from past experiences with evidence-based trauma therapy approaches. In a safe, supportive environment, we'll work together to process difficult memories and build resilience for your future.
                </CardDescription>
                <div className="font-bold text-blue-900">$200 / individual session</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              FAQs
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Common questions about therapy and working together
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="insurance" className="border border-gray-200 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-blue-900">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                I do not accept insurance directly, but I provide a superbill that you can submit to your insurance company for potential reimbursement. Many clients find this gives them more flexibility in their care while still accessing some insurance benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online-sessions" className="border border-gray-200 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-blue-900">
                Are online sessions available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                Yes! I offer secure virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater convenience and accessibility for many clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-gray-200 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-blue-900">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                I require 24-hour notice for cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Contact
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Ready to begin your journey? I'm here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Office Location</h4>
                      <p className="text-gray-700">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                      <p className="text-gray-700">(323) 555-0192</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                      <p className="text-gray-700">serena@blakepsychology.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Office Hours</h4>
                      <div className="text-gray-700">
                        <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                        <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <Card className="p-8 text-center border-0 shadow-lg">
                  <div className="text-amber-500 mb-4">
                    <Heart className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Thank You!</h3>
                  <p className="text-gray-700">
                    Your message has been received. I'll get back to you within 24 hours to schedule your free consultation.
                  </p>
                </Card>
              ) : (
                <Card className="p-8 border-0 shadow-lg">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-semibold text-blue-900">Send a Message</CardTitle>
                    <CardDescription className="text-gray-700">
                      Fill out the form below and I'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-medium text-blue-900">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.name ? 'border-red-500' : ''}`}
                          />
                          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-medium text-blue-900">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.phone ? 'border-red-500' : ''}`}
                          />
                          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-medium text-blue-900">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-medium text-blue-900">What brings you here? *</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.message ? 'border-red-500' : ''}`}
                          placeholder="Tell me a bit about what you're looking for support with..."
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="font-medium text-blue-900">Preferred time to reach you *</Label>
                        <Input
                          id="preferredTime"
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.preferredTime ? 'border-red-500' : ''}`}
                          placeholder="e.g., Weekday mornings, evenings after 6pm"
                        />
                        {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime}</p>}
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agree"
                          checked={formData.agreeToContact}
                          onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                          className={`mt-1 ${errors.agreeToContact ? 'border-red-500' : ''}`}
                        />
                        <div className="space-y-1">
                          <Label 
                            htmlFor="agree" 
                            className="text-sm leading-relaxed cursor-pointer text-blue-900"
                          >
                            I agree to be contacted via phone or email to schedule my consultation *
                          </Label>
                          {errors.agreeToContact && (
                            <p className="text-sm text-red-500">{errors.agreeToContact}</p>
                          )}
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Dr. Serena Blake, PsyD</h3>
          <p className="text-blue-200 mb-6">Licensed Clinical Psychologist</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-blue-200">
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p>(323) 555-0192</p>
            <p>serena@blakepsychology.com</p>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-blue-300">
            <p>&copy; 2024 Dr. Serena Blake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}