/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
       console.log(previewPic)

       document.getElementById('imagesRaw').style.backgroundImage = "url(" + previewPic.src + ")";
   
       document.getElementById('imagesRaw').textContent = previewPic.alt; 
       
   }

		
        function setImages(){
            options = ["atthebeach.jpg", "Attherestaurant.jpg", "Fianceandmyself.jpg", "FianceGreyson.jpeg", "UsatBeach1.jpeg", "UsThreeRestaurant.jpg"]
        
            currentImages = document.querySelectorAll("#imagesRaw img.preview")
            for (var i = 0; i < currentImages.length; i++) {
                console.log("imagesRaw "+ isSecureContext)

                randomImg = "images/" + options[Math.floor(Math.random() * options.length)];

                currentImages[i].src =randomImg

                currentImages[i].setAttribute("tabindex","0")

                

            }   

        }
        


	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    document.getElementById('imagesRaw').style.backgroundImage = "url(" + + ")";

    document.getElementById('imagesRaw').textContent = 'Hover over an image below to display here.';
		
	}

    