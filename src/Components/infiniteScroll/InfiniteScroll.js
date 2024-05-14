// import React, { useState, useEffect } from 'react';
// import { fetchPosts } from './api';

// const InfiniteScroll = () => {
//     const [posts, setPosts] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         loadPosts();
//     }, []);

//     const loadPosts = async () => {
//         if (loading || !hasMore) return;

//         setLoading(true);
//         const newPosts = await fetchPosts(page, 10); 
//         setLoading(false);

//         if (newPosts.length === 0) {
//             setHasMore(false);
//             return;
//         }

//         setPosts([...posts, ...newPosts]);
//         setPage(page + 1);
//     };

//     const handleScroll = () => {
//         if (
//             window.innerHeight + document.documentElement.scrollTop ===
//             document.documentElement.offsetHeight
//         ) {
//             loadPosts();
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div>
//             <h1>Infinite Scroll Example</h1>
//             <div>
//                 {posts.map((post) => (
//                     <div key={post.id}>
//                         <h3>{post.title}</h3>
//                         <p>{post.body}</p>
//                     </div>
//                 ))}
//                 {loading && <p>Loading...</p>}
//                 {!hasMore && <p>No more posts</p>}
//             </div>
//         </div>
//     );
// };

// export default InfiniteScroll;