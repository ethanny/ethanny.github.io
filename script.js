
    const anchor = document.getElementById('anchor');
    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    

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
