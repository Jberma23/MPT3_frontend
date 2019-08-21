document.addEventListener("DOMContentLoaded", function(){
   fetchAllVideos()
   fetchAllBodyParts()
//    Arm
   let arm = document.getElementById("arm")
   let arm2 = document.getElementById("arm2")
   let arm3= document.getElementById("arm3")
   let arm4 = document.getElementById("arm4")
    arm.addEventListener("click", renderButton)
    arm2.addEventListener("click", renderButton)
    arm3.addEventListener("click", renderButton)
    arm4.addEventListener("click", renderButton)
//    Upper-arm
   let upperArm = document.getElementById("upper-arm")
   let upperArm2 = document.getElementById("upper-arm2")
   let upperArm3 = document.getElementById("upper-arm3")
   let upperArm4 = document.getElementById("upper-arm4")
   upperArm.addEventListener("click", renderButton)
   upperArm2.addEventListener("click", renderButton)
   upperArm3.addEventListener("click", renderButton)
   upperArm4.addEventListener("click", renderButton)
//    Shoulder Front
   let shoulderFront = document.getElementById("shoulder-front")
   let shoulderFront2 = document.getElementById("shoulder-front2")
   shoulderFront.addEventListener("click", renderButton)
   shoulderFront2.addEventListener("click", renderButton)
//    Shoulder Back
   let shoulderBack = document.getElementById("shoulder-back")
   let shouldBack2 = document.getElementById("shoulder-back2")
   shoulderBack.addEventListener("click", renderButton)
   shouldBack2.addEventListener("click", renderButton)
//    Neck Front
   let neckFront = document.getElementById("neck-front")
   neckFront.addEventListener("click", renderButton)
//    Neck Back
   let neckBack = document.getElementById("neck-back")
   neckBack.addEventListener("click", renderButton)
//    Back
   let back = document.getElementById("back")
   back.addEventListener("click", renderButton)
//    Chest
   let chest = document.getElementById("chest")
   let chest2 = document.getElementById("chest2")
   chest.addEventListener("click", renderButton)
   chest2.addEventListener("click", renderButton)
//    Abdominals
   let abdominals = document.getElementById("abdominals")
   let abdominals2 = document.getElementById("abdominals2")
   abdominals.addEventListener("click", renderButton)
   abdominals2.addEventListener("click", renderButton)
//    Groin
   let groin = document.getElementById("groin")
   groin.addEventListener("click", renderButton)

//    Glutes
   let glutes = document.getElementById("glutes")
   let glutes2 = document.getElementById("glutes2")
   glutes.addEventListener("click", renderButton)
   glutes2.addEventListener("click", renderButton)

//    Hips
   let hip = document.getElementById("hip")
   let hip2 = document.getElementById("hip2")
   hip.addEventListener("click", renderButton)
   hip2.addEventListener("click", renderButton)

//    thigh
   let thigh = document.getElementById("thigh")
   let thigh2 = document.getElementById("thigh2")
   thigh.addEventListener("click", renderButton)
   thigh2.addEventListener("click", renderButton)

//    hamstring
   let hamstring = document.getElementById("hamstring")
   let hamstring2 = document.getElementById("hamstring2")
   hamstring.addEventListener("click", renderButton)
   hamstring2.addEventListener("click", renderButton)
//    Knee
    let knee = document.getElementById("knee")
    let knee2 = document.getElementById("knee2")
    knee.addEventListener("click", renderButton)
    knee2.addEventListener("click", renderButton)

// Calf
    let calf = document.getElementById("calf")
    let calf2 = document.getElementById("calf2")
    calf.addEventListener("click", renderButton)
    calf2.addEventListener("click", renderButton)
// Shin
    let shin = document.getElementById("shin")
    let shin2 = document.getElementById("shin2")
    shin.addEventListener("click", renderButton)
    shin2.addEventListener("click", renderButton)

// Feet
    let foot = document.getElementById("foot")
    let foot2 = document.getElementById("foot2")
    let foot3 = document.getElementById("foot3")
    let foot4 = document.getElementById("foot4")
    foot.addEventListener("click", renderButton)
    foot2.addEventListener("click", renderButton)
    foot3.addEventListener("click", renderButton)
    foot4.addEventListener("click", renderButton)
    
//  form submit 
let submit = document.getElementById("formSubmit")
submit.addEventListener("click", renderNewVideo, {passive: false})




})


function fetchAllVideos(){
    fetch("http://localhost:3000/videos")
    .then(resp => resp.json())
    .then(videos => videos.forEach(renderVideo))
}

 function renderVideo(video){
    let url = video.url.split("=")[1]
    let allVideos = document.getElementById("allVideos")
    let slideDiv= document.createElement("div")
    slideDiv.innerHTML = `<input type="image" width="560" alt="thumbnail" height="315" data-id=body-part-${video.BodyPart.id} id="${video.id}" src="https://i.ytimg.com/vi/${url}/maxresdefault.jpg"/><button id=delete-${video.id}>X</button>`
    allVideos.appendChild(slideDiv)
    let button = document.getElementById(`delete-${video.id}`)
    button.addEventListener("click", deleteVideo)
    let image = document.getElementById(`${video.id}`)
    image.addEventListener("click", function(){
        slideDiv.innerHTML =  `<iframe width="560" height="315" data-id=body-part-${video.BodyPart.id} id="${video.id}" src="https://www.youtube.com/embed/${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button id=deletes-${video.id}>X</button>`
        let button2 = document.getElementById(`deletes-${video.id}`)
        button2.addEventListener("click", deleteVideo)
    })
    // container.appendChild()

}
function fetchAllBodyParts(){
    fetch("http://localhost:3000/body_parts")
    .then(resp => resp.json())
    .then(bodyParts => bodyParts.forEach(renderBodyPart))
}

function renderBodyPart(bodyPart){
    let form = document.getElementById("formSelect")
    let option = document.createElement("option")
    option.id = "form"
    option.value = bodyPart.id
    option.innerText = bodyPart.name
    form.appendChild(option)
    if (bodyPart.location == "arm"){
    let arm = document.getElementById("arm")
    arm.dataset.id = bodyPart.id
    let arm2 = document.getElementById("arm2")
    arm2.dataset.id = bodyPart.id
    let arm3= document.getElementById("arm3")
    arm3.dataset.id = bodyPart.id
    let arm4 = document.getElementById("arm4")
    arm4.dataset.id = bodyPart.id
    } else if (bodyPart.location == "upper-arm"){
        let upperArm = document.getElementById("upper-arm")
        upperArm.dataset.id = bodyPart.id
        let upperArm2 = document.getElementById("upper-arm2")
        upperArm.dataset.id = bodyPart.id
        let upperArm3 = document.getElementById("upper-arm3")
        upperArm.dataset.id = bodyPart.id
        let upperArm4 = document.getElementById("upper-arm4")
        upperArm.dataset.id = bodyPart.id
        } else if (bodyPart.location == "shoulder-back"){
            let shoulderBack = document.getElementById("shoulder-back")
            let shoulderBack2 = document.getElementById("shoulder-back2")
            shoulderBack.dataset.id = bodyPart.id
            shoulderBack2.dataset.id = bodyPart.id
            }else if (bodyPart.location == "neck-front"){
                let neckFront = document.getElementById("neck-front")
                neckFront.dataset.id = bodyPart.id
                }else if (bodyPart.location == "neck-back"){
                    let neckBack = document.getElementById("neck-back")
                    neckBack.dataset.id = bodyPart.id} else if (bodyPart.location == "back"){
                        let back = document.getElementById("back")
                        back.dataset.id = bodyPart.id
                        }else if (bodyPart.location == "chest"){
                            let chest = document.getElementById("chest")
                            let chest2 = document.getElementById("chest2")
                            chest.dataset.id = bodyPart.id
                            chest2.dataset.id = bodyPart.id
                        }else if (bodyPart.location == "abdominals"){
                            let abdominals = document.getElementById("abdominals")
                            let abdominals2 = document.getElementById("abdominals2")
                            abdominals.dataset.id = bodyPart.id
                            abdominals2.dataset.id = bodyPart.id
                            }else if (bodyPart.location == "grion"){
                                let groin = document.getElementById("groin")
                                groin.dataset.id = bodyPart.id
                                }else if (bodyPart.location == "glutes"){
                                    let glutes = document.getElementById("glutes")
                                    let glutes2 = document.getElementById("glutes2")
                                    glutes.dataset.id = bodyPart.id
                                    glutes2.dataset.id = bodyPart.id
                                    }else if (bodyPart.location == "hip"){
                                        let hip = document.getElementById("hip")
                                        let hip2 = document.getElementById("hip2")
                                        hip.dataset.id = bodyPart.id
                                        hip2.dataset.id = bodyPart.id
                                        }else if (bodyPart.location == "thigh"){
                                            let thigh = document.getElementById("thigh")
                                            let thigh2 = document.getElementById("thigh2")
                                            thigh.dataset.id = bodyPart.id
                                            thigh2.dataset.id = bodyPart.id
                                            }else if (bodyPart.location == "hamstring"){
                                                let hamstring = document.getElementById("hamstring")
                                                let hamstring2 = document.getElementById("hamstring2")
                                                hamstring.dataset.id = bodyPart.id
                                                hamstring2.dataset.id = bodyPart.id
                                                }else if (bodyPart.location == "knee"){
                                                    let knee = document.getElementById("knee")
                                                    let knee2 = document.getElementById("knee2")
                                                    knee.dataset.id = bodyPart.id
                                                    knee2.dataset.id = bodyPart.id
                                                    }else if (bodyPart.location == "calf"){
                                                        let calf = document.getElementById("calf")
                                                        let calf2 = document.getElementById("calf2")
                                                        calf.dataset.id = bodyPart.id
                                                        calf2.dataset.id = bodyPart.id
                                                        }else if (bodyPart.location == "shin"){
                                                            let shin = document.getElementById("shin")
                                                            let shin2 = document.getElementById("shin2")
                                                            shin.dataset.id = bodyPart.id
                                                            shin2.dataset.id = bodyPart.id
                                                            }else if (bodyPart.location == "foot"){
                                                                let foot = document.getElementById("foot")
                                                                let foot2 = document.getElementById("foot2")
                                                                let foot3 = document.getElementById("foot3")
                                                                let foot4 = document.getElementById("foot4")
                                                                foot.dataset.id = bodyPart.id
                                                                foot2.dataset.id = bodyPart.id
                                                                foot3.dataset.id = bodyPart.id
                                                                foot4.dataset.id = bodyPart.id
                                                                }
}

 function renderButton(event){
    event.preventDefault()
    let id = parseInt(event.currentTarget.dataset.id)
    let location = event.currentTarget.value
    if (id != NaN){
        fetch("http://localhost:3000/videos")
        .then(resp => resp.json())
        .then(videos => {
            videos.forEach(function(video){
            if (video.BodyPart.location == location){
                renderVideoButton(video)
                let videoEl = document.getElementById(`body-part-${video.BodyPart.id}`)
            } else {
                let url = video.url.split("=")[1]
                let allVideos = document.getElementById("allVideos")
                let slideDiv= document.createElement("div")
                slideDiv.innerHTML = `<img width="560" height="315" data-id=body-part-${video.BodyPart.id} id="${video.id} " src=https://i.ytimg.com/vi/${url}/maxresdefault.jpg</img><button id=delete-${video.id}>X</button>`
                let image = document.getElementById(`${video.id}`)
                image.addEventListener("click", function(){
                    slideDiv.innerHTML = `<iframe width="560" height="315" data-id=body-part-${video.BodyPart.id} id="${video.id} " src=${video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button id=delete-${video.id}>X</button>`
                })
                allVideos.appendChild(slideDiv)
            }
            
            // <iframe width="560" height="315" data-id=body-part-${video.BodyPart.id} id="${video.id} " src=${video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button id=delete-${video.id}>X</button>

        })})}
        
        
    
    }

function renderVideoButton(video){
    let container = document.getElementById("container")
    container.innerHTML = ""
        let slideDiv= document.createElement("div")
        slideDiv.id = video.BodyPart.id
        slideDiv.innerHTML = `<iframe width="560" height="315" src=${video.url} data-id=${video.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button id=delete-${video.id}>X</button>`
        container.appendChild(slideDiv) 
       
}

 async function renderNewVideo(event){
    event.preventDefault()
    let data = {
        title: event.currentTarget.parentElement.children[2].value,
        url: event.currentTarget.parentElement.children[6].value,
        length: event.currentTarget.parentElement.children[10].value,
        description: event.currentTarget.parentElement.children[14].value,
        BodyPart_id: parseInt(event.currentTarget.parentElement.children[18].value)
    }
     fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(renderVideo(data))
    }


    async function deleteVideo(event){
        let id = parseInt(event.currentTarget.id.split("-")[1])
         if(confirm('Are you sure you want to delete this video?')){
            document.getElementById(`${id}`).parentElement.remove()
             fetch(`http://localhost:3000/videos/${id}`,{
                method: "DELETE"

                })
            }
        }



