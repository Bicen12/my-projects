const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , () => {
  if(window.pageYOffset > 100){
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active")
  }
})


const aniText = document.querySelector(".multipleStrings") 

new TypeIt(".multipleStrings", {
  strings: ["This is a great string.", "But here is a better one."],
  speed: 50,
  waitUntilVisible: true,
}).go();