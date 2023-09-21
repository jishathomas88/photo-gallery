let galleryEl = document.getElementById("gallery");
const btn = document.getElementById("btn");
const errorMessage=document.getElementById("errorMessage")

console.log(btn);

btn.addEventListener("click", () => {
  fetchPhotos();
});


//get photos from unssplash api and displays in gallery element
async function fetchPhotos() {
    const inputValue = document.getElementById("input").value;
    console.log(inputValue)
    //checking inputnumber between 0 and 11 if so return
    if(inputValue > 10 || inputValue < 1){
    errorMessage.style.display="block";
    errorMessage.innerText="Number should be greater than 1 and less than 10"
    return
    }
 //if inputnumber between 0 and 11 fetch data and display in gallery
 let imgs = "";
 try{ 
         const res=await fetch(
         `https://api.unsplash.com/photos/?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=dk9Q19EvN2CB-9yMyYysAtJDSe7J7xw6Y7BCstdyi-s`
         )
         const data=await res.json()
         if (data) {
                     console.log(data);
                     data.forEach((pic) =>
                         (imgs += `
                         <img src="${pic.urls.small}" alt="" />
                         `));
                         console.log(imgs);
                         errorMessage.style.display="none"
                         galleryEl.style.display = "block";
                         galleryEl.innerHTML = imgs;
                        }                    
    
            }catch(error){
                errorMessage.style.display="block"
                errorMessage.innerText="An error happened ,try again later"
            }
            
        }