export default function decorate(block) {
    const viddesc = block.querySelector(':scope > div > div');
    const description = document.createElement('p');
    description.innerHTML = `<em>${viddesc.innerText}</em>`;
    viddesc.parentElement.replaceWith(description);
  
    
    const a= block.querySelector('a');
    console.log(a);
    const videoplayer = document.createElement('iframe');
    videoplayer.src = `${a.innerText}`;
    console.log(a.innerText);
    console.log(videoplayer);
    videoplayer.width = '560';
    videoplayer.height = '315';
    videoplayer.allowFullscreen = true;
    a.parentElement.replaceWith(videoplayer);
    
    
  
}