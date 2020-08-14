// get the references to active HTML elements 

const btns = document.querySelectorAll('.navbar button'); // event target object

const newContent = document.querySelector('.main-content');

// create event handler

function addContent(ev){
    
    let clickedButton = ev.target;
    
    for(let btn of btns){
        if(btn.hasAttribute('id')){
            
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active';
    
    if(clickedButton.value === 'c1'){
		
			fetch('partials/homepage.html').then(function (rsp){
			return rsp.text();
	
		})
	.then(function (data){
		newContent.innerHTML = data;
	
	});
       
    
        
       
    } else if(clickedButton.value === 'c2'){
		
		
				fetch('partials/portfoliopage.html').then(function (rsp){
				return rsp.text();
	
		})
	.then(function (data){
		newContent.innerHTML = data;
	
	});        
         
    } 	
	
}
    

for(let btn of btns){
  btn.addEventListener('click', addContent);
}
