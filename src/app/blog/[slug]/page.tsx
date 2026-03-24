"use client";

import Link from "next/link";
import { Calendar, User } from "lucide-react";
import React from "react";
import { blogPosts } from "@/lib/data";

const BlogPostPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = React.use(params).slug;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Post not found</h2>
        <p className="text-gray-500">The post you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <Link 
              href="/blog" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Blog</span>
            </Link>
          </div>

          <article className="space-y-8 p-6">
            <header>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
              <div className="flex items-center text-gray-600 text-sm">
                <User className="w-4 h-4 mr-2 text-gray-500" />
                <span>{post.author}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/<div class="prose prose-lg max-w-none">/g, '')
                  .replace(/<\/div>/g, '')
              }} />
            </div>

            <footer className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p>Published on {new Date(post.date).toLocaleDateString()}</p>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
