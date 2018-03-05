/**
 * @description Запускает анимацию прогресса при вводе значения в поле ввода от 0 до 100
 */
function changingInput() {
    setTimeout(function () {
        var previousRotateValue1 = rotateValue1;
        var previousRotateValue2 = rotateValue2;
        var degValue = +input.value;
        if (degValue * 360 / 100 === rotateValue1 + rotateValue2 || degValue > 100) return;
        var forwardOrBackAnimation = degValue * 360 / 100 > rotateValue1 + rotateValue2;
        rotateValue1 = degValue < 50 ? degValue * 360 / 100 : 180;
        rotateValue2 = degValue > 50 ? (degValue - 50) * 360 / 100 : 0;
        if (forwardOrBackAnimation) {
            if (previousRotateValue1 === 180) {
                progress4.style.zIndex = '-1';
                progress3.style.transform = 'rotate(' + rotateValue2 + 'deg)';
            } else {
                progress4.style.transform = 'rotate(' + rotateValue1 + 'deg)';
                if (degValue > 50) {
                    setTimeout(function () {
                        progress4.style.zIndex = '-1';
                        progress3.style.transform = 'rotate(' + rotateValue2 + 'deg)';
                    }, 1000);
                }
            }
        }
        if (!forwardOrBackAnimation) {
            if (previousRotateValue2 === 0) {
                progress4.style.zIndex = '10';
                progress4.style.transform = 'rotate(' + rotateValue1 + 'deg)';
            } else {
                progress3.style.transform = 'rotate(' + rotateValue2 + 'deg)';
                if (degValue < 50) {
                    setTimeout(function () {
                        progress4.style.zIndex = '10';
                        progress4.style.transform = 'rotate(' + rotateValue1 + 'deg)';
                    }, 1000);
                }
            }
        }
    }, 100);
}

/**
 * @description Запускает анимацию переключателей
 *
 * @param button DOM-элемент-переключатель
 * @param {boolean} buttonReverse
 * @param innerDiv DOM-элемент внутри переключателя
 * @returns {boolean} Индикатор поведения переключателя
 */
function animateButtons(button, buttonReverse, innerDiv) {
    if (!buttonReverse) {
        button.style.backgroundColor = 'cadetblue';
        innerDiv.style.backgroundColor = 'white';
        innerDiv.style.left = '23px';
        return true
    }
    else {
        button.style.backgroundColor = 'darkgray';
        innerDiv.style.backgroundColor = 'lightgray';
        innerDiv.style.left = '3px';
        return false
    }
}

/**
 * @description Устанавливает блок в режим анимации и включает или отключает переключатель-индикатор анимации
 *
 * @param {string} action Для запуска или отключения анимации этот параметр должен быть равен 'animated'
 * @param {string} value Для запуска анимации этот параметр должен быть равен 'yes', а для отключения анимации он должен быть равен ''
 */
function setMod(action, value) {
    if (action === 'animated' && value === 'yes' && !buttonReverse1) {
        buttonReverse1 = animateButtons(animateButton, buttonReverse1, innerDiv1);
        block.style.animationPlayState = 'running'
    } else if (action === 'animated' && value === '' && buttonReverse1) {
        buttonReverse2 = animateButtons(animateButton, buttonReverse1, innerDiv1);
        block.style.animationPlayState = 'paused'
    }
}

/**
 * @description Устанавливает значение индикатора прогресса в поле ввода и запускает анимацию прогресса
 *
 * @param {number} value Значение индикатора прогресса
 */
function setValue(value) {
    input.value = value;
    changingInput()
}

/**
 * @description Встраивает блок прогресса внутрь элемента, передаваемого в качестве параметра
 *
 * @param element DOM-элемент, внутрь которого требуется добавить весь DOM-блок прогресса
 */
function addProgress(element) {
    element.innerHTML = '<div class="main">\n' +
        '    <div class="block">\n' +
        '    <div class="progress1 progress"></div>\n' +
        '    <div class="progress2 progress"></div>\n' +
        '    <div class="progress3 progress"></div>\n' +
        '    <div class="progress4 progress"></div>\n' +
        '    </div>\n' +
        '    <div class="paragraphs">\n' +
        '        <p class="progress-p">Value</p>\n' +
        '        <p class="progress-p">Animate</p>\n' +
        '        <p class="progress-p">Hide</p>\n' +
        '    </div>\n' +
        '    <div class="functions">\n' +
        '        <input class="progress-value" value="0">\n' +
        '        <div class="animate"><div class="inner"></div></div>\n' +
        '        <div class="hide"><div class="inner"></div></div>\n' +
        '    </div>\n' +
        '</div>';
    window.input = document.getElementsByClassName('progress-value')[0],
        window.progress3 = document.getElementsByClassName('progress3')[0],
        window.progress4 = document.getElementsByClassName('progress4')[0],
        window.animateButton = document.getElementsByClassName('animate')[0],
        window.hideButton = document.getElementsByClassName('hide')[0],
        window.innerDiv1 = document.getElementsByClassName('inner')[0],
        window.innerDiv2 = document.getElementsByClassName('inner')[1],
        window.block = document.getElementsByClassName('block')[0],
        window.buttonReverse1 = false, window.buttonReverse2 = false,
        window.rotateValue1 = 0, window.rotateValue2 = 0, window.inputNumber = 0;

    /**
     * @description Проверяет поля ввода на ввод допустимого значения от 0 до 100 при фокусе на поле ввода и нажатии клавиши
     */
    input.onkeyup = function () {
        var degValue = +this.value;
        if (degValue > -1 && degValue < 101) inputNumber = degValue;
        this.value = inputNumber
    };

    /**
     * @description Запускает анимацию процесса при изменении значения в поле ввода
     *
     * @type {changingInput}
     */
    input.onchange = changingInput;

    /**
     * @description Запускает анимацию переключателя анимации и запускает или останавливает анимацию прогресса при нажатии на переключатель анимации
     */
    animateButton.onclick = function () {
        buttonReverse1 = animateButtons(this, buttonReverse1, innerDiv1);
        buttonReverse1 ? block.style.animationPlayState = 'running' : block.style.animationPlayState = 'paused'
    };

    /**
     * @description Запускает анимацию переключателя скрытия блока прогресса и анимацию скрытия или показа блока прогресса при нажатии на переключатель скрытия блока прогресса
     */
    hideButton.onclick = function () {
        buttonReverse2 = animateButtons(this, buttonReverse2, innerDiv2);
        buttonReverse2 ? block.style.opacity = '0' : block.style.opacity = '1'
    };
}

/**
 * @description Пример встраивания блока прогресса в элемент 'body'
 */
addProgress(document.body);