function send()
{
Number1 = document.getElementById("number1").value;
Number2 = document.getElementById("number2").value;
actual_answer = parseInt(Number1) * parseInt(Number2);
question_number = "<h$>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'><Check</button>"
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

question_turn = "player1";
answer_turn = "player2";


}
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(answer_turn == "player1")
    {
        player_score =          +1;
        document.getElementById("player1_score").innerHTML =    ;
    }
    else
    {
        player_score = player_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
    if(answer_turn == "player1")
    {
answer_turn = "player1";
document.getElementById("player2_name").innerHTML = "Answer Turn -" + player2_name ;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" +player1_name
    }
}
