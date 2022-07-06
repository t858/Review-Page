const views = [
    {
        id: 1,
        name: "James Potter",
        job: "Software Tester",
        img: "./person-1.jpeg",
        text: "Hi there, it's James Potter. I'm a tester at stacks software. I have over 8years working experience. I work professionally with tools like Azure, Digital cloud, AWS and to mention but a few",
    },
    {
        id: 2,
        name: "Mantis Protogue",
        job: "CopyWriter",
        img:
      "./person-1.jpeg",
      text: 
      "Hey there, i'm a copywriter at stacks software, with over 3years working experience, i have made numerous articles and copywriting policies on each product my company has built over the previous years ",
    },
    {
        id: 3,
        name: "bill morgage",
        job: "CEO",
        img:
      "./person-1.jpeg",
    text:
      "Hello there, i'm bill morgage, the CEO of Stacks Software. For the past 8years Stacks has built and launched out numerous problem solving softwares. We believe we can touch the lives of millions through our creation, solving out day to day problems through software. We believe we can make the world a better place if we at stacks cooperate together. Both we and our clients make up Stacks Software. We are one big family.",
   },

   {
       id: 4,
       name: "Jane Gran",
       job: "Intern",
       img:
      "./person-1.jpeg",
    text:
      "Hi there, i have been at intern at Stacks software for about 6 months now and i'm very happy i got this role here, there's so much cooperation between workers, everyone here is just one big happy family. So mush so is the worker to client relationship here, everyone is just so happy here. I honestly wish to get a permanent job here to get fully aquainted with the company. ",
   },

   {
    id: 5,
    name: "Derrick foster",
    job: "Senior Developer",
    img:
   "./person-1.jpeg",
 text:
   "Hello guys, i'm a senior developer at Stacks software. I have over 6years experience working with developer tools like Azure, git, gitlab, React, Firebase, bootstarp, node etc. i have been with Stacks for 4years now and i'm really happy working here. i get to impact changes in the live of people and help solve problems facing our society. All this is possible through the good relationship we have at Stacks which involves both our clients and workers",
},
{
    id: 6,
    name: 'Sara Jones',
    job: "ux designer",
    img: './person-1.jpeg',
    text:"Hi, its Sara Jones. I'm a UX designer at Stacks software. I have over 5years working experience. I work with professional tools for instance Figma, adobe xd,camstasia and git"
}

]

const img = document.getElementById("images");
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prvBtn = document.querySelector(".prv-btn")
const nxtBtn = document.querySelector(".nxt-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function(){
    const item = views[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
})

function showPerson(person) {
    const item = views[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

nxtBtn.addEventListener("click", function () {
    currentItem++
    if(currentItem > views.length - 1){

        currentItem = 0
    }
    showPerson(currentItem)
})

prvBtn.addEventListener("click", function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = views.length - 1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener("click", function () {
    console.log("hello")

    currentItem = Math.floor(Math.random() * views.length)
    showPerson(currentItem)
})