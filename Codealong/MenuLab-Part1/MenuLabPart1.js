var mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

var topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'; 
topMenuEl.classList.add('flex-around');


const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  

  
menuLinks.forEach(function(menuLink) {
    var aEl = document.createElement('a');
    aEl.setAttribute('href', menuLink.href);
    aEl.textContent = menuLink.text;
    topMenuEl.appendChild(aEl);
});

var subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; 
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;



topMenuEl.addEventListener('click', function(event) {

    event.preventDefault();
  
    if (event.target.tagName !== 'A') {
      return;
    }
  
  
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  
  
    event.target.classList.add('active');
  
  
    console.log(event.target.textContent);

  
    const href = event.target.getAttribute('href');
  
    
    const linkObject = menuLinks.find(link => link.href === href);
  
    
    if (linkObject && linkObject.subLinks) {
    
      showingSubMenu = true;

    
      buildSubMenu(linkObject.subLinks);
      
    
      subMenuEl.style.top = '100%';
    } else {
      
      showingSubMenu = false;
      
      
      subMenuEl.style.top = '0';

      
      if (href === '/about') {
        mainEl.innerHTML = '<h1>about</h1>';
      }
    }
});


function buildSubMenu(subLinks) {
    
    subMenuEl.innerHTML = '';
  
    
    subLinks.forEach(function(link) {
      
      const aEl = document.createElement('a');
      
      
      aEl.setAttribute('href', link.href);
      
    
      aEl.textContent = link.text;
      
    
      subMenuEl.appendChild(aEl);
    });
  }

  subMenuEl.addEventListener('click', function(event) {
    
    event.preventDefault();
  
    
    if (event.target.tagName !== 'A') {
      return;
    }
  
    
    showingSubMenu = false;
  
    
    subMenuEl.style.top = '0';
  
    
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  
    
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
  
  
  
