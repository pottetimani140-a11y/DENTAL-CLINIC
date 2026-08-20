import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const features = [
  { icon: 'svg-graduation', label: 'Experienced Dentists' },
  { icon: 'svg-microscope', label: 'Modern Equipment' },
  { icon: 'svg-clinic', label: 'Comfortable Environment' },
  { icon: 'svg-heart', label: 'Personalized Treatment' },
  { icon: 'svg-family', label: 'Family-Friendly Care' },
];

function FeatureIcon({ type }) {
  const cls = "w-6 h-6 text-secondary";
  switch (type) {
    case 'svg-graduation':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14v7m0 0l-3-3m3 3l3-3" />
        </svg>
      );
    case 'svg-microscope':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      );
    case 'svg-clinic':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      );
    case 'svg-heart':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case 'svg-family':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function About() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'} relative`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 to-teal/10 rounded-3xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&h=500&fit=crop&crop=center"
                  alt="Modern SmileCare dental clinic interior with professional equipment"
                  className="w-full h-auto object-cover aspect-[7/5]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-text-muted font-medium">Years of<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              Trusted Dental Care for Your Whole Family
            </h2>

            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              At SmileCare Dental Clinic, we provide comprehensive dental care using modern technology and patient-focused treatment. Our team of experienced professionals is dedicated to making every visit comfortable and effective.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-accent transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FeatureIcon type={f.icon} />
                  </div>
                  <span className="font-medium text-text-dark text-sm">{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
