'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = { title, content };
    console.log('Success:', values);

    // later: call API POST /api/posts
  };

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">🛠 Admin Panel</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-black/20"
            placeholder="Post title"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-black/20"
            placeholder="Write your post content here..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded bg-black px-5 py-2 text-white hover:bg-gray-800"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}
