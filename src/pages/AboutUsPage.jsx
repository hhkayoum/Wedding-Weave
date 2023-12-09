import { Helmet } from "react-helmet-async";

const AboutUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Wedding Wave | About Us </title>
      </Helmet>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-center pt-20 lg:py-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#836b6c] sm:text-4xl">
            About Our Matrimony Platform
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 py-10">
          <div className="text-center md:text-left">
            <p className="mt-4 text-xl text-gray-600">
              Welcome to our Matrimony platform! We are dedicated to helping
              individuals find their life partners. Our platform is designed to
              make the search for a life partner simpler and more enjoyable.
            </p>
            <h3 className="text-xl font-bold mt-8 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to connect people looking for meaningful
              relationships. We strive to provide a safe and secure platform
              where individuals can explore and connect with potential life
              partners.
            </p>
            <h3 className="text-xl font-bold mt-8 mb-2">Our Values</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Commitment to user privacy and security</li>
              <li>Diversity and inclusivity in matchmaking</li>
              <li>Creating meaningful connections</li>
              <li>Continuous improvement and innovation</li>
              <li>Exceptional user experience</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where finding a life partner is a seamless and
              delightful experience. We aim to be the go-to platform for
              individuals seeking companionship, love, and lifelong
              relationships.
            </p>
            <h3 className="text-xl font-bold mt-8 mb-2">Why Choose Us?</h3>
            <p className="text-gray-700">
              We stand out for our personalized approach to matchmaking,
              advanced search features, and a user-friendly interface. Our team
              is dedicated to ensuring that your journey to find a life partner
              is smooth and successful.
            </p>
            <h3 className="text-xl font-bold mt-8 mb-2">Get in Touch</h3>
            <p className="text-gray-700">
              {`Have questions or feedback? We'd love to hear from you! Contact us through our support channels to learn more.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
