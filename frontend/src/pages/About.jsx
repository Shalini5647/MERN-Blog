import React from 'react';
import aboutImg from "../assets/About-blog.avif"

const About = () => {
  return (
    <div className=" min-h-screen pt-28 px-4 md:px-0 mb-7 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl font-extrabold  mb-4">
            About Our Blog
          </h1>
          <p className="text-lg ">
            A place to share thoughts, inspire others, and grow together.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImg}
            alt="Blog Illustration"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
          <div>
            <p className=" text-lg mb-4">
             At GST Funda, we’re dedicated to simplifying complex tax laws. Whether you're a student, business owner, or professional, you'll find easy-to-understand content, updates, and guides on GST, Income Tax, and everything in between.
             Start your journey toward becoming tax-smart — Learn, Apply, and Stay Ahead.
            </p>
            <p className=" text-lg mb-4">
             Our Mission
            We aim to empower individuals to share knowledge, ideas, and stories freely. Whether you're writing about GST, Income Tax, web development, or personal experiences — our platform offers simple yet powerful tools to write, publish, and connect with others meaningfully.


            </p>
            <p className=" text-lg">
              Thank you for being a part of our growing community.
            </p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-gray-500">
            "Empower yourself. Know your tax rights, duties, and benefits."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
