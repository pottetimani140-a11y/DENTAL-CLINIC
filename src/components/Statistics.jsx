import { useEffect, useState, useRef } from 'react';

const stats = [
  { end: 10, suffix: '+', label: 'Years of Experience', icon: 'calendar' },
  { end: 5000, suffix: '+', label: 'Happy Patients', icon: 'users' },
  { end: 15, suffix: '+', label: 'Dental Treatments', icon: 'tools' },
  { end: 4.9, suffix: '/5', label: 'Patient Rating', icon: 'star', isDecimal: true },
];

function StatIcon({ type }) {
  const cls = "w-8 h-8 text-white";
  switch (type) {
    case 'calendar':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      );
    case 'users':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case 'tools':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 5.384a2.025 2.025 0 01-2.864-2.864l5.384-5.384m2.864 2.864L18.5 7.5m-3.92 7.67L8.25 12.25m5.33-4.42l3.92-3.92m-6.18 6.18l-3.92-3.92" />
        </svg>
      );
    case 'star':
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

function AnimatedStat({ stat, isVisible }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const isDecimal = stat.isDecimal;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = eased * stat.end;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(stat.end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, stat.end, stat.isDecimal]);

  return (
    <div className="text-center group">
      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <StatIcon type={stat.icon} />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-white/70 text-sm font-medium">{stat.label}</div>
    </div>
  );
}

export default function Statistics() {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden"
      ref={setRef}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Trusted by thousands of patients for quality dental care.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
