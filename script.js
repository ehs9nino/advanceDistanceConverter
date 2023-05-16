(function(){
    "use strict";
    let convertType='miles';
		const heading= document.querySelector('h1');
		const intro=document.querySelector('p');
		const answerDiv=document.getElementById('answer');
		const form=document.getElementById('convert');
		document.addEventListener('keydown',function(event){
			const key=event.code;
			if (key==='KeyK'){
				//change the heading
				heading.innerHTML='Kilometers to Miles Converter';
				//change the intro
				intro.innerHTML='Type in a number of Kilometers and click the button to convert the distance to miles';
				//change the value of convertypevalue
				convertType='Kilometers'
			}
			else if(key==='KeyM'){
				//change the heading
				heading.innerHTML='Miles to Kilometers Converter';
				//change the intro
				intro.innerHTML='Type in a number of miles and click the button to convert the distance to kilometers';
				//change the value of convertypevalue
				convertType='miles'
			}
		})
		form.addEventListener('submit',function(e){
			e.preventDefault();
			const distance=parseFloat(document.getElementById('distance').value);
        const answer=document.getElementById('answer');
        if (distance){
            //convert m to km 1.609344
			//convert km to m 0.621371192
			if(convertType==='miles'){
				const conversion=(distance*1.609344).toFixed(3);
            //display
            const answer=document.getElementById('answer');
            answer.innerHTML=`<h2>${distance} Miles converts to ${conversion} Kilometers</h2>`;
			}
			else if (convertType==='Kilometers'){
				const conversion=(distance*0.621371192).toFixed(3);
            //display
            const answer=document.getElementById('answer');
            answer.innerHTML=`<h2>${distance} Kilometers converts to ${conversion} miles</h2>`;
		
			}
           
        }
        else{
            answer.innerHTML='<h2>Please provide the numbers</h2>';
        }
		})
})();