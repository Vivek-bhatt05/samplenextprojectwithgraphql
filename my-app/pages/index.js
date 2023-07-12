import { useState } from 'react';
import { useQuery } from '@apollo/client';

import InfiniteScroll from 'react-infinite-scroll-component';
import { GET_ALL_POSTS } from '@/gqlOperations/queries';


const Home = () => {
  const [posts, setUsers] = useState([]);
  const [endCursor, setEndCursor] = useState(null);

  const { data, loading, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: {first: 10 ,after: endCursor },
  });

  console.log(data);
  
// setEndCursor(data?.posts?.pageInfo?.endCursor)
  const handleLoadMore = () => {
      if (!loading && data?.posts?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: { first: 10, after: endCursor },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          setEndCursor(fetchMoreResult.posts.pageInfo.endCursor)
          return {
            posts: {
                ...fetchMoreResult.posts,
              nodes: [
                ...prevResult.posts.nodes,
                ...fetchMoreResult.posts.nodes,
              ],
            },
          };
        },
      });
    }
  };

  if (loading && !data) {
    return <p>Loading...</p>;
  }

  const fetchedUsers = data.posts.nodes || [];


//   console.log(fetchedUsers,data.posts.pageInfo)
  return (
    <div>
      <InfiniteScroll
        dataLength={posts.length}
        next={handleLoadMore}
        hasMore={data?.posts?.pageInfo?.hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {fetchedUsers.map((user) => (
          <div key={user.title}>
            <p>{user.title}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
