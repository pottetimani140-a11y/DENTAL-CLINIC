import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: '123 Health Avenue, Bangalore, Karnataka',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@smilecareclinic.com',
    href: 'mailto:contact@smilecareclinic.com',
  },
];

const hours = [
  { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 2:00 PM' },
];

export default function Contact() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'} lg:col-span-1 space-y-6`}>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-6">SmileCare Dental Clinic</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-secondary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-text-muted uppercase tracking-wider mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-text-dark text-sm font-medium hover:text-secondary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-text-dark text-sm font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Opening Hours
              </h4>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-text-muted">{h.day}</span>
                    <span className="font-medium text-text-dark">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="font-bold text-primary mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { label: 'Instagram', path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z' },
                  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-text-muted hover:bg-secondary hover:text-white transition-all duration-200"
                    aria-label={s.label}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'} lg:col-span-2`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full min-h-[400px]">
              <iframe
                title="SmileCare Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9853816145336!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
