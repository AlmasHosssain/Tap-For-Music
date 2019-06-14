

const music = (()=>{

	let $ = (container) =>{
		return document.querySelectorAll(container);
	}

	var sounds = $('.sound');
	var pads = $('.pads div');
	
	var color = [

			"#60d394",
			"#d36060",
			"#c060d3",
			"#d3d160",
			"#606bd3",
			"#60c2d3"

	]
	//console.log(pads);

	pads.forEach((pad,index)=>{
		pad.addEventListener('click',()=>{
			sounds[index].currentTime = 0;
			sounds[index].play();
			addBubble(index);
		})
	})

	const addBubble = (index) =>{

		var visual = document.querySelector('.visual');
		var bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = color[index];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener('animationend',()=>{
			visual.removeChild(this);
		});

	}

})();