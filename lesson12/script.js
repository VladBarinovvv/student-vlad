const createTooltip = (element, text) => {

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');

  tooltip.innerText = text;
  
  document.body.append(tooltip);

  const sizeTooltip = element.getBoundingClientRect();
  const tooltipTop = sizeTooltip.top - 10 - tooltip.clientHeight;

 
   const tooltipLeft =
     sizeTooltip.left +
     sizeTooltip.width / 2 -
     tooltip.clientWidth / 2;

     tooltip.style.top = `${tooltipTop}px`;
     tooltip.style.left = `${tooltipLeft}px`;
}

const button = document.getElementById('myButton');

createTooltip(button, 'We help you!');





