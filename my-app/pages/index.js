import { getAllEventsData } from "@/helpers/apicalling";

const Home = (props) => {
    console.log(props.events);

  return (
    <div>
     <h1>Home Page</h1>
    </div>
  )
}


export async function getStaticProps(){

    const allData = await getAllEventsData()
  
    return {
      props: {
        events: allData
      }
      // revalidate:60
    }
  }

export default Home