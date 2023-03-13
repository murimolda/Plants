/*Function to find the element that is wider than the body of the page*/
const docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);

//accordion for section Price
const priceBtn = document.querySelectorAll('.price-button');
const priceBlock = document.querySelectorAll('.price-item');

for (let i = 0; i < priceBtn.length; i++) {
  priceBtn[i].addEventListener("click", function() {
    this.classList.toggle('open-btn');
    priceBlock.forEach(n => n.classList.remove('price-open'));
    priceBtn.forEach(b => {
      if(b !== this && b.classList.contains('open-btn')){
        b.classList.remove('open-btn');
      }
    })
    let thisBlock = this.closest('.price-item');
    if (this.classList.contains('open-btn')) {
      thisBlock.classList.add('price-open')
    }else{
      thisBlock.classList.remove('price-open');
    }
  });
};

//Blur-effect for servise-card//

const serviceButtons = document.querySelectorAll('.service-button');
const serviceCards = document.querySelectorAll('.service-card');
let checkButtons = 0;

const checkActiveButton = (buttons, cards) =>{
  buttons.forEach(button =>{
    if(!button.classList.contains('active')){
      cards.forEach(card =>{
        if(card.dataset.card === button.id){
          card.classList.add('card-blur');
          console.log(card);
        }
      })
    }else{
      cards.forEach(card =>{
        if(card.dataset.card === button.id && card.classList.contains('card-blur')) {
          card.classList.remove('card-blur');
        }
      })
    }
  })
}

serviceButtons.forEach(element => {
  element.addEventListener('click', () =>{
    if (element.classList.contains('active')) {
      checkButtons--;
      element.classList.remove('active');
    }else if(checkButtons < 2 ){
      checkButtons++;
      element.classList.add('active');
    }
    if(checkButtons !== 0){
      checkActiveButton(serviceButtons, serviceCards);
    }else{
      serviceCards.forEach(elem =>{
        if (elem.classList.contains('card-blur')) {
          elem.classList.remove('card-blur');
        }
      })
    }
  });
});

//City select function

const cityDetails = document.querySelector('.contacts-select');
const citySummary = document.querySelector('.select-name');
const cityOptions = document.querySelectorAll('.select-option');

const cityInfo = [
  {
    "city": "Canandaigua, NY",
    "phone": "+1 585 393 0001",
    "address": "151 Charlotte Street"
  },
  {
    "city": "New York City",
    "phone": "+1 212 456 0002",
    "address": "9 East 91st Street"
  },
  {
    "city": "Yonkers, NY",
    "phone": "+1 914 678 0003",
    "address": "511 Warburton Ave"
},
  {
    "city": "Sherrill, NY",
    "phone": "+1 315 908 0004",
    "address": "14 WEST Noyes BLVD"
  }
];

const cityCard = document.querySelector('.contacts-modal');
const openCityCard = (number) =>{
  const cityValue = document.querySelector('.city-value');
  cityValue.innerHTML = `${cityInfo[number]["city"]}`;
  const phoneValue = document.querySelector('.phone-value');
  phoneValue.innerHTML = `${cityInfo[number]["phone"]}`;
  const addressValue = document.querySelector('.address-value');
  addressValue.innerHTML = `${cityInfo[number]["address"]}`;
  const cityButtonValue = document.querySelector('.city-button-value');
  cityButtonValue.innerHTML = `<a href="tel:${cityInfo[number]["phone"]}">Call us</a>`;

}

for (let i = 0; i < cityOptions.length; i++) {
  cityOptions[i].addEventListener('click', function() {
    citySummary.innerHTML = this.innerHTML;
    cityDetails.removeAttribute('open');
    openCityCard(i);
    cityCard.classList.add('contacts-modal-open')
  })
}




