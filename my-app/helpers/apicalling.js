export async function getAllEventsData(){
    try{
        const res = await fetch('http://localhost:4400/graphql?query=%7B%0A%20%20books%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%7D%0A%7D')
        console.log(res);
        const data = await res.json()

        console.log(data)
        return data
    }
    catch(err){
        console.log(err);
    }
}