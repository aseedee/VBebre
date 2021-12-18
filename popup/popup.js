const button = document.getElementById('toggle-button');
const summary = document.getElementById('summary');
const mainDiv = document.getElementById('main');

const enabledAttribute = 'b-enabled';

function toggle() {
    chrome.storage.local.get(['active'], (res) => {
        res.active = !res.active;
        updatePage(res.active);
        chrome.storage.local.set({'active': res.active});
    });
}

let states = {
    false: {
        bg: '/res/bg_disabled.png',
        summary: "Ваш ВКонтакте сейчас без Бебры.",
        buttonText: "Исправить это. Немедленно.",
    },
    true: {
        bg: '/res/bg_enabled.png',
        summary: "Бебра присутствует в Вашем ВКонтакте.",
        buttonText: "Сейчас это мне не нужно.",
    }
}

function updatePage(bool) {
    summary.innerText = states[bool].summary;
    if (bool) {
        summary.setAttribute(enabledAttribute, '');
    } else {
        summary.removeAttribute(enabledAttribute);
    }
    button.innerText = states[bool].buttonText;
    mainDiv.style.backgroundImage =
        'url("' + states[bool].bg + '")';
}

button.onclick = toggle;

chrome.storage.local.get(['active'], (res) => {
    updatePage(res.active);
});
