import BlogCard from "@/components/BlogCard";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "@/redux/blogSlice";
// import BlogCardList from '@/components/BlogCardList'

export const blogJson = [
  {
  id: 1,
  title: "The Ultimate Guide to GST in 2025",
  author: "Shalini Singh",
  content: "GST in India continues to evolve with updated rules, return formats, and compliance requirements. In 2025, businesses must stay informed about the latest GST rates, input tax credit changes, and e-invoicing mandates. This guide provides a complete overview for smooth GST compliance.",
  tags: ["GST", "e-invoice", "compliance", "ITC", "returns"],
  category: "GST Updates",
  
},

  {
  id: 2,
  title: "How to File GSTR-1 and GSTR-3B Effectively",
  author: "Simr Singh",
  date: "2025-03-27",
  content:
    "This step-by-step guide simplifies the process of filing GSTR-1 and GSTR-3B returns. Learn how to avoid common mistakes, match input tax credits, and stay compliant with the latest GST norms.",
  tags: ["GSTR-1", "GSTR-3B", "GST returns", "compliance"],
  category: "GST Returns",
 
},

  {
  id: 3,
  title: "Top 10 GST Filing Mistakes to Avoid in 2025",
  author: "Ridhi Singh",
  date: "2025-03-27",
  content:
    "Many businesses face notices due to small but critical GST filing errors. This article highlights the top 10 common mistakes like mismatched invoices, wrong HSN codes, and missed filing deadlines — and how to avoid them.",
  tags: ["GST", "filing errors", "HSN", "ITC", "compliance"],
  category: "GST Compliance",

},

  {
  id: 4,
  title: "Understanding GST API Integration for Businesses",
  author: "Rikni Singh",
  date: "2025-03-27",
  content:
    "GST APIs enable seamless filing, return tracking, and invoice validation directly from your software. This guide explains how businesses can use GSTN-approved APIs to automate GST compliance and reduce manual errors.",
  tags: ["GST API", "automation", "GST returns", "API integration"],
  category: "GST Automation",
 
  },

  {
  id: 5,
  title: "How GST Consultants Can Boost Online Visibility in 2025",
  author: "Kajol Singh",
  date: "2025-03-27",
  content:
    "In 2025, GST professionals must build a strong digital presence to attract clients. This guide covers how to use content marketing, local SEO, and client testimonials to improve visibility and build trust online.",
  tags: ["GST consultants", "SEO", "digital strategy", "branding"],
  category: "Business Growth",
 
},

];

const Blog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((store) => store.blog);

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
    <div className="pt-16">
      <div className="max-w-6xl mx-auto text-center flex flex-col space-y-4 items-center">
        <h1 className="text-4xl font-bold text-center pt-10 ">Our Blogs</h1>
        <hr className=" w-24 text-center border-2 border-red-500 rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 py-10 px-4 md:px-0">
        {blog?.map((blog, index) => {
          return <BlogCard blog={blog} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
