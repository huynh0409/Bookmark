const listSlide = document.querySelectorAll('.feature__slide');
const listLink = document.querySelectorAll('.feature__link-item');

const removeSlide = () => {
    listSlide.forEach(e => {
        e.classList.remove('active-slide');
    });
};

const removeLink = () => {
    listLink.forEach(e => {
        e.classList.remove('active');
    });
};

listLink.forEach((e, index) => {
    e.addEventListener('click', e => {
        // console.log(index);
        // e.preventDefault();
        removeLink();
        removeSlide();
        e.currentTarget.classList.add('active');
        listLink.forEach((e, id) => {
            if(id === index) {
                listSlide[id].classList.add('active-slide');
            }
        });
    });
});

const listFaq = document.querySelectorAll('.faq__item') 

listFaq.forEach(e => {
    e.addEventListener('click', e => {
        e.currentTarget.classList.toggle('show');
    });
});

const input = document.querySelector('.contact input');
document.querySelector('.contact .button').addEventListener('click', e => {
        e.preventDefault();
    
        if(!validateEmail(input.value)) {
            document.querySelector('.contact').classList.add('email-error');
        } else {
            document.querySelector('.contact').classList.remove('email-error');
        }
    
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const toFeature = document.querySelectorAll('.to-feature');
toFeature.forEach(e => {
    e.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.feature').scrollIntoView({behavior: "smooth", block:'start'});
    });
});

const toPricing = document.querySelectorAll('.to-pricing');
toPricing.forEach(e => {
    e.addEventListener('click', e=> {
        e.preventDefault();
        document.querySelector('.download').scrollIntoView({behavior:'smooth', block:'start'});
    })
});

const toContact = document.querySelectorAll('.to-contact');
toContact.forEach(e => {
    e.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.contact').scrollIntoView({behavior: 'smooth', block:'start'})
    });
})

const toTop = document.querySelector('.to-top');
toTop.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header').scrollIntoView({behavior: "smooth", block: "start"})
});