import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const doctors = [
  {
    name: 'Dr. Priya Sharma',
    specialization: 'Senior Dentist',
    experience: '10+ Years Experience',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    bio: 'Expert in general and preventive dentistry with a gentle approach.',
  },
  {
    name: 'Dr. Rahul Mehta',
    specialization: 'Orthodontist',
    experience: '8+ Years Experience',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    bio: 'Specialist in braces, aligners, and smile alignment treatments.',
  },
  {
    name: 'Dr. Ananya Rao',
    specialization: 'Cosmetic Dentist',
    experience: '7+ Years Experience',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=400&fit=crop&crop=face',
    bio: 'Creating beautiful smiles through advanced cosmetic procedures.',
  },
];

export default function Doctors() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Our team of experienced dental professionals is dedicated to providing you with the best care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}, ${doctor.specialization} at SmileCare Dental Clinic`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social icons overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary hover:text-white transition-colors" aria-label={`Call ${doctor.name}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary hover:text-white transition-colors" aria-label={`Email ${doctor.name}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary hover:text-white transition-colors" aria-label={`LinkedIn of ${doctor.name}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {doctor.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-2">
                  {doctor.specialization}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-muted text-sm">{doctor.experience}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {doctor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
