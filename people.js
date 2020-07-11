class People
{
constructor(){
    this.index=null
    this.distance=0;
    this.name=null
}

getcount()
{
    var peoplecountref=database.ref('peoplecount');
    peoplecountref.on("value",function(data)
    {
       count=data.val()
    })

}
updatecount(count)
{
    database.ref ('/').update({
        peoplecount:count
    })
}
update()
{
    var playerindex ="people"+this.index
    database.ref (playerindex).set({
        name:this.name,
        distance:this.distance

    })
}
static getplayerinfo()
{
    var peopleinforef=database.ref("people");
    peopleinforef.on("value",(data)=>{
    allpersons=data.val();
    })
}
}

