


document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
// on ajoute la classe container quand on click sur l'icone et on l'enlève au prochain click avec la méthode toggle
//.classlist retourne tous les éléments de la classe

document.querySelector('.scroll-btn').addEventListener('click',() => {
    document.querySelector('html').style.scrollBehavior='smooth';
    setTimeout(()=>{
        document.querySelector('html').style.scrollBehavior='unset';
    },1000)
});
