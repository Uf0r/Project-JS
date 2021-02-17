const body = document.getElementById("body")
var input = document.getElementById("inp")
const button = document.getElementById("button")
const prob = 6;
const all = document.getElementById("all")
const png1 = document.getElementById("png1")
const png2 = document.getElementById("png2")
const png3 = document.getElementById("png3")                                                                                               
const png4 = document.getElementById("png4")
const png5 = document.getElementById("png5")
const png6 = document.getElementById("png6")
const color = ['cyan', 'teal', 'gray' ,'pink', 'silver', 'emerald', 'purple', 'khaki', 'plum', 'kelly', 'forest', 'indigo', 'marine', 'amber', 'beige'];
const buk = document.getElementById("buk")

function rest(){
     window.location.reload()}



function kart(){
    if (popitki == 6){
        png6.classList.remove("hide");
        
        
    }
        
    if (popitki == 5){
        
        png5.classList.remove("hide");
        png6.classList.add("hide");
        

    }
    if (popitki == 4){
        png4.classList.remove("hide");
        png5.classList.add("hide");
        

    }
    if (popitki == 3){
        png4.classList.add("hide");
        png3.classList.remove("hide");
    }
    if (popitki == 2){
        png3.classList.add("hide");
        png2.classList.remove("hide");
    }
    if (popitki == 1){
        png2.classList.add("hide");
        png1.classList.remove("hide");
    }
}


function background(){
    const Oq = Math.random()*color.length;
    all.style.backgroundColor = color[parseInt(Oq)]; 
}


var words = ["Луна", "Созвездие", "Космос", "вселенная" ,"Планета" , "Скопление" , "ананас" , "лук" , "стрела" , "война" , "религия" , "хол" , "кровать" , "конь" , "кит" , "стена" , "болезнь" , "животное" , "питомец" , "словарь" , "политика" , "пользователь" , "подарок" , "повесть" , "страна" , "логика"];
var word = words[Math.floor(Math.random() * words.length)].toLowerCase();
var proch = [];
console.log(word.length)
    for (var i = 0; i < word.length; i++) {
        proch[i] = " _ ";
    }
    for (var g = 0; g < word.length; g++){
        eval("var nom_"+ g +"="+ g);
        nom_0 = word[0];     nom_1 = word[1];   nom_2 = word[2];  nom_3 = word[3];  nom_4 = word[4];    nom_5 = word[5];    nom_6 = word[6];     nom_7 = word[7];


    }

var longWord = word.length;
var ugadan = proch;
var popitki = prob;




const task = "Слово состоит из " + "''" + longWord + "''" + " букв " + proch.join(" ") 
const PER1 = document.createElement("p");
        PER1.innerHTML=task;
        body.appendChild(PER1);
const HP = document.createElement("p");
        HP.innerHTML="Oсталось попыток: " + popitki;
        body.appendChild(HP);

        



        
button.addEventListener("click", function(e){
    var guess = input.value
    
    console.log(word)
    console.log(longWord)
    input.focus()
    
    
    if (longWord == 0){
        PER1.innerHTML="Ты победил"
        setInterval(rest,100)
        
        
    }
    
    
            
            


    if (popitki <= 0){
       
        window.location.reload()
    }
            
    for (var p = 0; p < word.length; p++) {

        if ( guess === ugadan[p]) {
            alert("Такая буква уже отгадана попробуй другую!")
            input.value = ""
            
            break;}
        

        if (guess.length > 1) {
            alert("Пожалуйста введите только одну букву!");
            popitki++
            
            input.value = ""
            break}

         if (guess.length < 1) {
             alert("Пожалуйста введите хотябы одну букву!");
             popitki++
             
             input.value = ""
             break}

        


        if ( guess === word[p]) {
            ugadan[p] = guess;
            longWord--;
            restOfLetter = longWord;
            PER1.innerHTML="Слово состоит из " + "''" + longWord + "''" + " букв " + ugadan 
            input.value = ""
            const isp = document.createElement("h1")
            buk.appendChild(isp )
            isp.innerHTML=guess
            
            
            
        }
        if(longWord<=0){
            
        }

        
    }
            
    for (var c = 0; c < 1; c++) {
        if (nom_0 === guess || nom_1 === guess || nom_2 === guess || nom_3 === guess || nom_4 === guess || nom_5 === guess || nom_6 === guess || nom_7 === guess)
        {

        } else {
            
            popitki--;
            HP.innerHTML="Oсталось попыток: " + popitki;
            const isp = document.createElement("h1")
            buk.appendChild(isp )
            isp.innerHTML=guess
            input.value = ""

            
            
            
        }
    

    }
    

    kart();
});
setInterval(background,2000)
