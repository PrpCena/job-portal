import { IconStar, IconStarFilled } from "@tabler/icons-react";

const Testimonials = () => {
    const testimonials = [
      {
        name: "Aanya Deshmukh",
        rating: 5,
        review:
          "Amazing platform! I found remote work that aligns with my skills in just 3 days.",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Meera Joshi",
        rating: 5,
        review:
          "The AI recommendations were spot-on! I landed an interview within a week.",
        avatar:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Nisha Kapoor",
        rating: 4,
        review:
          "Loved the UI and job suggestions. Could use more startup listings though.",
        avatar:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Kevin Mbatha",
        rating: 5,
        review:
          "Excellent support and real-time application tracking. Got a great remote offer!",
        avatar:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
      },
    ];
      

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < rating ? (
          <IconStarFilled size={16} className="text-bright-sun-400" />
        ) : (
          <IconStar size={16} className="text-bright-sun-400" />
        )}
      </span>
    ));
  };

  return (
    <div className="bg-mine-shaft-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-mine-shaft-100 mb-4">
            What <span className="text-bright-sun-400">User</span> says about
            us?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-mine-shaft-800 rounded-lg p-6 border border-mine-shaft-700 hover:border-bright-sun-400 transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-mine-shaft-100 font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-mine-shaft-300 text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
