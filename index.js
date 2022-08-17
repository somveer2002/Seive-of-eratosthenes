console.log("exported");
let boolArray = [];
var colorsArray = [

    "#0048BA","#B0BF1A","#7CB9E8","#F5F5DC","#B284BE","#CC0033","#FF9900","#A6D608","#5D8AA8",
    "#98777B","#72A0C1","#AF002A","#FD5800","#DF6124","#00CCFF","#F07427","#FFA089","#E56024","#9F00FF",
    "#FFE302","#CEFF00","#34B233","#004242",
    "#A4F4F9","#7C98AB","#645452","#F5DEB3","#FFFFFF","#F5F5F5","#A2ADD0","#D470A2","#FF43A4","#FC6C85",
    "#FD5800","#A75502","#722F37","#673147","#FF007C","#A0E6FF","#56887D","#C9A0DC","#C19A6B","#738678",
    "#0F4D92","#1C2841","#FFFF00","#FCE883",
    "#F0F8FF","#84DE02","#E32636","#C46210","#EFDECD","#E52B50","#9F2B68","#F19CBB","#AB274F","#D3212D",
    "#3B7A57","#00C4B0","#FFBF00","#FF7E00","#FF033E","#9966CC","#A4C639","#F2F3F4","#CD9575","#665D1E",
    "#915C83","#841B2D","#FF9900","#A6D608","#00CC33","#B80CE3",
    "#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A",
    "#DF6124","#00CCFF","#F07427","#FFA089","#FAEBD7","#008000","#8DB600","#FBCEB1",
    "#00FFFF","#7FFFD4","#D0FF14","#4B5320",
    "#ff3145","#8F9779","#98777B",
    "#BCD4E6","#9F8170","#FA6E79","#F5F5DC","#2E5894","#9C2542","#E88E5A",
    "#40826D","#009698","#7C9ED9","#CC9900","#922724","#9F1D35","#DA1D81","#00AAEE",
    "#00CC33","#B80CE3","#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A"
    ,"#EFCC00"

]
console.log(colorsArray.length);

const fontsizeDict = {
    5 : "1.4em",
    6 : "1.3em",
    7 : "1.3em",
    8 : "1.24em",
    9 : "1.24em",
    10 : "1.24em",
    11 : "1.13em",
    12 : "1.01em",
    13 : "1.01em",
    14 : "1.01em",
    15 : "1.01em",
    16 : "0.81em",
    17 : "0.75em",
    18 : "0.71em",
    19 : "0.66em",
    20 : "0.66em"
}

const heightWidthDict = {
    5 : ["70px" , "70px"],
    6 : ["70px" , "70px"],
    7 : ["60px" , "60px"],
    8 : ["60px" , "60px"],
    9 : ["55px" , "55px"],
    10 : ["50px" , "50px"],
    11 : ["45px" , "45px"],
    12 : ["40px" , "40px"],
    13 : ["38px" , "38px"],
    14 : ["35px" , "35px"],
    15 : ["32px" , "32px"],
    16 : ["28px" , "28px"],
    17 : ["28px" , "28px"],
    18 : ["23px" , "23px"],
    19 : ["21px" , "21px"],
    20 : ["21px" , "21px"],
}

// slider input

let size = document.getElementById("sizeOfSieve");
let label = document.querySelector("label");
sieveGenerate(10);
const sieveVar = document.getElementById("sieve");
console.log("number of children for new sieve : ",sieveVar.childNodes.length);

let p = document.getElementById("plus");
let m = document.getElementById("minus");


// add eventListener for prime checking


m.addEventListener('click',()=>{

    if(document.getElementById("sizeOfSieve").value ==5) return

        
        console.log("decrease in grid size"); 
        let value = size.value;
        size.value -=1;
        console.log("new size  : ",size.value);
        label.textContent = value;
        sizeHandler();
    
});



p.addEventListener('click',()=>{

    if(document.getElementById("sizeOfSieve").value ==20) return

            
    // else condition --- increment range input size    
    var newVal = parseInt(document.getElementById("sizeOfSieve").value) +  1;
    document.getElementById("sizeOfSieve").value = newVal;
    label.textContent = newVal;
    console.log("new size  : ",size.value);
    sizeHandler();

    // bpmInput.value++;


});


function sizeHandler(){
    console.log("size handler active");
    let value = parseInt(size.value);
    console.log("value now ",value);
    label.textContent = value;
    document.getElementById("sieve").innerHTML  = "";
    console.log("deleted all child nodes of sieve generating new ");
    sieveGenerate(value);

}

size.addEventListener('input' , sizeHandler);
//default sieve generated 10x10

/*

https://javascript.info/modifying-document

*/

/*

document.getElementsByClassName('className').style = your_style

*/

// now sieve
// grid-template-columns: repeat(20,1fr);


function sieveGenerate(sizeOfGrid){
    boolArray = []
    let counter=0;
    // by default all true -- initialized as true -index=> that number
    // 100+1 --- 0 indexing
    while(counter++<((sizeOfGrid*sizeOfGrid)+1)){
        boolArray.push(true);
    }
    boolArray[0] = false;
    boolArray[1] = false;
    console.log("counter length ->",boolArray.length);

    let temp_sieve = document.getElementById("sieve");
    console.log("grabbed sieve")
    temp_sieve.style["grid-template-columns"] = `repeat(${sizeOfGrid} , 1fr)`;

    for(let i=0;i<sizeOfGrid;i++){
        for(let j=0;j<sizeOfGrid;j++){
            let temp_div = document.createElement('div');
            const el = (i*sizeOfGrid)+(j+1);
            temp_div.textContent = el;
            // console.log("value appended -> "+el);
            temp_div.style.backgroundColor = "sandybrown";
            temp_div.style.fontSize = fontsizeDict[sizeOfGrid];
            temp_div.style.height = heightWidthDict[sizeOfGrid][0];
            temp_div.style.width = heightWidthDict[sizeOfGrid][1];

            /*
            // removed this eventlistner for now
            temp_div.addEventListener('click',(e)=>{
                // seiveOfEratosthenes(this.)
                console.log("1. clicked");
                console.log("2. \n",e.currentTarget);
                console.log("3. \n",e.currentTarget.textContent);
                sieveOfEratosthenes(e.currentTarget.textContent);
                // console.log(e.currentTarget.style);
                e.currentTarget.classList.toggle('blinkdiv');
                console.log("style changed");
            });

            */
            temp_sieve.appendChild(temp_div);
        }
    }

    // addevent listener to the generated sieve
        temp_sieve.addEventListener('click' ,function(e){

        console.log("e - > ",e.currentTarget);

        console.log("added event listener prime visualizer with bool array update");
        console.log("running better visualization using prmoise and await async function");

        //e.currentTarget.childNodes.length)
        let children = e.currentTarget.childNodes;
        console.log("->number of children ->",children.length);
        e.currentTarget.childNodes[0].classList.toggle("blinkdiv");   
        console.log(" 1 is non prime ")


        const pause = _ => new Promise(resolve => setTimeout(resolve, _));

        async function main() {
            // 1 is also not prime so change its style

          for (let i = 2; i <= sizeOfGrid; i++) {
            await pause(1000);
            if(boolArray[i]===true){
            document.getElementById("info1").textContent = " - marking multiples of  "+i+" -";
            console.log("--> run for  i = ",i);
             for(let j = i*i;j<=(sizeOfGrid*sizeOfGrid);j+=i){
                const pause2 = t => new Promise(resolve => setTimeout(resolve, t));
                await pause2(250);
                if(boolArray[i]===true){
                    boolArray[j] = false;
                    console.log("1. . . . multiple = ",j);
                    children[j-1].style.backgroundColor = "black";
                    // children[j-1].style.backgroundColor = colorsArray[j];
                    children[j-1].style.color = "whitesmoke";
                    children[j-1].style.fontStyle = "italic";
                    children[j-1].style.textDecoration = "line-through";
                    console.log("2. ",children[j-1].textContent," is not prime");
                    }
                }
                console.log("3. ---- now  i = ",i);
                console.log("3. ---- text here  at i-1 = ",children[i-1].textContent);
                console.log("3. ---- text here  at i = ",children[i].textContent);
                console.log("3. ---- text here  at i+1 = ",children[i+1].textContent);
        
            }      
          }
          document.getElementById("info1").textContent = "done";
 
        }
        




        main();


        console.log(" ............................... done .............................. ")
    });

console.log("done");
console.log(" grid dimensions : ",sizeOfGrid,"X",sizeOfGrid);



}

console.log("\n................ end .................\n");


// better visualization using promise and async function

