// call back hell

function getdata(dataid , getnextdata){
    setTimeout(() => {
        console.log("dataid" , dataid)
        if(getnextdata){
            getnextdata()
        }
    }, 1000);

}

getdata(1 , ()=>{
    console.log("fetching dtaa 2 ")
    getdata(2 , ()=>{
        console.log("fetching dtaa 3 ")

        getdata(3 , ()=>{
            console.log("fetching dtaa 4 ")

            getdata(4 , ()=>{
                console.log("fetching dtaa 5 ")

                getdata(5 , ()=>{

                })
            })
        })
    })
})