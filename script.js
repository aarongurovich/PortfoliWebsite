let image1 = document.getElementById('github');
let image2 = document.getElementById('linkedin');
function redirect1(){
    window.location.href = "https://github.com/aarongurovich?tab=repositories";
}
function redirect2(){
    window.location.href = "https://www.linkedin.com/in/aaron-gurovich-b2087b2b1/";
}
image1.onclick = redirect1;
image2.onclick = redirect2;