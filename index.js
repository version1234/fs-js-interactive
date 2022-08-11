console.log("Hello World");
const message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault()
    let inputField= document.querySelector("input");
    let movie=  document.createElement("li");
    let movieTitle= document.createElement("span")
    movieTitle.textContent=inputField.value
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    let movieList = document.querySelector("ul")
    movieList.appendChild(movie)
    inputField.value=""
    
}

 const form = document.querySelector("form")
form.addEventListener('submit', addMovie);

function deleteMovie (event){
    // message.textContent= 'Movie deleted!'
    message.textContent= event.target.parentNode.firstChild.textContent + ' deleted!'


event.target.parentNode.remove()
revealMessage()
}

function crossOffMovie(event){

 event.target.classList.toggle("checked")

if (event.target.classList.contains("checked") === true){
//    message.textContent =  "Movie watched!"
   message.textContent = event.target.textContent + " watched!"

} else {
    // message.textContent = "Movie added back!"
    message.textContent =  event.target.textContent + " added back!"

}
revealMessage()
}
function revealMessage(){
    message.classList.remove('hide')
    setTimeout(()=>{
        message.classList.add('hide')
      
    }, 1000)
    
}