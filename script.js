
    const anchor = document.getElementById('anchor');
    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    
    document.addEventListener("DOMContentLoaded", () => {
      const faces = document.querySelectorAll('.face');
      faces.forEach(face => {
        face.style.transform = `translate(0px, 0px)`;
      });
    });
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = (mouseX - anchorX) * 0.04; 
    const offsetY = (mouseY - anchorY) * 0.04;

    const faces = document.querySelectorAll('.face');
faces.forEach(face => {
  if (window.innerWidth > 768) {
  face.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }else{
    face.style.transform = `translate(0px, 0px)`;
  }
});
})

const form = document.getElementById('myForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent default form submit

    const formData = new FormData(form);
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
      alert("Please fill out captcha field");
      return; 
    }  

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        // Form successfully submitted
        alert('Form submitted successfully!');
        form.reset(); // <-- clear inputs

        if (typeof hcaptcha !== 'undefined' && hcaptcha.reset) {
          hcaptcha.reset(); // Reset the captcha
        }
      } else {
        alert('Form submission failed.');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }
  });

  function setCaptchaTheme() {
    const hCaptchaElement = document.querySelector('.h-captcha'); 

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

      hCaptchaElement.setAttribute('data-theme', 'dark');
    } else {

      hCaptchaElement.setAttribute('data-theme', 'light');
    }
  }
  
  setCaptchaTheme();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {

    setCaptchaTheme();
  });