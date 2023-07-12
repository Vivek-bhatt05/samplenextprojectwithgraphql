import { GET_ALL_QUOTES } from "@/gqlOperations/queries"
import apolloClient from "@/lib/apolloclient"
import { useQuery } from "@apollo/client"
import { useEffect } from "react"

const Home = (props) => {

    // console.log(props.quotes.quotes)

  return (
    <div>
        {props.quotes.quotes.map((quote)=>(
           <blockquote key={quote.by._id}>
           <h2>{quote.name}</h2>
           <p>~{quote.by.firstName}</p>
         </blockquote> 
        ))}
    </div>
  )
}


export async function getStaticProps(){

    const { data } = await apolloClient.query({
        query: GET_ALL_QUOTES,
      });
    
  
    return {
      props: {
        quotes: data
      },
      revalidate:2
    }
  }

export default Home