let closeModal = document.querySelectorAll(".close")[0]
let openModal = document.querySelectorAll('.cta')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];
let gmailButton = document.querySelectorAll('#gmailButton')[0];
let gmailShowed = document.querySelectorAll('#gmailDiv')[0]

openModal.addEventListener('click', function (e) {
	e.preventDefault();
	modalC.classList.toggle('modal-close');
});
closeModal.addEventListener("click", function(){
    modalC.classList.toggle("modal-close")
})
gmailButton.addEventListener("click", function(){
	gmailShowed.style.visibility = 'visble';
	gmailShowed.classList.toggle('hidden');

})