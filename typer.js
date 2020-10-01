const msg= document.getElementById('textgiven');
const result= document.getElementById('result');
const result1= document.getElementById('result1');
const userinput = document.getElementById('userinput');
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#medBtn");
var hardBtn = document.querySelector("#hardBtn");
var btn = document.getElementById('btn');
var mistake = document.getElementById('mistake');

const Ewords = [
"Jim and Anne will be in charge of the spring field day to be held in early June. They will ask their friends' aid to get set up. There will be games for the boys and girls. The children will want to hike, ride their bikes, and swim. This yearly event will be held in the new Peach Grove Park. Ruth has work to do on the plans for food for the day.",
"Last year Ruth spent most of her time helping the two cooks with many snacks. Hot dogs, fries, soft drinks, ice cream, and candy apples were big sellers. Apple pie and ice cream sold well too. I hope Ruth serves the same food this year. George Long will hire the band and singer for the day. A great jazz band will play. George's mom leads the group.",
"The jazz band is sure to be one of the big hits. George is to have them play from one to four and also in the evening. The fine songs they will play are sure to please all of us. Nice gifts will be given to all of the winners in each of the events. Local news coverage will include television and newspapers. Joyce Scott will take care of the pictures for the school paper and yearbook. ",
" Many new young artists in the upper New England states are famous around the world as leaders in new American art. These fine artists are very good in their chosen fields and are willing to share their many talents by teaching others. The students have had the chance to learn and use skills in oil painting, sketching with chalk, sculpting, and weaving.",
"Learning to typewrite is a skill that will help all of us in our work today. The development of the computer will open doors for people with the keyboarding skills and will make typing a necessity. Managers, as well as secretaries, will need skill at the keyboard to input data and process words. Therefore, good keyboarding skills may be important to you."

];
const Mwords = [
"Some people combine touch typing and hunt and peck by using a buffering method. In the buffer method, the typist looks at the source copy, mentally stores one or several sentences, then looks at the keyboard and types out the buffer of sentences. This eliminates frequent up and down motions with the head and is used in typing competitions in which the typist is not well versed in touch typing. Not normally used in day-to-day contact with keyboards, this buffer method is used only when time is of the essence.",
"Data is often entered into a computer from paper documents using a keyboard. The keyboards used can often have special keys and multiple colors to help in the task and speed up the work. Proper ergonomics at the workstation is a common topic considered. The Data Entry Clerk may also use a mouse, and a manually-fed scanner may be involved. Speed and accuracy, not necessarily in that order, are the key measures of the job; it is possible to do this job from home.",
"Two common terms used to describe a salesperson are 'Farmer' and 'Hunter'. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales technique. In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called 'sales capturing'. An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson.",
"Proofreader applicants are tested primarily on their spelling, speed, and skill in finding errors in the sample text. Toward that end, they may be given a list of ten or twenty classically difficult words and a proofreading test, both tightly timed. The proofreading test will often have a maximum number of errors per quantity of text and a minimum amount of time to find them. The goal of this approach is to identify those with the best skill set. "

];
const Hwords =[
"The first personnel management department started at the National Cash Register Co. in 1900. The owner, John Henry Patterson, organized a personnel department to deal with grievances, discharges and safety, and training for supervisors on new laws and practices after several strikes and employee lockouts. During the 1970s, companies experienced globalization, deregulation, and rapid technological change which caused the major companies to enhance their strategic planning and focus on ways to promote organizational effectiveness.",
"Business meetings, and professional recordings can contain sensitive data, so security is something a transcription company should not overlook when providing services. Companies should therefore follow the various laws and industry best practice, especially so when serving law firms, government agencies or courts. Medical Transcription specifically is governed by HIPAA, which elaborates data security practices and compliance measures to be strictly followed, failure of which leads to legal action and penalties.",
"Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.",
"Because of the laboriousness of the translation process, since the 1940s efforts have been made, with varying degrees of success, to automate translation or to mechanically aid the human translator. More recently, the rise of the Internet has fostered a world-wide market for translation services and has facilitated 'language localization'. Ideally, the translator must know both languages, as well as the subject that is to be translated."
];

generateText1 = () =>{
	let randomNumber1 = Math.floor(Math.random() * Ewords.length);
	msg.textContent = Ewords[randomNumber1];
}
generateText2 = () =>{
	let randomNumber2 = Math.floor(Math.random() * Mwords.length);
	msg.innerText = Mwords[randomNumber2];
}
generateText3 = () =>{
	let randomNumber3 = Math.floor(Math.random() * Hwords.length);
	msg.innerText = Hwords[randomNumber3];
}

easyBtn.addEventListener('click', function(){
	if(this.innerText == 'EASY'){
		userinput.disabled = false;
	generateText1();
}
})
mediumBtn.addEventListener('click', function(){
	if(this.innerText == 'MEDIUM'){
		userinput.disabled = false;
	
	generateText2();
}
	

})
hardBtn.addEventListener('click', function(){
	if(this.innerText == 'HARD'){
		userinput.disabled = false;
	
	generateText3();
}
})

let endTime, startTime;
start = ()=>{
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Stop";
	result1.innerText = "";
	result.innerText = "";
	
	}
end = ()=>{
	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime)/ 1000); //for msec
    let totalStr = userinput.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount / totalTime)* 60);   //give the wpm
    let message = " You typed at speed: "+speed+" words per minute.\n";
  
    message += compareWords(msg.innerText,totalStr); //give the typing speed of user in wpm and how ryt he was
  result1.innerText="RESULT:\n";
  result.innerText = message;
  

 
}
const compareWords = (str1,str2) =>{
 let word1 = str1.split(" ");
 let word2 = str2.split(" ");
 let cnt = 0;

 word1.forEach(function (item, index) {   //for in order comparision
  
if (item == word2[index]) {
	cnt++;    //count the correct words
 }
 
})
 let errors = ( word1.length - cnt );
 return (cnt+" words correct out of "+word1.length +" words.\nTotal errors: "+errors+".");

}




wordCounter =(str)=>{
let response = str.split(" ").length;   //it will count the number of spaces and hence words
return response;
}

let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


let interval = null;

let status = "stopped";


//function to when increment each value
function stopwatch(){

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0; 
        minutes ++;

        if(minutes /60 ===1){
            minutes = 0;
            hours++;
        }
    }

    //adding 0 before one digit charachters
    if (seconds <10) {
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes <10) {
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours <10){
        displayHours = "0" +hours.toString();
    }
    else{
        displayHours = hours;
    }

    //display
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
    if (status === "stopped"){
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("btn").innerHTML = "Stop";
        status = "started";
        let date = new Date();
	startTime = date.getTime();
	//btn.innerText = "Stop";
	result1.innerText = "";
	result.innerText = "";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("btn").innerHTML = "START";
        status = "stopped";
        end();


     }
}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("btn").innerHTML = "START";
    status="stopped";
    userinput.value = ''; 
    result1.innerText = "";
	result.innerText = "";

}

