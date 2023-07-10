export async function getAllEventsData(){
    try{
        const res = await fetch('http://localhost:4400/graphql?query=books')
        console.log(res);
        const data = await res.json()

        console.log(data)
        return data
    }
    catch(err){
        console.log(err);
    }
}