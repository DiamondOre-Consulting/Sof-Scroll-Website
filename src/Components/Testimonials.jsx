import Marquee from "react-fast-marquee"; // Or use your custom Marquee component if available

const testimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The quality and service are unmatched. Highly recommend.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Incredible attention to detail. A true masterpiece.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Incredible attention to detail. A true masterpiece.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Incredible attention to detail. A true masterpiece.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "A seamless experience from start to finish. Exceptional work.",
    img: "https://avatar.vercel.sh/james",
  },
];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="h-40 p-4 mx-4 transition duration-300 ease-in-out border w-[18rem] rounded-xl bg-gray-50 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <img className="w-10 h-10 rounded-full" src={img} alt={name} />
        <div>
          <figcaption className="text-sm font-medium text-gray-900 ">
            {name}
          </figcaption>
          <p className="text-xs font-light text-gray-500 ">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-gray-700 ">
        {body}
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <div className="relative flex flex-col items-center justify-center py-16 ">
      <h2 className="mx-auto mb-10 text-4xl font-semibold text-gray-700 md:text-5xl mf ">
        Our Clients’ Feedback
      </h2>

      <Marquee pauseOnHover gradient={false} speed={50} className="mb-8">
        {firstRow.map((testimonial, index) => (
          <ReviewCard key={index + 1} {...testimonial} />
        ))}
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={50} direction="right">
        {secondRow.map((testimonial, index) => (
          <ReviewCard key={index + 1} {...testimonial} />
        ))}
      </Marquee>

      <div className="absolute inset-y-0 left-0 z-20 w-1/4 pointer-events-none bg-gradient-to-r from-gray-100"></div>
      <div className="absolute inset-y-0 right-0 z-20 w-1/4 pointer-events-none bg-gradient-to-l from-gray-100"></div>
    </div>
  );
};

export default Testimonials;
