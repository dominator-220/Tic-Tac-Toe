function player(name){
    this.name=name;
}



let col1=[0,3,6];
let col2=[1,4,7];
let col3=[2,5,8];
let row1=[0,1,2];
let row2=[3,4,5];
let row3=[6,7,8];
let diag1=[0,4,8];
let diag2=[2,4,6];

let configuration=[col1,col2,col3,row1,row2,row3,diag1,diag2];

let dict={};
let moves=0;
let person1=new player("ANS");
let person2=new player("AKU");
let ai=new player("AI");
let gamearea=document.querySelector('#gamearea');
let result=document.querySelector("#play");
result.addEventListener('click',clear);


for(let i=0;i<9;i++){
    let cell=document.createElement('div');
    cell.innerText="";
    cell.addEventListener('click',add);
    gamearea.appendChild(cell);

    

}

function add(){
    console.log(result.style.display);
    if (result.style.display=="" | result.style.display=="none" ){
        let div=this;
        if (div.innerHTML==""){
            if (moves%2){
                div.innerText=person2.name;
            }
            else{
                div.innerText=person1.name;
            }
            moves++;
        }
        if (moves%2){
            if (check()){
                alert(`Winner ${person1.name}`);
                result.style.display="block";
    

            }
        }
        else{
            if (check()){
                alert(`Winner ${person2.name}`);
                result.style.display="block";
        

            }
        }

        if (moves==9 & (!check()))
        {
            alert(`Draw`);
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
        children[i].removeEventListener('click',add);
        children[i].addEventListener('click',invincibleai);

    }
    result.style.display="none";
    


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
        if ((div.innerText=="")){
            div.innerText=person1.name;
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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
            console.log(aiselection);
            child[aiselection].innerText=ai.name;
            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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
            
            div.innerText=person1.name;
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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
                  
                    alert(`Winner ${ai.name}`);
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
            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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
            
            div.innerText=person1.name;
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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
                  
                    alert(`Winner ${ai.name}`);
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
                  
                    
                    
                    moves++;
                    return;
            
    
                }
               
                child[arr[i]].innerText="";
                console.log(child[i],child[arr[i]].innerText,arr[i]);
                

            }
            let aiselection=arr[Math.floor(Math.random()*(arr.length))];
            console.log(aiselection);
            child[aiselection].innerText=ai.name;
            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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
            
            div.innerText=person1.name;
            moves++;
            if(check()){
                alert(`Winner ${person1.name}`);
                result.style.display="block";
                return
        

            }
            
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
                result.style.display="block";
                return
    
    
            }
            if(moves==1){
                console.log(dict[div]);
                if (index==4){
                    gamearea.children[0].innerText=ai.name;
                }
                else{
                    gamearea.children[4].innerText=ai.name;

                }
                
            }
    

         
            else{
                bestmove();
            }

            moves++;
            if(check()){
                alert(`Winner ${ai.name}`);
                result.style.display="block";
                return
        

            }
            if (moves==9 & (!check()))
            {
                alert(`Draw`);
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