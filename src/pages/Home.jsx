// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../asserts/suspect-child-abuse-rochester-14.jpg'
import Slider2 from '../asserts/ribbon1.jpg';
import Slider3 from '../asserts/ribbon.jpg';
import Slider4 from '../asserts/image4.jpeg';

import image from '../asserts/images.png'
import images from '../asserts/images1.jpg'
import image1 from '../asserts/image2.jpg'

import logo1 from '../asserts/logo1.png'
import logo2 from '../asserts/logo2.png'
import logo3 from '../asserts/logo3.jpeg'
import logo4 from '../asserts/logo4.jpg'
import logo5 from '../asserts/logo5.jpg'

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    { id: 1, text: "This organization helped me understand the importance of child protection.", author: "John Doe" },
    { id: 2, text: "They provide crucial support for children and families in need.", author: "Jane Smith" },
    { id: 3, text: "The programs here are very educational and supportive.", author: "Alex Johnson" },
    { id: 4, text: "They are doing a fantastic job raising awareness.", author: "Chris Lee" },
    { id: 5, text: "Their workshops are life-changing and provide invaluable insights.", author: "Sam Brown" },
    { id: 6, text: "The support and resources they offer are top-notch.", author: "Emma Davis" },
    { id: 7, text: "An excellent organization with a strong mission.", author: "Michael Scott" },
    { id: 8, text: "I learned a lot about how to protect children in my community.", author: "Laura Wilson" },
    { id: 9, text: "Their advocacy work is truly inspiring.", author: "Paul Martinez" },
    { id: 10, text: "A great place for learning and support.", author: "Rachel Green" },
    { id: 11, text: "I highly recommend their services and programs.", author: "Monica Geller" },
    { id: 12, text: "Their dedication to child safety is remarkable.", author: "Joey Tribbiani" },
    { id: 13, text: "They are making a real difference in the community.", author: "Chandler Bing" },
    { id: 14, text: "An essential resource for anyone interested in child welfare.", author: "Phoebe Buffay" },
    { id: 15, text: "Their commitment to protecting children is evident in everything they do.", author: "Ross Geller" }
  ];

  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Introduction Section */}
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Child Abuse Awareness</h1>
            <p className="text-lg text-gray-700">Educating and Protecting Our Future Generations</p>
          </section>
          
          {/* Image Slider Section */}
          <Slider {...sliderSettings} className="mb-10">
            <div>
              <img src={slider1} alt="Slide 1" className="w-full h-80 object-cover" />
            </div>
            <div>
              <img src={Slider2} alt="Slide 2" className="w-full h-80 object-cover" />
            </div>
            <div>
              <img src={Slider3} alt="Slide 3" className="w-full h-80 object-cover" />
            </div>
            <div>
              <img src={Slider4} alt="Slide 3" className="w-full h-80 object-cover" />
            </div>
          </Slider>


          {/* Educational Content Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Child Abuse</h2>
              <p className="text-gray-600">
                Child abuse is any action by another person – adult or child – that causes significant harm to a child. It can be physical, emotional, or sexual, and can also involve neglect. Raising awareness and educating people about the signs and prevention of child abuse is crucial for protecting children.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Child Abuse</h2>
              <p className="text-gray-600">
                There are several forms of child abuse, including:
                <ul className="list-disc list-inside">
                  <li>Physical abuse: Inflicting physical injury upon a child.</li>
                  <li>Emotional abuse: Damaging a child's self-esteem or emotional well-being.</li>
                  <li>Sexual abuse: Involving a child in sexual activities.</li>
                  <li>Neglect: Failing to provide basic needs such as food, shelter, and medical care.</li>
                </ul>
              </p>
            </div>
          </section>

          {/* Images and Additional Resources Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={images} alt="Support Systems" className="w-full h-58 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support Systems</h3>
              <p className="text-gray-600">Find out how to support children who have experienced abuse and the resources available to help them heal and grow.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={image} alt="Awareness Programs" className="w-full h-58 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Awareness Programs</h3>
              <p className="text-gray-600">Learn about programs and initiatives that educate communities about preventing child abuse and supporting victims.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={image1} alt="Legal Protection" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Legal Protection</h3>
              <p className="text-gray-600">Understand the legal protections available for children and how to report suspected abuse.</p>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Testimonials</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Slider {...sliderSettings} className="mb-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    <p className="text-lg text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    <p className="text-right text-gray-800 font-bold">- {testimonial.author}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Navigation and Additional Resources Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Explore More Resources</h2>
            <div className="flex flex-col md:flex-row justify-around">
              <Link to="/detailed-articles" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4 md:mb-0">
                Detailed Articles
              </Link>
              <Link to="/support-resources" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4 md:mb-0">
                Support Resources
              </Link>
              <Link to="/reportform" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Report an Incident
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
