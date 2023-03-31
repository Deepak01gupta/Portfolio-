var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917398523272'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.png'/></div> </a>          <a href='mailto:dg202082@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.png' alt=''></div> </a>      <a target='_blank' href='https://wa.me/917398523272'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.png' alt=''></div> </a>                <a target='_blank' href='https://instagram.com/_deepak_gupta_2608/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.png' alt=''> </div> </a>             <a href='https://www.linkedin.com/in/deepak-gupta-3b8ba51a0/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedIn.png' alt=''></div> </a> </div>";

var resumeString = "<span class='sk'><img src='images/resumeThumbnail.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><label><span class='bold'>Deepak Gupta Resume.pdf</span><br><br><small>click download icon to get resume<small></label></div><a href='assets/Deepak Gupta Resume.pdf' download='Deepak_Gupta_Resume.pdf'><img class='download' src='images/downloadicon.png'></a></div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.275745253461!2d83.07447081436244!3d26.767478872772642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991257e62f48847%3A0x526a5764b5e0fd3!2sBardahiya%20bazar!5e0!3m2!1sen!2sin!4v1664897730196!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Bardahiya Bazar,<br>Khalilabad,<br>Sant Kabir Nagar, Uttarpradesh, INDIA (272175)</address>";


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {

        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 🙏,<br><br>My name is <span class='bold'><a class='alink'>Deepak Gupta</a>.</span><br><br>Professionally I am Chemical Enginner 👨‍🎓 I have completed my graduation in 2022 from <span class='bold'><a class='alink'>Chatrapati Shahu Ji Maharaj University Kanpur</a>.</span><br><br> As a coder I see this opportunity as a way to contribute to an exciting/ forward-thinking/ fast-moving company/ industry, and I feel I can do so, I would be pleased to chat about me..<br><br>Send <span class='bold'><a class='alink'>hello</a></span> to know more about me.<br>");
            }, 2000);
            break;

        case "hello":
            sendTextMessage("<span class='sk'>Send given keyword below to know about me...<br><br>e.g.<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to contact me<br><span class='bold'>'about'</span> - to know about this site<br><span class='bold'>'clear'</span> - to clear conversation</span>");
            break;

        case "skills":
            sendTextMessage("<span class='sk'>I have bachelor degree in Chemical Engineering.<br><br>So, I learn some Software which are very useful:<br><span class='bold'>CHEMCAD<br>ASPEN PLUS</span><br><br> But I can also learn/write code in following languages:<br><span class='bold'>Java<br>HTML<br>CSS<br>Javscript<br>Node JS<br></span><br><br>");
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "education":
            sendTextMessage("<span class='sk'>I have completed my graduation in 2022 from Chatrapati Shahu Ji Maharaj University, Kanpur in Chemical Engineering(Btech.).<br><br> Year : <span class='bold'>2018-2022</span><br>Result: <span class='bold'>60%</span><br><br>I have completed my High school and Intermediate from Blooming Bud's Academy<br><br> Passing Year:<span class='bold'>2015 and 2017</span> <br>Result:<span class='bold'>74% and 54%</span> respectivily.<br><br>");
            break;

        case "address":
            sendTextMessage(addressString);
            break;

        case "clear":
            clearChat();
            break;

        case "about":
            sendTextMessage("This portfolio chatbot 💻 is built using HTML, CSS and JavaScript.<br><br> I doesn't know all about Web Dev., but I learn everyday more. <br><br>Code by <a class='alink' target='_blank' href='https://instagram.com/_deepak_gupta_2608/'><span class='bold'>Deepak Gupta</a> </span>");
            break;

        case "contact":
            sendTextMessage(contactString);
            break;

        default:
            setTimeout(() => {
                sendTextMessage("<span class='sk'>Hey I couldn't get that...👀👀<br>Send <span class='bold'>'hello'</span> to know more about more.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = " ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}