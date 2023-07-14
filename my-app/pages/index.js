// import React,{useEffect} from 'react'
// import { useQuery } from '@apollo/client';
// import { GET_ALL_QUOTES } from '../gqloperations/queries';
// import Navbar from '@/components/Navbar/nav';

// export default function Home() {
//    const {loading,error,data} = useQuery(GET_ALL_QUOTES)

//    if(loading) return <h1>Loading</h1>
//    if(error){
//        console.log(error.message)
//    }
//    if(data.quotes.length == 0){
//     return  <h2>No Quotes available</h2>
//    }
//     return (



//         <div className="container">
//             <Navbar />
//             {
//                 data.quotes.map(quote=>{
//                     return(
//                    <blockquote key={quote.name}>
//                         <h2>{quote.name}</h2>
//                         <p className="right-align">~{quote.by.firstName}</p>
//                     </blockquote>
//                     )
//                 })
//             }
            
//         </div>
//     )
// }





import { useState } from 'react';
import { useQuery } from '@apollo/client';

import InfiniteScroll from 'react-infinite-scroll-component';
import { GET_ALL_POSTS } from '@/gqlOperations/queries';


const Home = () => {
  const [posts, setPosts] = useState({});
  const [endCursor, setEndCursor] = useState(null);
//   const [newPosts,setNewPosts]= useState();

  const { data, loading, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: {after: endCursor },
  });

  const handleLoadMore = () => {
      if (!loading && data?.posts?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {after: endCursor },
        updateQuery: (prevResult, { fetchMoreResult }) => {
            // console.log(prevResult,"DFDSdsf");
            // console.log(fetchMoreResult,"hello");
          if (!fetchMoreResult) return prevResult;
          setEndCursor(fetchMoreResult.posts.pageInfo.endCursor);
          
            // for(let i=0;i<newPosts.length;i++){
            //     console.log(newPosts[i]);
            //     let something={...newPosts[i]}
            //     console.log(something)
            //     setPosts(newPosts[i]);
            // }
            console.log(mergednewPosts,"hello owlrld")
            setPosts(mergednewPosts)
          return Object.assign({}, prevResult, {
            posts: {
                ...fetchMoreResult.posts,
              nodes: [
                ...prevResult.posts.nodes,
                ...fetchMoreResult.posts.nodes,
              ]
            },
           }
          )
        },
      });
    }
  };

  if (loading && !data) {
    return <p>Loading...</p>;
  }

  const fetchedPosts = data.posts || [];
  console.log(fetchedPosts)
  const newPosts = [posts,fetchedPosts]
//   const mergednewPosts= {...newPosts[0],...newPosts[1]};
  const mergednewPosts= Object.assign({}, ...newPosts);
  console.log(newPosts,"new")
  console.log(mergednewPosts,"merged")


//   console.log(data.posts.nodes,data.posts.pageInfo)
  return (
    <div>
      <InfiniteScroll
        dataLength={fetchedPosts?.nodes?.length}
        next={handleLoadMore}
        hasMore={data?.posts?.pageInfo?.hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        {fetchedPosts.nodes.map((user) => (
          <div key={user.title}>
            <p>{user.title}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home; 



