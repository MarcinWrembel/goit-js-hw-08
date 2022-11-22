import throttle from 'lodash/throttle';

const form = document.querySelector('form.feedback-form');
const KEY_LOCAL_STORAGE = "feedback-form-state";
console.log(form);

// const setLocalStorage = (key, value) => {
//     try {
//       const valueToSave = JSON.stringify(value);
//       localStorage.setItem(key, valueToSave);
//     } catch (error) {
//       console.error('Set state error:', error.message);
//     }
//   };
  
//   const getLocalStorage = key => {
//     try {
//       const valueSaved = localStorage.getItem(key);
//       return valueSaved === null ? undefined : JSON.parse(valueSaved);
//     } catch (error) {
//       console.error('Get state error', error.message);
//     }
//   };
  
 function valueHandler (event){
    event.preventDefault();
    const {
        elements: {email, message}
        } = event.currentTarget;
    console.log(email.value, message.value)
    
    event.currentTarget.reset()
 }

form.addEventListener('submit', valueHandler)

/*
W HTML znajduje się znacznik formularza. Napisz skrypt, który będzie zapisywał wartości pól w local storage, gdy użytkownik coś wpisuje.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Wykonuj to zadanie w plikach 03-feedback.html i 03-feedback.js. Rozbij je na kilka podzadań:

Śledź w formularzu zdarzenie input, i za każdym razem zapisuj w local storage obiekt z polami email i message, w których przechowuj aktualne wartości pól formularza. Niech kluczem do storage będzie "feedback-form-state".
Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam zapisane dane, wypełniaj nimi pola formularza. W przeciwnym wypadku pola powinny być puste.
Po wysłaniu formularza wyczyść storage i pola formularza, a także wprowadź obiekt z polami email, message i ich aktualnymi wartościami do wiersza poleceń.
Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund. Aby to zrobić, użyj biblioteki lodash.throttle i dodaj ją do projektu
*/