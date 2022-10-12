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
            <br />
            <h2>How does Contex Api do?</h2>
            <p>Ans: A React app can create global variables that can be passed around by using the React Context API. This is an alternative to "prop drilling," which entails passing along props from grandparents to grandchildren to parents and so forth. Context is also promoted as a simpler, lighter method of Redux state management. Contex Api works on React.createContext(). It returns a consumer and a provider. The provider is a component that as it's name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.
            </p>
            <br />
            <h2>what is useref hook in react?</h2>
            <p>Ans: The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called.
            </p>
        </div>
    );
};

export default Blog;