import { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const testimonials = [
  {
    name: 'Anjali Venkatesh',
    role: 'Patient since 2022',
    rating: 5,
    text: 'Very professional and friendly team. The clinic was clean and comfortable, and the entire treatment process was explained clearly. I felt completely at ease throughout my visit.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Vikram Patel',
    role: 'Patient since 2023',
    rating: 5,
    text: 'Excellent experience getting my teeth whitened. Dr. Ananya was incredibly thorough and the results exceeded my expectations. Highly recommend SmileCare to everyone!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Meera Krishnan',
    role: 'Patient since 2021',
    rating: 5,
    text: 'My children actually look forward to their dental visits! The pediatric team is wonderful with kids. The clinic has a warm, welcoming atmosphere that puts everyone at ease.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our happy patients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-secondary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <StarRating rating={t.rating} />

              <p className="text-text-muted leading-relaxed mt-4 mb-6 text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={`Photo of ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-primary text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
