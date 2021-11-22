/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/
/*
1) Inputni to'ldirgandan so'ng va "Tasdiqlash" tugmachasini bosgandan so'ng -
ro'yxatga yangi yangilik qo'shilish kerak. Sahifa qayta yuklanmasligi kerak.
Yangi yangilik news massivga qo'shilishi kerak.
Input qiymatini olish uchun biz uni input.value dan foydalanamiz;
P.S. Muammoni hal qilish uchun bir nechta variantlar mavjud, faqat ishlidgoni kerak

2) Agar yangilikni nomi 21 belgidan ko'p bo'lsa - uni kesib oling va uchta nuqta qo'shing

3) Axlat qutisini bosganingizda - yangilik ro'yxatdan o'chirilishi kerak (qiyin)

4) Agarda inputda checkboxda beligisi belgilangan bo'lsa "Is it favourite?" 
consolega "sevimli yangilik qo'shilmoqda"

5) Filmlar alfavit bo'yicha tartiblangan bo'lishi kerak*/

"use strict";
document.addEventListener('DOMContentLoaded',()=>{
  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = (arr) =>{
    arr.sort();
  };

  const promoBtn = document.querySelector('.promo__btn'),
        promaGnr = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        listNews = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = addForm.querySelector("[type = 'checkbox']");
    
        promoBtn.remove();

    // promaGnr.innerHTML = 'UzNews';
    promaGnr.textContent =  'UzNews';

    promoBg.style.backgroundImage = 'url(img/2.jpg)';

    addForm.addEventListener('submit',(event)=>{
      event.preventDefault();

      let newFilm = addInput.value;
      const favourite = checkbox.checked;

      if (newFilm) {
        if (newFilm.length > 21) {
          newFilm = `${newFilm.substring(0, 21)}...`;
        }
        if (favourite) {
          console.log('sevimli yangilik qoshildi');
        }
      news.push(newFilm);
      sortArr(news);
      createNewList(news,listNews);        
      }
      event.target.reset();
    });

    function createNewList(newsList,parent){
      parent.innerHTML = '';
      sortArr(news);
      newsList.forEach((itemNews, index)=>{
        parent.innerHTML +=`
      <li class="promo__interactive-item">
       ${index+1}  ${itemNews} 
      <div class="delete"></div>
      </li>
      ` ;
    });

    document.querySelectorAll('.delete').forEach((btn,i)=>{
      btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        news.splice(i,1);
        createNewList(newsList,parent);    
      });
    });

    }

    createNewList(news,listNews);    

});
