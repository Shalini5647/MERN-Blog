import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import BlogCardList from "./BlogCardList";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { setBlog } from "@/redux/blogSlice";
import axios from "axios";

const tags = [
  {
    category: "GST",
  },
  {
    category: "Income Tax",
  },
  {
    category: "Bills",
  },
  {
    category: "Articles",
  },
  {
    category: "E-Way Bill",
  },
  {
    category: "Tax",
  },
];

const RecentBlog = () => {
  const { blog } = useSelector((store) => store.blog);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(blog);

  useEffect(() => {
    const getAllPublsihedBlogs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/blog/get-published-blogs`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setBlog(res.data.blogs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllPublsihedBlogs();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 pb-10">
      <div className="max-w-6xl mx-auto  flex flex-col space-y-4 items-center">
        <h1 className="text-4xl font-bold pt-10 ">Recent Blogs</h1>
        <hr className=" w-24 text-center border-2 border-red-500 rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto flex gap-6">
        <div>
          <div className="mt-10 px-4 md:px-0">
            {blog?.slice(0, 4)?.map((blog, index) => {
              return <BlogCardList key={index} blog={blog} />;
            })}
          </div>
        </div>
        <div className="bg-white hidden md:block dark:bg-gray-700 w-[350px] p-5 rounded-md mt-10">
          <h1 className="text-2xl font-semibold">Popular categories</h1>
          <div className="my-5 flex flex-wrap gap-3">
            {tags.map((item, index) => {
              return (
                <Badge
                  onClick={() => navigate(`/search?q=${item.category}`)}
                  key={index}
                  className="cursor-pointer"
                >
                  {item.category}
                </Badge>
              );
            })}
          </div>
          <h1 className="text-xl font-semibold ">Subscribe to Newsletter</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Get the latest posts and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mt-5">
            {/* <Input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border bg-gray-200 dark:bg-gray-800 px-3 py-2 text-sm  text-gray-300"
            /> */}

<form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md  text-black focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>



            {/* <Button>Subscribe</Button> */}
          </div>
          <div className="mt-7">
            <h2 className="text-xl font-semibold mb-3">Suggested Blogs</h2>
            <ul className="space-y-3">
              {[
                "Rental Income & GST: What Every Landlord Should Know",
                "How GST Affects Property Buyers in India",
                "Income Tax Saving Tips for Salaried Individuals",
              ].map((title, idx) => (
                <li
                  key={idx}
                  className="text-sm dark:text-gray-100  hover:underline cursor-pointer"
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;



// import React from 'react'

// const dummyBlogs = [
//   {
//     id: 1,
//     title: "What is GST?",
//     summary: "An introduction to Goods and Services Tax in India and how it affects businesses.",
//     date: "15 June 2025"
//   },
//   {
//     id: 2,
//     title: "GST Returns Explained",
//     summary: "Everything you need to know about filing GSTR-1, GSTR-3B and more.",
//     date: "12 June 2025"
//   }
// ];

// const RecentBlog = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">GST Blogs (Demo)</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {dummyBlogs.map(blog => (
//           <div key={blog.id} className="border p-4 rounded-xl shadow hover:shadow-md transition">
//             <h3 className="text-xl font-semibold">{blog.title}</h3>
//             <p className="text-gray-600 my-2">{blog.summary}</p>
//             <p className="text-sm text-gray-400">{blog.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RecentBlog
