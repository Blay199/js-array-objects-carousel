// cicliamo foreach 
	// creo variabile template literal con un li ${}
	// sostituisco gli elementi statici html con elementi array in dot.notation
	// aggiungo slides += allo slides wrapper

// variabile indice 0  
// creo un array slidesEl con document.queryselector.all('.slide')
// aggiungo classe active a slidesEl
// slidesEl[indexactive].classList.add('active')

// richiamo arrow-next e applico umarel
	// rimuovo active
	// incremento indexActive
	// rimetto active
	// se indiceActive uguale a slidesEl
		// indexActive = 0
		const slides = [
			{
				url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
				title: 'Svezia',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
			},
		
			{
				url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
				title: 'Perù',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
			},
		
			{
				url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
				title: 'Chile',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
			},
			{
				url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
				title: 'Argentina',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
			},
			{
				url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
				title: 'Colombia',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
			},
		]




// recupero elemento slides wrapper
const slideWrapperEl = document.querySelector('.slides-wrapper')
let indice = 2 
slides.forEach((element, indice) => {
	let activeClass = "";
	console.log(this.indice)
	if (indice === 0) {
		activeClass = "active"
	}
  
	let slideEl = `
	<li class="slide ${activeClass}">
      <img src="${element.url}" alt="">
      <div class="slide__content">
        <h3 class="slide__title">${element.title}</h3>
        <p class="slide__description">${element.description}</p>
      </div>
    </li>
	`
	slideWrapperEl.innerHTML += slideEl
});

const nextArrow = document.querySelector('.arrow-next')
nextArrow.addEventListener('click', function() {
	indice 
	console.log('ciao' + nextArrow)
})

// console.log('slider')
