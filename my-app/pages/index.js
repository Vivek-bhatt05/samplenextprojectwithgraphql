import { GET_ALL_QUOTES, GET_ALL_USERS } from "@/gqlOperations/queries"
import apolloClient from "@/lib/apolloclient"
import { useQuery } from "@apollo/client"
import { useEffect } from "react"

const Home = () => {

    // console.log(props.quotes.quotes)
    const { loading, error, data } = useQuery(GET_ALL_USERS, {
        client: apolloClient,
      });
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      if(data){
        console.log(data)
      }

  return (
    <div>
        {data.users.map((user)=>(
           <blockquote key={user._id}>
           <h2>{user.firstName}</h2>
           <p>~{user.lastName}</p>
         </blockquote> 
        ))}
    </div>
  )
}







// export async function getStaticProps(){

//     const { data } = await apolloClient.query({
//         query: GET_ALL_QUOTES,
//       });
    
  
//     return {
//       props: {
//         quotes: data
//       },
//       revalidate:2
//     }
//   }

export default Home