let name = window.prompt("What is your name?");
document.getElementById("name").innerText = name;
let start = document.getElementById("start");
start.addEventListener("click", (e) => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    width = Number(20);
    height = Number(30);
    click_margin = Number(25);
    progress_width = Number(0);
    click_count = Number(1);
    final = Number(0);
    click_cost = Number(1);
    sec_cost = Number(1);
    coins = Number(0);
    followers = Number(0);
    add = Number(50);
    sec_click = Number(0);
    a = Number(0);
    r = Number(0);
    counter = Number(1);
    a_count = Number(1);
    r_count = Number(1);
    talk_count = Number(1);
    document.getElementById("follow_count").style.display = "none";
    document.getElementById("later").style.display = "none";
    document.getElementById("matrix").style.display = "none";
    document.getElementById("click_count").innerText = click_count;
    document.getElementById("sec_count").innerText = sec_click;
    document.getElementById("click_cost").innerText = click_cost;
    document.getElementById("sec_cost").innerText = sec_cost;
})
let tata = document.getElementById("tata");
let width = Number(20);
let height = Number(30);
let click_margin = Number(25);
let progress_width = Number(0);
let click_count = Number(1);
let final = Number(0);
let click_cost = Number(1);
let sec_cost = Number(1);
let coins = Number(0);
let followers = Number(0);
let add = Number(50);
let sec_click = Number(0);
let per_click = document.getElementById("per_click");
let per_sec = document.getElementById("per_sec");
let matrix = document.getElementById("matrix");
document.getElementById("click_cost").innerText = click_cost;
document.getElementById("sec_cost").innerText= sec_cost;
document.getElementById("click_count").innerText = click_count;
document.getElementById("sec_count").innerText = sec_click;
tata.addEventListener("mousedown", (e) => {
    coins += click_count;
    width += 1;
    height += 1;
    click_margin += 0.3;
    progress_width += click_count;
    if(progress_width > 100){
        progress_width = 0;
        followers++;
        coins += add;
        add = Math.round(add * 1.1);
        document.getElementById("progress").style.width = progress_width+"%";
        document.getElementById("follow_count").style.display = "block";
        document.getElementById("later").style.display = "block";
        document.getElementById("matrix").style.display = "block";
        document.getElementById("followers").innerText = followers;
    }
    document.getElementById("tata").style.width = width +"vw";
    document.getElementById("tata").style.height = height +"vh";
    document.getElementById("click_me").style.marginLeft = click_margin+"vw";
    document.getElementById("progress").style.width = progress_width+"%";
    document.getElementById("coins").innerText = coins;
})
tata.addEventListener("mouseup", (e) => {
    width -= 1;
    height -= 1;
    click_margin -= 0.3;
    document.getElementById("tata").style.width = width +"vw";
    document.getElementById("tata").style.height = height +"vh";
    document.getElementById("click_me").style.marginLeft = click_margin+"vw";
})
per_click.addEventListener("click", (e) => {
    if(coins >= click_cost){
        click_count+=0.1;
        coins-=click_cost;
        click_cost++;
        document.getElementById("click_cost").innerText = click_cost;
        document.getElementById("coins").innerText = coins;
        document.getElementById("click_count").innerText = click_count;
    }
})
per_sec.addEventListener("click", (e) => {
    if(coins >= sec_cost){
        sec_click+=0.1;
        coins-=sec_cost;
        sec_cost++;
        document.getElementById("sec_cost").innerText = sec_cost;
        document.getElementById("coins").innerText = coins;
        document.getElementById("sec_count").innerText = sec_click;
    }
})
function sec(){
    coins += sec_click;
    progress_width += sec_click;
    if(progress_width > 100){
        progress_width = 0;
        followers++;
        coins += add;
        add = Math.round(add * 1.1);
        document.getElementById("progress").style.width = progress_width+"%";
        document.getElementById("follow_count").style.display = "block";
        document.getElementById("later").style.display = "block";
        document.getElementById("matrix").style.display = "block";
        document.getElementById("followers").innerText = followers;
    }
    document.getElementById("coins").innerText = coins;
    document.getElementById("progress").style.width = progress_width+"%";
}
setInterval(sec, 1000);
matrix.addEventListener("click", (e) => {
    if(followers >= 101){
        document.getElementById("after").style.display = "block";
    }
})
let cont = document.getElementById("cont");
let a = Number(0);
let r = Number(0);
let counter = Number(1);
cont.addEventListener("mousedown", (e) => {
    if(counter % 2 != 0 || r_count == 30){
        document.getElementById("andwre_tata").style.bottom = "5vh";
    }
    else{
        document.getElementById("reeves").style.bottom = "5vh";
    }
    counter++;
})
cont.addEventListener("mouseup", (e) => {
    document.getElementById("andwre_tata").style.bottom = "0vh";
    document.getElementById("reeves").style.bottom = "0vh";
})
let a_count = Number(1);
let r_count = Number(1);
let talk_count = Number(1);
const reeves = document.getElementById("reeves");
cont.addEventListener("click", (e) => {
    if(talk_count % 2 != 0){
        document.getElementById("r_talk").innerText = " ";
        document.getElementById("r_talk").style.background = "none";
        document.getElementById("a_talk").style.backgroundColor = "black";
        if(a_count == 1){
            document.getElementById("a_talk").innerText = "So... we finally meet, Neo!";
        }
        if(a_count == 2){
            document.getElementById("a_talk").innerText = "I was waiting for this moment, all my life!!";
        }
        if(a_count == 3){
            document.getElementById("a_talk").innerText = "NO! It's exactly the opposite!";
        }
        if(a_count == 4){
            document.getElementById("a_talk").innerText = "I was training, doing 500 pushups everyday, to become strong enough, to destroy you!";
        }
        if(a_count == 5){
            document.getElementById("a_talk").innerText = "I'm no fool, just a cigar and caffeine addict!";
        }
        if(a_count == 6){
            document.getElementById("a_talk").innerText = "I wouldn't be so sure about that, if I was you!";
        }
        if(a_count == 7){
            document.getElementById("a_talk").innerText = "I could ask the same question!";
        }
        if(a_count == 8){
            document.getElementById("a_talk").innerText = "!";
        }
        if(a_count == 9){
            document.getElementById("a_talk").innerText = "Nothing changed, you idiot!";
        }
        if(a_count == 10){
            document.getElementById("a_talk").innerText = "What do you mean!?";
        }
        if(a_count == 11){
            document.getElementById("a_talk").innerText = "Which one?";
        }
        if(a_count == 12){
            document.getElementById("a_talk").innerText = "Ha, I played you, just like I played the Doicott!";
        }
        if(a_count == 13){
            document.getElementById("a_talk").innerText = "Wait... your full potential is changing the colors of other people's cars?";
        }
        if(a_count == 14){
            document.getElementById("a_talk").innerText = "What a lame power!";
        }
        if(a_count == 15){
            document.getElementById("a_talk").innerText = "You're challanging me?";
        }
        if(a_count == 16){
            document.getElementById("a_talk").innerText = "Curiosity killed the cat. You heard this saying before?";
        }
        if(a_count == 17){
            document.getElementById("a_talk").innerText = "Enough of this nonsense!!";
        }
        if(a_count == 18){
            document.getElementById("a_talk").innerText = "!";
        }
        if(a_count == 19){
            document.getElementById("a_talk").innerText = "GIVE ME EVERYTHING YOU GOT!";
        }
        if(a_count == 20){
            document.getElementById("a_talk").innerText = "Wait!";
        }
        if(a_count == 21){
            document.getElementById("a_talk").innerText = "If you finish the monologue, the developer will probably get sued...";
        }
        if(a_count == 22){
            document.getElementById("a_talk").innerText = "Aaaaand I have more than 100 followers on twitter, so you will probably get canceled if you kill me...";
        }
        if(a_count == 23){
            document.getElementById("a_talk").innerText = "It's basically the trash can of the Internet.";
        }
        if(a_count == 24){
            document.getElementById("a_talk").innerText = "You don't just get cancelled on twitter, you get canceleld on the whole Internet!";
        }
        if(a_count == 25){
            document.getElementById("a_talk").innerText = "Wait! That's your weakness!";
        }
        if(a_count == 26){
            document.getElementById("a_talk").innerText = "Getting put in a bad light by lies made up by my followers and I!";
        }
        if(a_count == 27){
            document.getElementById("a_talk").innerText = "With the power of my botted followers... GET CANCELED!!!";
        }
        if(a_count == 28){
            document.getElementById("reeves").style.transition = "2s";
            document.getElementById("reeves").style.opacity = "0";
            document.getElementById("a_talk").style.background = "none";
        }
        if(a_count == 29){
            document.getElementById("after").style.display = "none";
            document.getElementById("thanks").style.display = "block";
        }
        a_count++;
    }
    else{
        document.getElementById("a_talk").innerText = " ";
        document.getElementById("a_talk").style.background = "none";
        document.getElementById("r_talk").style.backgroundColor = "black";
        if(r_count == 1){
            document.getElementById("r_talk").innerText = "Yes, Andwre!";
        }
        if(r_count == 2){
            document.getElementById("r_talk").innerText = "Then you must have a pretty boring life, Mr. Tata!";
        }
        if(r_count == 3){
            document.getElementById("r_talk").innerText = "What do you mean by that?";
        }
        if(r_count == 4){
            document.getElementById("r_talk").innerText = "You think I didn't train twice as hard as you did? That would be foolish of you!";
        }
        if(r_count == 5){
            document.getElementById("r_talk").innerText = "That will be your downfall, Andwre!";
        }
        if(r_count == 6){
            document.getElementById("r_talk").innerText = "So... you want to see my full potential?";
        }
        if(r_count == 7){
            document.getElementById("r_talk").innerText = "Then be ready, to be amazed!";
        }
        if(r_count == 8){
            document.getElementById("r_talk").innerText = "...";
        }
        if(r_count == 9){
            document.getElementById("r_talk").innerText = "How can you be so sure about that, Mr. Tata?";
        }
        if(r_count == 10){
            document.getElementById("r_talk").innerText = "All I'm going to say is that your bugatti may have lost it's color!";
        }
        if(r_count == 11){
            document.getElementById("r_talk").innerText = "Erm...";
        }
        if(r_count == 12){
            document.getElementById("r_talk").innerText = "Touche, Andwre!";
        }
        if(r_count == 13){
            document.getElementById("r_talk").innerText = "Maybe...";
        }
        if(r_count == 14){
            document.getElementById("r_talk").innerText = "What's your power then!?";
        }
        if(r_count == 15){
            document.getElementById("r_talk").innerText = "I'm just curios!";
        }
        if(r_count == 16){
            document.getElementById("r_talk").innerText = "Yes, and I'm lucky I'm not a cat!";
        }
        if(r_count == 17){
            document.getElementById("r_talk").innerText = "This wasn't nonsense... it was a distraction!";
        }
        if(r_count == 18){
            document.getElementById("r_talk").innerText = "All this time I was preparing my true power!";
        }
        if(r_count == 19){
            document.getElementById("r_talk").innerText = "KAMEHAME-";
        }
        if(r_count == 20){
            document.getElementById("r_talk").innerText = "What?";
        }
        if(r_count == 21){
            document.getElementById("r_talk").innerText = "Oh...";
        }
        if(r_count == 22){
            document.getElementById("r_talk").innerText = "What is twitter?";
        }
        if(r_count == 23){
            document.getElementById("r_talk").innerText = "Then getting cancelled on it doesn't mean anything right?";
        }
        if(r_count == 24){
            document.getElementById("r_talk").innerText = "I don't want to get cancelled...";
        }
        if(r_count == 25){
            document.getElementById("r_talk").innerText = "What?";
        }
        if(r_count == 26){
            document.getElementById("r_talk").innerText = "DON'T DO IT!";
        }
        if(r_count == 27){
            document.getElementById("r_talk").innerText = "NOOOOOOO!";
        }
        if(a_count == 29){
            document.getElementById("a_talk").style.backgroundColor = "black";
            document.getElementById("r_talk").style.background = "none";
            document.getElementById("a_talk").innerText = "Get cancelled, idiot!";
            document.getElementById("cont").innerText = "Finish";
        }
        r_count++;
    }
    talk_count++;
})
let back = document.getElementById("back");
back.addEventListener("click", (e) => {
    document.getElementById("menu").style.display = "block";
})