let closeModal = document.querySelectorAll(".close")[0]
let openModal = document.querySelectorAll('.cta')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];
let gmailButton = document.querySelectorAll('#gmailButton')[0];
let gmailShowed = document.querySelectorAll('#gmailDiv')[0]

openModal.addEventListener('click', function (e) {
	e.preventDefault();
	modalC.style.opacity = '1';
	modalC.style.visibility = 'visible';
	modalC.classList.toggle('modal-close');
});
closeModal.addEventListener("click", function(){
    modalC.classList.toggle("modal-close")
	modalC.style.opacity = '0';
	modalC.style.visibility = 'hidden';
})
gmailButton.addEventListener("click", function(){
	gmailShowed.classList.toggle('hidden');
	gmailShowed.style.visibility = 'visble';
})