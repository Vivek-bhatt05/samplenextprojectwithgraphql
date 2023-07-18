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





// import { useState } from 'react';
// import { useQuery } from '@apollo/client';

// import InfiniteScroll from 'react-infinite-scroll-component';
// import { GET_ALL_POSTS } from '@/gqlOperations/queries';


// const Home = () => {
//   const [posts, setPosts] = useState({});
//   const [endCursor, setEndCursor] = useState(null);
// //   const [newPosts,setNewPosts]= useState();

//   const { data, loading, fetchMore } = useQuery(GET_ALL_POSTS, {
//     variables: {after: endCursor },
//   });

//   const handleLoadMore = () => {
//       if (!loading && data?.posts?.pageInfo?.hasNextPage) {
//       fetchMore({
//         variables: {after: endCursor },
//         updateQuery: (prevResult, { fetchMoreResult }) => {
//           if (!fetchMoreResult) return prevResult;
//           setEndCursor(fetchMoreResult.posts.pageInfo.endCursor);
        
//             setPosts(convertedObject)
//           return Object.assign({}, prevResult, {
//             posts: {
//                 ...fetchMoreResult.posts,
//               nodes: [
//                 ...prevResult.posts.nodes,
//                 ...fetchMoreResult.posts.nodes,
//               ]
//             },
//            }
//           )
//         },
//       });
//     }
//   };

//   if (loading && !data) {
//     return <p>Loading...</p>;
//   }

//   const fetchedPosts = data.posts || [];
//   console.log(fetchedPosts)
//   const newPosts = [posts,fetchedPosts]
//   // const mergednewPosts= {...newPosts[0],...newPosts[1]};
//   // const mergednewPosts= Object.assign({}, ...newPosts);

//   function convertArrayToObject(array) {
//     const resultObject = {};
//     for (const obj of array) {
//       for (const key in obj) {
//         resultObject[key] = obj[key];
//       }
//     }
//     return resultObject;
//   }
  
//   const convertedObject = convertArrayToObject(newPosts);
//   console.log(convertedObject);


//   // console.log(mergednewPosts,"merged")
//   console.log(newPosts,"new")


// //   console.log(data.posts.nodes,data.posts.pageInfo)
//   return (
//     <div>
//       <InfiniteScroll
//         dataLength={fetchedPosts?.nodes?.length}
//         next={handleLoadMore}
//         hasMore={data?.posts?.pageInfo?.hasNextPage}
//         loader={<h4>Loading...</h4>}
//       >
//         {fetchedPosts.nodes.map((user) => (
//           <div key={user.title}>
//             <h2>{user.title}</h2>
//           </div>
//         ))}
//         {/* {
//           newPosts.map((post)=> (
//             post?.nodes?.map((user)=>(
//               <div key={user.title}>
//               <p>{user.title}</p>
//             </div>
//             ))
//           )
//           )
//         } */}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default Home; 



import InfiniteScrollComponent from '../components/InfiniteScrollComponent';

const Home = () => {
  return <InfiniteScrollComponent />;
};

export default Home;


