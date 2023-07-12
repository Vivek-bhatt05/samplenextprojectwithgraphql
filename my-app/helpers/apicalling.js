export async function getAllQuotesData(){
    try{
        const res = await fetch('http://localhost:4000',{
            method:"post",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
                query:`
                query getAllQuotes{
                    quotes{
                      name
                      by{
                        _id
                        firstName
                      }
                    }
                  }
                `
            })
        })
        const data = await res.json()

        // console.log(data)
        // console.log(data.data.quotes)
        return data.data.quotes
    }
    catch(err){
        console.log(err);
    }
}