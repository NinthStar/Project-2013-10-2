var MaxNum = 1000;

var guessNum = -1,
	lowerBound, upperBound;

function createNewLine()
{
	// Add new line
	var newChild = document.createElement("div");
	newChild.className = "system";
	newChild.innerHTML = "User Input>";
	document.body.appendChild(newChild);
	
	newChild = document.createElement("input");
	newChild.id = "input";
	newChild.className = "input";
	document.body.appendChild(newChild);
	
	// Focus on the new line
	document.body.lastChild.focus();
	
	$("input").autoGrowInput();
}

function response(inputText)
{
	// Response to the input data
	var newChild = document.createElement("div");
	newChild.className = "system";
	if (guessNum === -1)
	{
		switch (inputText.toLowerCase())
		{
		case "":
			break;
		case "game":
			// Set number
			do
			{
				guessNum = Math.floor(Math.random() * MaxNum);
			}while (guessNum === 0);
			
			// Set Bound
			lowerBound = 0;
			upperBound = MaxNum;
			
			newChild.innerHTML = "The number is in (0, 1000).<br/>";
			
			break;
		case "help":
			newChild.innerHTML = "Command List :<br/>"
							   + "->game..: Play a mini game!<br/>"
							   + "->help..: Get command list.<br/>"
							   + "->hello.: Say \"Hello\" to the system.<br/>"
							   + "->time..: Get Current Time.<br/>"
							   + "->exit..: Close the page.<br/>"
			break;
		case "hello":
			newChild.innerHTML = "Hello~!<br/>";
			break;
		case "time":
			var date = new Date();
			newChild.innerHTML = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "<br/>";
			break;
		case "exit":
			// Do not work in Firefox
			window.open('','_parent','');
			window.close();
			break;
		default:
			newChild.innerHTML = "Unknown command. You can use \"help\" to get command list.<br/>"
			break;
		}
	}
	else
	{
		// Minigame
		var userInput = parseInt(inputText);
		
		// Get the number
		if (guessNum === userInput)
		{
			newChild.innerHTML = "You get it! The number is " + guessNum + "!<br/>";
			guessNum = -1;
		}
		// Do not get the number
		else
		{
			if (userInput > lowerBound && userInput < guessNum)
				lowerBound = userInput;
			else if (userInput < upperBound && userInput > guessNum)
				upperBound = userInput;
			newChild.innerHTML = "No! The number is in (" + lowerBound + ", " + upperBound + ").<br/>";
		}
	}
	
	document.body.appendChild(newChild);
}

function detectEnter(event)
{
	if (event.keyCode === 13)
	{
		// Get input data
		var lastInput = document.getElementById("input"),
			inputText = lastInput.value,
			newChild;
		
		// Change input data into div
		document.body.removeChild(lastInput);
		newChild = document.createElement("div");
		newChild.className = "input";
		newChild.innerHTML = inputText + "<br/>";
		document.body.appendChild(newChild);
		
		// Response to the input data
		response(inputText);
		
		// Add new line
		createNewLine();
	}
}
