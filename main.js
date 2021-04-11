function submit(){
    Player1Name=document.getElementById("Player_1_Name").value;
    Player2Name=document.getElementById("Player_2_Name").value;
    localStorage.setItem("Player1sname",Player1Name);
    localStorage.setItem("Player2sname",Player2Name);
    window.location.replace("GamePage.html")
}
