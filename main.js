let slide = document.querySelector("#slide")
let nextbutton = document.querySelector("#next")
let prevbutton = document.querySelector("#prev")
let end = document.querySelector("#end")
let imges = ["https://img.freepik.com/free-photo/focus-closely-tabby-eyes_1150-19551.jpg?t=st=1721128893~exp=1721132493~hmac=ab5e73a9e81f047e33c687f9f6b394f18f5374979bfca65dd8a832785b3f6f31&w=826",
    "https://img.freepik.com/free-photo/herd-zebra-eating-glass-field-etosha-national-park-namibia_1150-21619.jpg?t=st=1721129053~exp=1721132653~hmac=0f92c3ce7a51285de7f29443583645430fc7da5f22346004ec91886cb76d2e21&w=826",
    "https://img.freepik.com/free-photo/focus-closely-tabby-eyes_1150-19551.jpg?t=st=1721128893~exp=1721132493~hmac=ab5e73a9e81f047e33c687f9f6b394f18f5374979bfca65dd8a832785b3f6f31&w=826",
    "Pic Placeholder.png"
    
]

let indexnumber = 0
slide.src = imges[indexnumber]


nextbutton.addEventListener("click", function(){
    if (indexnumber < imges.length -1){
        indexnumber++
    slide.src = imges[indexnumber]
    }

    if (indexnumber == imges.length -1){
        end.innerHTML = "Dhamadka ayaa la garay"
        end.style.backgroundColor = "white"
        end.style.color = "black"
        end.style.font
    }

})

prevbutton.addEventListener("click", function(){
    if (indexnumber > 0){
        indexnumber--
    slide.src = imges[indexnumber]
    end.innerHTML = "Explore different image"
    end.style.backgroundColor = "white"
        end.style.color = ""
    }


})


