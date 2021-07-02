function player(name,link){
    this.name=name;
    this.link=link;
}


let lastmine="";
let lastopponent="";

let col1=[0,3,6];
let col2=[1,4,7];
let col3=[2,5,8];
let row1=[0,1,2];
let row2=[3,4,5];
let row3=[6,7,8];
let diag1=[0,4,8];
let diag2=[2,4,6];
let finalresult=document.querySelector("#winner");

let configuration=[col1,col2,col3,row1,row2,row3,diag1,diag2];
let twoplayer=document.querySelector("#twoplayer");
let easy=document.querySelector("#easy");
let medium=document.querySelector("#medium");
let hard=document.querySelector("#hard");
let invincible=document.querySelector("#invincible");
let choice=document.querySelector("#choice");
let character=document.querySelector("#character");
let opponentcharacter=document.querySelector("#opponentcharacter");
let wait1=document.querySelector("#wait1");
let wait2=document.querySelector("#wait2");

easy.addEventListener('click',Easy);
twoplayer.addEventListener('click',Twoplayer);
medium.addEventListener('click',Medium);
hard.addEventListener('click',Hard);
invincible.addEventListener('click',Invincible);

let dict={};
let moves=0;
let person1=new player("","");
let person2=new player("","");
let ai=new player("","");
let parent=document.querySelector("#parent");
let gamearea=document.querySelector('#gamearea');
let result=document.querySelector("#play");
result.addEventListener('click',clear);


for(let i=0;i<9;i++){
    gamearea.style.display="none";
    let cell=document.createElement('div');
    cell.innerText="";
    gamearea.appendChild(cell);

    

}

function add(){
    console.log(result.style.display);
    if (result.style.display=="" | result.style.display=="none" ){
        let div=this;
        let img=document.createElement('img');
        if (div.innerHTML==""){
            if (moves%2){
                div.innerText=person2.name;
                img.src=person2.link;
                img.className="ingameimgchar";
                div.appendChild(img);
            }
            else{
                div.innerText=person1.name;
                img.src=person1.link;
                img.className="ingameimgchar";
                div.appendChild(img);
            }
            moves++;
        }
        if (moves%2){
            if (check()){
                alert(`Winner ${person1.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${person1.name}`;
                result.style.display="block";
    

            }
        }
        else{
            if (check()){
                alert(`Winner ${person2.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${person2.name}`;
                result.style.display="block";
        

            }
        }

        if (moves==9 & (!check()))
        {
            alert(`Draw`);
            finalresult.style.display="flex";
            finalresult.innerText=`Draw`;
            result.style.display="block";


        }
    }


}
function clear(){
    console.log("Hello");
    moves=0;
    let children=gamearea.children;
    for(i=0;i<children.length;i++){
        children[i].innerText="";
        children[i].replaceWith(children[i].cloneNode(true));
        console.log(children[i]);
       

    }
    result.style.display="none";
    gamearea.style.display="none";
    choice.style.display="block";
    character.style.display="block";
    opponentcharacter.style.display="block";
    person1.name="";
    person1.link="";
    person2.name="";
    person2.link="";
    finalresult.innerText=``;
    finalresult.style.display="none";
    ai.name="";
    ai.link="";
    if (lastmine!=""){
        lastmine.style.outline="2px solid black";
    }
    if (lastopponent!=""){
        lastopponent.style.outline="2px solid black";
    }
    lastmine="";
    lastopponent="";
    wait1.innerText="Player1";
    wait2.innerText="Player2";
    info.innerText="Choose Your Character";
    


    

}

function Twoplayer(){
    if (person1.name==""| person2.name==""){
        return;
    }
    let children=gamearea.children;
    for(i=0;i<children.length;i++){
        children[i].addEventListener('click',add);

    }
    choice.style.display="none";
    gamearea.style.display="grid";
    character.style.display="none";
    opponentcharacter.style.display="none";
    info.innerText="";

}
function Easy(){
    if (person1.name==""| person2.name==""){
        return;
    }
    let children=gamearea.children;
    for(i=0;i<children.length;i++){
        children[i].addEventListener('click',easyai);

    }
    choice.style.display="none";
    gamearea.style.display="grid";
    character.style.display="none";
    opponentcharacter.style.display="none";
    info.innerText="";

}
function Medium(){
    if (person1.name==""| person2.name==""){
        return;
    }
    let children=gamearea.children;
    for(i=0;i<children.length;i++){
        children[i].addEventListener('click',mediumai);

    }
    choice.style.display="none";
    gamearea.style.display="grid";
    character.style.display="none";
    opponentcharacter.style.display="none";
    info.innerText="";

}
function Hard(){
    if (person1.name==""| person2.name==""){
        return;
    }
    let children=gamearea.children;
    for(i=0;i<children.length;i++){
        children[i].addEventListener('click',hardai);

    }
    choice.style.display="none";
    gamearea.style.display="grid";
    character.style.display="none";
    opponentcharacter.style.display="none";
    info.innerText="";
    



}
function Invincible(){
    if (person1.name==""| person2.name==""){
        return;
    }
    let children=gamearea.children;
    for(i=0;i<children.length;i++){
        children[i].addEventListener('click',invincibleai);

    } 
    choice.style.display="none";
    gamearea.style.display="grid";
    character.style.display="none";
    opponentcharacter.style.display="none";
    info.innerText="";

}


function check(){
    for(states in configuration){
        if (cntdistinct(configuration[states])){
            return 1;
        }
    }
    return 0;
}

function cntdistinct(arr){
    
    let tempdict={};
    cnt=0
    let poss=0;
    for(i=0;i<arr.length;i++){
        let curr=gamearea.children[arr[i]].innerText;
      
        
        if (!(curr=="")){
            if ((curr in tempdict)){
                tempdict[curr]+=1;
            
            }
            else{
                poss=curr;
                cnt+=1;
                
                tempdict[curr]=1;
            }
        }
     
    }
    
    if (cnt==1 & tempdict[poss]==3){
        console.log(cnt,poss);
        return 1;
    }
    else{
        return 0;
    }


}







function easyai(){
    
    if (result.style.display=="" | result.style.display=="none" ){
       
        let div =this;
        let img=document.createElement('img');
        if ((div.innerText=="")){
            div.innerText=person1.name;
            img.src=person1.link;
            img.className="ingameimgchar";
            div.appendChild(img);
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${person1.name}`;
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }

            
            let arr=[];
            let child=gamearea.children;
            for(i=0;i<child.length;i++){
                if (child[i].innerText==""){
                    arr.push(i)
                }
            }
            let aiselection=arr[Math.floor(Math.random()*(arr.length))];
            let img1=document.createElement('img');
            console.log(aiselection);
            child[aiselection].innerText=ai.name;
            img1.src=ai.link;
            img1.className="ingameimgchar";
            child[aiselection].appendChild(img1);
            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${ai.name}`;
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }



        }
    }
}

function mediumai(){
    
    if (result.style.display=="" | result.style.display=="none" ){
       
        let div =this;
        if ((div.innerText=="")){
            let img=document.createElement('img');
            
            div.innerText=person1.name;
            img.src=person1.link;
            img.className="ingameimgchar";
            div.appendChild(img);
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${person1.name}`;
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }

            
            let arr=[];
            let child=gamearea.children;
            for(i=0;i<child.length;i++){
                if (child[i].innerText==""){
                    arr.push(i)
                }
            }
            for(let i=0;i<arr.length;i++){
                let img1=document.createElement('img');
                child[arr[i]].innerText=ai.name;
             

               
                if(check()){
                    img1.src=ai.link;
                    img1.className="ingameimgchar";
                    child[arr[i]].appendChild(img1);
                  
                    alert(`Winner ${ai.name}`);
                    finalresult.innerText=`Winner ${ai.name}`;
                    finalresult.style.display="flex";
                    result.style.display="block";
                    
                    moves++;
                    return;
            
    
                }
               
                child[arr[i]].innerText="";
                console.log(child[i],child[arr[i]].innerText,arr[i]);
                

            }
            let aiselection=arr[Math.floor(Math.random()*(arr.length))];
            console.log(aiselection);
            child[aiselection].innerText=ai.name;
            let img1=document.createElement('img');
            img1.src=ai.link;
            img1.className="ingameimgchar";
            child[aiselection].appendChild(img1)

            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${ai.name}`;
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }



        }
    }
}

function hardai(){
    
    if (result.style.display=="" | result.style.display=="none" ){
       
        let div =this;
        if ((div.innerText=="")){
         
            let img=document.createElement('img');
            div.innerText=person1.name;
            img.src=person1.link;
            img.className="ingameimgchar";
            div.appendChild(img);
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${person1.name}`;
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }

            
            let arr=[];
            let child=gamearea.children;
            for(i=0;i<child.length;i++){
                if (child[i].innerText==""){
                    arr.push(i)
                }
            }
            for(let i=0;i<arr.length;i++){
                child[arr[i]].innerText=ai.name;
               
                if(check()){
                    let img1=document.createElement('img');
                    img1.src=ai.link;
                    img1.className="ingameimgchar";
                    child[arr[i]].appendChild(img1);
                  
                    alert(`Winner ${ai.name}`);
                    finalresult.style.display="flex";
                    finalresult.innerText=`Winner ${ai.name}`;
                    result.style.display="block";
                    
                    moves++;
                    return;
            
    
                }
               
                child[arr[i]].innerText="";
                console.log(child[i],child[arr[i]].innerText,arr[i]);
                

            }
            for(let i=0;i<arr.length;i++){
                child[arr[i]].innerText=person1.name;
               
                if(check()){
                    child[arr[i]].innerText=ai.name;
                    let img1=document.createElement('img');
                    img1.src=ai.link;
                    img1.className="ingameimgchar";
                    child[arr[i]].appendChild(img1);
                  
                    
                    
                    moves++;
                    return;
            
    
                }
               
                child[arr[i]].innerText="";
                console.log(child[i],child[arr[i]].innerText,arr[i]);
                

            }
            let aiselection=arr[Math.floor(Math.random()*(arr.length))];
            console.log(aiselection);
            child[aiselection].innerText=ai.name;
            let img1=document.createElement('img');
            img1.src=ai.link;
            img1.className="ingameimgchar";
            child[aiselection].appendChild(img1)
            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${ai.name}`;
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }



        }
    }
}




function invincibleai(){
    
    console.log("Hello")
    if (result.style.display=="" | result.style.display=="none" ){
       
        let div =this;
        let index=Array.from(gamearea.children).indexOf(div);
        if ((div.innerText=="")){
            
            let img=document.createElement('img');
            div.innerText=person1.name;
            img.src=person1.link;
            img.className="ingameimgchar";
            div.appendChild(img);
            moves++;
            if(check()){

                alert(`Winner ${person1.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${person1.name}`;
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {   
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
            
                result.style.display="block";
                return
    
    
            }
            if(moves==1){
                console.log(dict[div]);
                if (index==4){
                    gamearea.children[0].innerText=ai.name;
                    let img1=document.createElement('img');
                    img1.src=ai.link;
                    img1.className="ingameimgchar";
                    gamearea.children[0].appendChild(img1);
                }
                else{
                    gamearea.children[4].innerText=ai.name;
                    let img1=document.createElement('img');
                    img1.src=ai.link;
                    img1.className="ingameimgchar";
                    gamearea.children[4].appendChild(img1);

                }
                
            }
    

         
            else{
                bestmove();
            }

            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                finalresult.style.display="flex";
                finalresult.innerText=`Winner ${ai.name}`;
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                finalresult.style.display="flex";
                finalresult.innerText=`Draw`;
                result.style.display="block";
                return
    
    
            }



        }
    }
}

function bestmove(){
    let child=gamearea.children;
    let bestval=-1000;
    let pos=0;
    for(let i=0;i<child.length;i++){
        if (child[i].innerText==""){
            child[i].innerText=ai.name;
            let moveval=  minimax( 0, false);
            child[i].innerText="";
            console.log(i,moveval);
            if(moveval>bestval){
                bestval=moveval;
                pos=i;
                


            }
        }

    }
    if(bestval!=-1000){
        console.log(pos,bestval);
        child[pos].innerText=ai.name;
        let img1=document.createElement('img');
        img1.src=ai.link;
        img1.className="ingameimgchar";
        child[pos].appendChild(img1);
    }
}



function isMovesLeft(){
    let child=gamearea.children;
    for(let i=0;i<child.length;i++){
        if(child[i].innerText==""){
            return true;
        }
    }
    return false;
}

function check1(){
    for(states in configuration){
        if (cntdistinct1(configuration[states])!=0){
            return cntdistinct1(configuration[states]);
        }
    }
    return 0;
}

function cntdistinct1(arr){
    
    let tempdict={};
    cnt=0
    let poss=0;
    for(i=0;i<arr.length;i++){
        let curr=gamearea.children[arr[i]].innerText;
      
        
        if (!(curr=="")){
            if ((curr in tempdict)){
                tempdict[curr]+=1;
            
            }
            else{
                poss=curr;
                cnt+=1;
                
                tempdict[curr]=1;
            }
        }
     
    }
    
    if (cnt==1 & tempdict[poss]==3){
        if (poss==person1.name){
            return -10;

        }
        else{
            return 10;
        }
        
    }
    else{
        return 0;
    }


}


function minimax(depth, isMax)
{
    let score = check1();
  
  
  
    if (score == 10)
        return score;
  
  
    if (score == -10)
        return score;
  

    if (isMovesLeft() == false)
        return 0;

    let child=gamearea.children;
 
  
    if (isMax)
    {
        let best = -1000;
  
    
        for(let i = 0; i < child.length; i++)
        {
                 
            if (child[i].innerText=="")
            {
                child[i].innerText = ai.name;
  
                best = Math.max(best, minimax(depth + 1, !isMax));
  
                child[i].innerText = "";
            }
        }
        
        return best;
    }
  
    else
    {
        let best = 1000;
  
        for(let i = 0; i < child.length; i++)
        {
                 
            if (child[i].innerText=="")
            {
                child[i].innerText = person1.name;
  
                best = Math.min(best,minimax(depth + 1, !isMax));
  
                child[i].innerText = "";
            }
        }
        
        return best;
    }
}

function myassign(div){
    console.log(div.children[0].src);
    person1.name=div.id;
    person1.link=div.children[0].src;
    

    if (lastmine!=""){
        lastmine.style.outline="2px solid black";
    }
    lastmine=div;
    lastmine.style.outline="4px solid red";
    wait1.innerText=div.id;

    console.log(person1);
}
function opponentassign(div){
    person2.name=div.id;
    person2.link=div.children[0].src;
    ai.name=div.id;
    ai.link=div.children[0].src;
    if (lastopponent!=""){
        lastopponent.style.outline="2px solid black";
    }
    lastopponent=div;
    lastopponent.style.outline="4px solid blue";
    wait2.innerText=div.id;
    console.log(person2,ai);
}