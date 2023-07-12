import { getAllQuotesData } from "@/helpers/apicalling"
import { useEffect } from "react"

const Home = (props) => {

    console.log(props.quotes)

  return (
    <div>
         <blockquote>
                <h2>Hello world</h2>
                <p>~ram</p>
            </blockquote>
            <blockquote>
                <h2>What things</h2>
                <p>~ram</p>
            </blockquote>
    </div>
  )
}


export async function getStaticProps(){

    const allData = await getAllQuotesData()
  
    return {
      props: {
        quotes: allData
      },
      revalidate:60
    }
  }

export default Home