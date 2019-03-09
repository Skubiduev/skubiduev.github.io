let elementsToAnimate = [
        {
            element: document.querySelector('.logo1'),
            elementCssOption: 'transform',
            startingParam: 'translateY(-30px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.our-command'),
            elementCssOption: 'transform',
            startingParam: 'translateY(30px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('h1'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.about-cost-buttons'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.feedback'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.mission-img'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.our-mission h2'),
            elementCssOption: 'transform',
            startingParam: 'translateX(350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.our-mission p'),
            elementCssOption: 'transform',
            startingParam: 'translateX(350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.our-mission button'),
            elementCssOption: 'transform',
            startingParam: 'translateX(350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.ideas-img'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.pe-7s-notebook'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.pe-7s-cash'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.pe-7s-cart'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.pe-7s-users'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('h2[data="site"]'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('p[data="site"]'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelectorAll('p[data="site"]')[1],
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('button[data="site"]'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.site'),
            elementCssOption: 'transform',
            startingParam: 'translateX(350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.question-h2'),
            elementCssOption: 'transform',
            startingParam: 'translateX(350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.question-p'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.question-button'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.price-item:first-child'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.price-item:nth-child(2)'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 130
        },
        {
            element: document.querySelector('.price-item:nth-child(3)'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 260
        },
        {
            element: document.querySelector('.price-item:last-child'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 390
        },
        {
            element: document.querySelector('.price .main-h2'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.price .main-hr'),
            elementCssOption: 'transform',
            startingParam: 'translateX(50px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.client .main-h2'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.client .main-hr'),
            elementCssOption: 'transform',
            startingParam: 'translateX(50px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.clients-pictures img:first-child'),
            elementCssOption: 'transform',
            startingParam: 'translateY(100px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.clients-pictures img:nth-child(2)'),
            elementCssOption: 'transform',
            startingParam: 'translateY(100px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 130
        },
        {
            element: document.querySelector('.clients-pictures img:nth-child(3)'),
            elementCssOption: 'transform',
            startingParam: 'translateY(100px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 260
        },
        {
            element: document.querySelector('.clients-pictures img:last-child'),
            elementCssOption: 'transform',
            startingParam: 'translateY(100px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 390
        },
        {
            element: document.querySelector('.comments .main-h2'),
            elementCssOption: 'transform',
            startingParam: 'translateX(-350px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.comments .main-hr'),
            elementCssOption: 'transform',
            startingParam: 'translateX(50px)',
            endingParam: 'translateX(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.comment'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.contacts-content>div'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.contacts-content form'),
            elementCssOption: 'transform',
            startingParam: 'translateY(200px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.social a:first-child'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 0
        },
        {
            element: document.querySelector('.social a:nth-child(2)'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 130
        },
        {
            element: document.querySelector('.social a:nth-child(3)'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 260
        },
        {
            element: document.querySelector('.social a:last-child'),
            elementCssOption: 'transform',
            startingParam: 'translateY(50px)',
            endingParam: 'translateY(0px)',
            animationDone: false,
            animationDelay: 390
        }
    ],
    circles = document.getElementsByClassName('circle-square'),
    preloaderStyle = document.getElementsByClassName('preloader')[0].style,
    navigationBlock = document.querySelector('.navigation'),
    header = document.querySelector('header'),
    navLinks = document.querySelectorAll('nav a'),
    anchors = document.querySelectorAll('a[href*="#"]'),
    sliderDivs = document.getElementsByClassName('slider-div'),
    arrow = document.querySelector('.arrow'),
    navigationSquare = document.querySelector('.navigation-square'),
    nav = document.querySelector('nav'),
    navigationState = true,
    start = 0,
    forms = document.querySelectorAll('form'),
    xhr = new XMLHttpRequest();

navigationBlock.style.opacity = '0';
setTimeout(() => {
    navigationBlock.style.transition = '.4s';
}, 50);
if (header.getBoundingClientRect().bottom <= 0) navigationBlock.classList.add('navigation-fixed');

setTimeout(() => {
    for (let i = 0; i < circles.length; i++) setTimeout(() => {
        if (i === 2) preloaderStyle.opacity = '0';
        circles[i].style.transform = 'rotate(' + (380 - (i * 40)) + 'deg)';
        circles[i].style.opacity = '1';
    }, i * 200);
}, 0);
setTimeout(() => {
    preloaderStyle.display = 'none'
}, 1500);

setTimeout(() => {
    navigationBlock.style.opacity = '1';

    setTimeout(() => {
        navigationBlock.style.transition = '';
    }, 400);

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let blockID = anchor.getAttribute('href');

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    checkArrowState();
    addListener(elementsToAnimate);
    calculateNavAColor();
}, 400);

window.addEventListener('scroll', () => {
    checkArrowState();
    calculateNavAColor();

    if (header.getBoundingClientRect().bottom > 0) navigationBlock.classList.remove('navigation-fixed');
    else navigationBlock.classList.add('navigation-fixed');
});

arrow.onclick = () => {
    header.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
};

[].forEach.call(sliderDivs, (sliderDiv, index) => {
    sliderDiv.onclick = function () {
        let commentStyle = document.querySelector('.comment-main').style,
            curseText = document.querySelector('.curse'),
            commentWho = document.querySelector('.comment-who'),
            photo = document.querySelector('.photo').classList;

        if (this.style.opacity !== '1') {
            commentStyle.transition = '.5s';
            commentStyle.transform = `translateX(-${document.documentElement.clientWidth}px)`;

            changeSliderDivsOpacity(index);

            setTimeout(() => {
                if (!index) {
                    curseText.textContent = '"Выражаем благодарность компании за работу над улучшением нашего сайта finnair.com Я высоко оцениваю качество выполненных работ по анализу потребностей пользователей и проектированию интерфейса новой системы личных сообщений. Считаю необходимым отдельно упомянуть ответственность по отношению к срокам выполнения поставленных задач и неукоснительное следование целям заказчика."';
                    commentWho.innerHTML = 'Илья Бакланов, <span class="curse blue font-size-16-px">Finnair</span>';
                    photo.remove('starik');
                    photo.remove('vorobyov');
                    photo.add('baklanov');
                } else if (index === 1) {
                    curseText.textContent = '"С начала нашего сотрудничества чувствуется ответственное отношение менеджера к нашему проекту. В процессе своей деятельности специалисты компании подтвердили свой высокий профессиональный статус и оперативность в решении проблем. Нам отвечали своевременно на все возникающие вопросы, предоставляли консультации и рекомендации относительно нашего сайта. Чувствуется, что в данной компании работают настоящие профессионалы своего дела."';
                    commentWho.innerHTML = 'Анна Старик, <span class="curse blue font-size-16-px">Eventworld</span>';
                    photo.remove('baklanov');
                    photo.remove('vorobyov');
                    photo.add('starik');
                } else {
                    curseText.textContent = '"Был проведен комплексный анализ портала в плоскостях юзабилити и SEO, по результатам которого предоставлен развернутый экспертный отчет с рекомендациями по оптимизации визуальной и текстовой составляющих. Итоговые материалы были достойно оформлены и написаны доступным и понятным языком. Полученный документ лег в основу измененной концепции работы над сайтом "Viking Line""';
                    commentWho.innerHTML = 'Денис Воробьев, <span class="curse blue font-size-16-px">Viking Line</span>';
                    photo.remove('baklanov');
                    photo.remove('starik');
                    photo.add('vorobyov');
                }

                commentStyle.transform = `translateX(0)`;
            }, 500);
        }
    }
});

navigationSquare.onmouseover = function () {
    this.style.cursor = 'pointer'
};

navigationSquare.onclick = function () {
    nav.style.transition = '.5s height';

    if (navigationState) {
        this.style.backgroundColor = '#d1d1d1';
        nav.style.height = '238px'
    } else {
        this.style.backgroundColor = 'white';
        nav.style.height = '0'
    }

    navigationState = !navigationState;

    if (!start || (new Date().getTime() - start) > 500) {
        setTimeout(() => {
            nav.style.transition = 'none'
        }, 500);
    }

    start = new Date().getTime()
};

[].forEach.call(forms, form => {
    form.onsubmit = function (e) {
        e.preventDefault();

        let fieldsClassList = this.querySelector('.fields').classList,
            errorClassList = this.querySelector('.color-coral').classList,
            successClassList = this.querySelector('.color-limegreen').classList;

        if (!this.querySelector('[name="name"]').value || !this.querySelector('[name="email"]').value) {
            fieldsClassList.remove('display-none');
            errorClassList.add('display-none');
            successClassList.add('display-none');
            return;
        }

        if (this.classList.contains('contacts-form') && !this.querySelector('[name="message"]').value) {
            fieldsClassList.remove('display-none');
            errorClassList.add('display-none');
            successClassList.add('display-none');
            return;
        }

        submitForm(this);
    }
});

function addListener(elements) {
    elements.forEach(function (element) {
        element.element.classList.add('opacity');
        element.element.classList.remove('transition');
        element.element.style[element.elementCssOption] = element.startingParam;
        animate(element);
        window.addEventListener('scroll', () => {
            animate(element)
        });
    })
}

function animate(element) {
    if (element.animationDone) return;

    let elementTopCoords = element.element.getBoundingClientRect().top,
        elementBottomCoords = element.element.getBoundingClientRect().bottom,
        clientHeight = document.documentElement.clientHeight;

    if ((elementBottomCoords > clientHeight && elementTopCoords < clientHeight - 50) || (elementBottomCoords < clientHeight && elementBottomCoords > 50)) {
        element.element.classList.add('transition');

        setTimeout(() => {
            element.element.classList.remove('opacity');
            element.element.style[element.elementCssOption] = element.endingParam;
        }, element.animationDelay);

        element.animationDone = true;
        setTimeout(() => {
            element.element.classList.remove('transition');
            if (element.element.tagName.toLowerCase() === 'a' || element.element.tagName.toLowerCase() === 'i' || element.element.tagName.toLowerCase() === 'button') element.element.classList.add('transition')
        }, 1000);
        if (element.element.classList.contains('about-cost-buttons')) {
            document.querySelector('.about').classList.add('transition');
            document.querySelector('.cost').classList.add('transition');
        } else if (element.element.classList.contains('feedback')) document.querySelector('input.submit').classList.add('transition');
        else if (element.element.classList.contains('price-item')) element.element.lastElementChild.lastElementChild.classList.add('transition');
        else if (element.element.classList.contains('contacts-form')) element.element.lastElementChild.classList.add('transition');
        else if (element.element.parentElement.classList.contains('social')) element.element.classList.add('transition')
    }
}

function calculateNavAColor() {
    let whichNavigationAIsBlue,
        headerTopCoords = document.querySelector('header').getBoundingClientRect().top,
        ideasTopCoords = document.querySelector('.ideas').getBoundingClientRect().top,
        questionTopCoords = document.querySelector('.question').getBoundingClientRect().top,
        priceTopCoords = document.querySelector('.price').getBoundingClientRect().top,
        commentsTopCoords = document.querySelector('.comments').getBoundingClientRect().top,
        lastDivBottomCoords = document.querySelector('.last-div').getBoundingClientRect().bottom;

    if (document.documentElement.clientHeight === lastDivBottomCoords) whichNavigationAIsBlue = document.querySelector('nav a:last-child');
    else {
        if (headerTopCoords <= 0) whichNavigationAIsBlue = document.querySelector('nav a:first-child');
        if (ideasTopCoords <= 0) whichNavigationAIsBlue = document.querySelector('nav a:nth-child(2)');
        if (questionTopCoords <= 0) whichNavigationAIsBlue = document.querySelector('nav a:nth-child(3)');
        if (priceTopCoords <= 0) whichNavigationAIsBlue = document.querySelector('nav a:nth-child(4)');
        if (commentsTopCoords <= 0) whichNavigationAIsBlue = document.querySelector('nav a:nth-child(5)');
    }

    changeNavAColor(whichNavigationAIsBlue);
}

function changeNavAColor(element) {
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i] === element) {
            navLinks[i].onmouseout = () => {
            };
            continue;
        }
        navLinks[i].style.color = '#777';
        navLinks[i].onmouseover = function () {
            this.style.color = '#3eb0f7'
        };
        navLinks[i].onmouseout = function () {
            this.style.color = '#777'
        };
    }

    element.style.color = '#3eb0f7';
}

function changeSliderDivsOpacity(index) {
    [].forEach.call(sliderDivs, sliderDiv => {
        sliderDiv.style.opacity = '.5';
    });

    sliderDivs[index].style.opacity = '1';
}

function checkArrowState() {
    if (header.getBoundingClientRect().top === 0) arrow.style.display = 'none';
    else arrow.style.display = '';
}

function submitForm(form) {
    let whichForm = document.querySelector('form') === form,
        name = form.querySelector('[name="name"]').value,
        email = form.querySelector('[name="email"]').value,
        message,
        fieldsClassList = form.querySelector('.fields').classList,
        errorClassList = form.querySelector('.color-coral').classList,
        successClassList = form.querySelector('.color-limegreen').classList;

    xhr.open('post', 'faststart.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    if (!whichForm) {
        message = form.querySelector('[name="message"]').value;
        xhr.send(`name=${name}&email=${email}&message=${message}`);
    } else xhr.send(`name=${name}&email=${email}`);

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            fieldsClassList.add('display-none');
            successClassList.add('display-none');
            errorClassList.remove('display-none');
            return;
        }

        fieldsClassList.add('display-none');
        errorClassList.add('display-none');
        successClassList.remove('display-none');
    }
}