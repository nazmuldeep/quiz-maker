import React from 'react';
import Header from '../Header/Header';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1>Welcome to the blog </h1>
            <br />
            <h2>What is the purpose of react router ?</h2>
            <p>ANS: A common library for routing in React is called React Router. It permits switching between views of different React Application components, permits changing the browser URL, and keeps the UI in sync with the URL.
                To further understand how the React Router functions, let's build a straightforward React application. Three sections will make up the application: a home section, a about section, and a contacts section. React Router will be used to move between these components.
            </p>
        </div>
    );
};

export default Blog;