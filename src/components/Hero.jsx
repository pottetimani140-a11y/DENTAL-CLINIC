import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Happy Patients' },
  { value: '4.9/5', label: 'Patient Rating' },
];

export default function Hero() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-32 left-10 w-20 h-20 border-2 border-white/10 rounded-2xl rotate-12" />
      <div className="absolute bottom-40 right-32 w-16 h-16 border-2 border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-teal/40 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-teal-light text-sm font-medium">Trusted by 5,000+ patients</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Smile,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal">
                Our Priority
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
              Modern dental care with experienced professionals, advanced technology, and personalized treatment for the whole family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-light text-primary font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book an Appointment
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explore Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-teal-light font-bold text-lg">{stat.value.charAt(0)}{stat.value.charAt(1) === '+' || stat.value.charAt(1) === '/' ? '+' : ''}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'} relative`}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 to-secondary/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&crop=center"
                  alt="Professional dental care - dentist examining a patient in a modern clinic"
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  loading="eager"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm">100% Safe</div>
                    <div className="text-text-muted text-xs">Sterilized Equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
