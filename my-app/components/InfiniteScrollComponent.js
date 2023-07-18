import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_ALL_POSTS } from '@/gqlOperations/queries';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useQuery } from '@apollo/react-hooks';
import client from "../lib/apolloclient"

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState([]);
  const [endCursor, setEndCursor] = useState("");
  const [hasNextPage, setHasNextPage] = useState();

  const { data, loading, error } = useQuery(GET_ALL_POSTS, {
    client,
    variables: { after: endCursor },
    onCompleted: ({ posts }) => {
      setPosts([...posts.nodes]);
      setHasNextPage(posts.pageInfo.hasNextPage);
      if (posts.pageInfo.hasNextPage) {
        // setEndCursor(posts.pageInfo.endCursor);
      } 
    },
  });
console.log(posts)
console.log(data)
  const fetchMorePosts = () => {
    if(hasNextPage){
    client
      .query({
        query: GET_ALL_POSTS,
        variables: { after: endCursor },
      })
      .then(({ data }) => {

        // console.log("\n\n",...posts, "=====",...data.posts.nodes,'posys\n\n')
        const newPosts = [];
        newPosts.push({...posts,...data.posts.nodes})
        console.log(newPosts)
        setPosts(newPosts);
        setHasNextPage(data.posts.pageInfo.hasNextPage);
        if (data.posts.pageInfo.hasNextPage) {
          setEndCursor(data.posts.pageInfo.endCursor);
        } 
      })
      .catch((error) => console.error('Error fetching more posts:', error));
    }
  };

 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMorePosts}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
    >
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <h5>{post.title}</h5>
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;

