class Donation {
    constructor(){}

     getstate ()
     {
         var gamestateref=database.ref('gamestate');
         gamestateref.on("value",function(data){
            gamestate=data.val()

         })
     }
     update(state)
     {
         database.ref ('/').update({
             gamestate:state
         })

         
     }
async start ()
{
    if (gamestate===0)
    {
        people=new People();
        var peoplecountref=await database.ref('playercount').once("value");
    if (peoplecountref.exists()){
        count=peoplecountref.val();
        people.getcount();}
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    text("Game start", 120, 100);
    People.getpeopleinfo();
    if (allpersons!=undefined){
        var displayposition =130
        for(var plr in allpersons)
        {
            if (plr==="people"+people.index)
            {
                fill("red");
            }
                else{
                    fill("black");
                }

        displayposition+=20;
        textSize(20)
        text(allpersons[plr].name+":"+allpersons[plr].distance,120,displayposition)
    }
}
    if (keyIsDown (UP_ARROW)&&(player.index!=null)){
       people.distance+=50;

       people.update();
    }

    
}
    
}

