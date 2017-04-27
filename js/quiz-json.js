var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct=0, name = 0; 
//setting variables

//Set array to hold answers
var quizAnswers = [];

var questions=[
    {
	    question: "What international team are nicknamed the kiwis",//question
	    correctAnswer: "New Zealand",//right answer to question
        
        //list of multiple choice answers
	    answer0: "New Zealand",
	    answer1: "Australia",
	    answer2: "England",
        answer3: "Ireland"
	},
    {
	    question: "How many times have New Zealand won the world cup?",//question
	    correctAnswer: "3",//right answer to question
        
        //list of multiple choice answers
	    answer0: "4",
	    answer1: "1",
	    answer2: "0",
        answer3: "3"
	},
    {
	    question: "When did Ireland last win the grand slam",//question
	    correctAnswer: "2009",//right answer to question
        
        //list of multiple choice answers
	    answer0: "2009",
	    answer1: "2001",
	    answer2: "1998",
        answer3: "2016"
	},
    {
	    question: "Who won the 2017 Six Nations",//question
	    correctAnswer: "Enland",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Ireland",
	    answer1: "England",
	    answer2: "Italy",
        answer3: "Wales"
	},
	{
		question: "Who won the 2007 Rugby World Cup?",//question
		correctAnswer: "South Africa",
		
		answer0: "South Africs",
		answer1: "Ireland",
		answer2: "England",
		answer3: "New Zealend"
	},
	{
		question: "Who are the Lions playing this summer?",
		correctAnswer: "New Zealand",
		
		answer0: "Austalia",
		answer1: "New Zealand",
		answer2: "South Africa",
		answer3: "France"
	},
	{
		question: "Who won the PRO12 in 2016?",
		correctAnswer: "Connacht",
		
		answer0: "Connacht",
		answer1: "Leinster",
		answer2: "Munster",
		answer3: "Ulster"
	},
	{
		question: "What province did Ronan O'Gara play for?",
		correctAnswer: "Munster",
		
		answer0: "Connacht",
		answer1: "Leinster",
		answer2: "Munster",
		answer3: "Ulster"
	},
	{
		question: "What year did Brain O'Driscoll retire?",
		correctAnswer: "2013",
		
		answer0: "2007",
		answer1: "2001",
		answer2: "2000",
		answer3: "2013"
	},
	{
		question: "Who is Irelands top try scorer?",
		correctAnswer: "Brain O'Driscoll",
		
		answer0: "Ronan O'Gara",
		answer1: "Rob Kearney",
		answer2: "Jonny Sexton",
		answer3: "Brain O'Driscoll"
	},
	{
		question: "When did England last win the world cup?",
		correctAanswer: "2003",
		
		answer0: "2001",
		answer1: "2003",
		answer2: "2006",
		answer3: "2009"
	},
	{
		question: "Who is Englands current head coach?",
		correctAnswer: "Eddie Jones",
		
		answer0: "Brain Jones",
		answer1: "Eddie Jones",
		answer2: "John Dunne",
		answer3: "Max Holloway"
	},
	{
		question: "Who has played for Ireland the most?",
		correctAnswer: "Brian O'Driscoll",
		
		answer0: "Paul O'Connel",
		answer1: "Jonny Sexton",
		answer2: "Brian O'Driscoll",
		answer3: "John Hayes"
	},
	{
		question: "What city did Ireland beat New Zealand in?",
		correctAnswer: "Chicago",
		
		answer0: "Dublin",
		answer1: "New York",
		answer2: "Chicago",
		answer3: "Cork"
	},
	{
		question: "Who is Leinsters head coach?",
		correctAnswer: "Leo Cullen",
		
		answer0: "Leo Cullen",
		answer1: "Joe Smith",
		answer2: "Jimmy Coen",
		answer3: "Pat Lam"
	},
	{
		question: "What French team is Ronan O'Gara coaching?",
		correctAnswer: "Racing Metro",
		
		answer0: "Stade Francais",
		answer1: "Clermont Avergne",
		answer2: "Racing Metro",
		answer3: "Toulon"
	},
	{
		question: "Who is Ireland most successful team?",
		correctAnswer: "Leinster",
		
		answer0: "Leinster",
		answer1: "Munster",
		answer2: "Ulster",
		answer3: "Connacht"
	},
	{
		question: "Who knocked Ireland out of the last world cup?",
		correctAnswer: "Argentina",
		
		answer0: "Japan",
		answer1: "England",
		answer2: "Scotland",
		answer3: "Argentina"
	},
	{
		question: "Who's Ireland captain?",
		correctAnswer: "Rory Best",
		
		answer0: "Neil Best",
		answer1: "Rory Best",
		answer2: "Paul Smith",
		answer3: "CJ Stander"
	},
	{
		question: "Who's Irelands highest points scorer?",
		correctAnswer: "Ronan O'Gara",
		
		answer0: "Jonny Sexton",
		answer1: "Ronan O'Gara",
		answer2: "Brian O'Driscoll",
		answer3: "CJ Stander"
	},
];


function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}


function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function _(x)
{ 
    return document.getElementById(x);
} 

		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2><button onclick='window.print()'>Print this page</button>";
		_("test_status").innerHTML += "  Thank you for completing the quiz";
        pos = 0;
        correct = 0; 
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); 
}



//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);