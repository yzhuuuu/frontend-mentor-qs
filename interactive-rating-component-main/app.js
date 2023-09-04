// on window load
window.addEventListener('load', () => {
  document.body.innerHTML = `<main class='container'>
      <article>
        <img src='./images/icon-star.svg' alt='star' />
      </article>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <article class='ratings'>
        <button value='1'>1</button>
        <button value='2'>2</button>
        <button value='3'>3</button>
        <button value='4'>4</button>
        <button value='5'>5</button>
      </article>
      <button type='submit' class='btn'>
        submit
      </button>
    </main>`;

  getAllButtons();
});

// const buttons = document.querySelector('.ratings').querySelectorAll('buttons');
function getAllButtons() {
  const buttons = document.querySelectorAll('.ratings button');
  //   console.log(buttons);
  const submitBtn = document.querySelector('.btn');
  let rating;
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeOrangeBg(buttons);
      btn.classList.add('orange');
      rating = btn.value;
    });
  });

  submitBtn.addEventListener('click', () => {
    document.body.innerHTML = `
       <main class="container align-center">
       <article>
         <img src="./images/illustration-thank-you.svg" alt="star" />
         </article>
         <h5 class="rates">You Selected ${rating} out of 5</h5>
        <h2>Thank You</h2>
       <p>
         we appreciate you taking the time to give a rating, if you ever need
           more support, don't hesitate to get in touch!
       </p>
     </main>`;
  });
}
function removeOrangeBg(btns) {
  btns.forEach((btn) => btn.classList.remove('orange'));
}
