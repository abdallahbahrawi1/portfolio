import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Categories from './Categories/Categories';
import BlogPosts from './BlogPosts/BlogPosts';
import Pagination from './Pagination/Pagination';
import { Posts } from '../../data/BlogPosts';

const Blog = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = Posts.filter(post => 
    selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <>
      <div>
        <SearchBar />
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <BlogPosts visiblePosts={blogPosts} />
        <Pagination />
      </div>
    </>
  );
};

export default Blog;
