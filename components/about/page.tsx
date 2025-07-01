import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => (
  <h3 className={className}>
    {children}
  </h3>
);

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 ${className}`}>
    {children}
  </div>
);

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "" }) => (
  <p className={className}>
    {children}
  </p>
);

const BeautifulTherapyServices: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-100 rounded-full opacity-10 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-2"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Compassionate, evidence-based therapy approaches designed to support your journey toward healing, growth, and emotional well-being
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Anxiety & Stress Management */}
          <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Peaceful meditation and mindfulness practice" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors duration-300">
                Anxiety & Stress Management
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                Discover inner peace through proven mindfulness techniques and personalized coping strategies. We'll work together to identify your unique triggers and build a toolkit for lasting calm and confidence.
              </CardDescription>
              
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  $200
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Individual Session
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Relationship Counseling */}
          <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Couple holding hands in supportive therapy session" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-emerald-800 transition-colors duration-300">
                Relationship Counseling
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                Transform your connections through enhanced communication and deeper understanding. Whether navigating partnership challenges or family dynamics, we'll build bridges to stronger, more fulfilling relationships.
              </CardDescription>
              
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  $240
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Couples Session
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trauma Recovery */}
          <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Serene therapy space promoting healing and recovery" 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-purple-800 transition-colors duration-300">
                Trauma Recovery
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                Embark on a healing journey with compassionate, evidence-based trauma therapy. In our safe therapeutic space, we'll gently process difficult experiences and cultivate resilience for your brighter future.
              </CardDescription>
              
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  $200
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Individual Session
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Ready to begin your journey?</span>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulTherapyServices;