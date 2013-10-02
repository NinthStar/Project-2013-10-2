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
	
	switch (inputText.toLowerCase())
	{
	case "":
		break;
	case "help":
		newChild.innerHTML = "Command List :<br/>"
		                   + "->help..: Get command list.<br/>"
						   + "->hello.: Say \"Hello\" to the system.<br/>"
						   + "->exit..: Close the page.<br/>"
		break;
	case "hello":
		newChild.innerHTML = "Hello~!<br/>";
		break;
	case "time":
		newChild.innerHTML = "<br/>";
		break;
	case "exit":
		
		break;
	default:
		newChild.innerHTML = "Unknown command. You can use \"help\" to get command list.<br/>"
		break;
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
