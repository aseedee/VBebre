chrome.storage.local.get(['active'], (res) => {
    if (res.active) main();
});

const newLogoSVG = `
<svg width="136" height="24" xmlns="http://www.w3.org/2000/svg" fill="none">
 <defs>
  <clipPath id="new_logo_vk_with_text__a">
   <path id="svg_1" d="m0.001,0l136,0l0,24l-136,0l0,-24z" fill="#fff"/>
  </clipPath>
  <clipPath id="new_logo_vk_with_text__b">
   <path id="svg_2" d="m0,-12l136,0l0,48l-136,0l0,-48z" fill="#fff"/>
  </clipPath>
 </defs>
 <g>
  <title>Layer 1</title>
  <path id="svg_6" fill="#07F" d="m11.5,24l1,0c5.44,0 8.15,0 9.83,-1.68c1.67,-1.68 1.67,-4.4 1.67,-9.82l0,-1.02c0,-5.4 0,-8.12 -1.67,-9.8c-1.68,-1.68 -4.4,-1.68 -9.83,-1.68l-1,0c-5.44,0 -8.15,0 -9.83,1.68c-1.67,1.68 -1.67,4.4 -1.67,9.82l0,1.02c0,5.4 0,8.12 1.68,9.8c1.68,1.68 4.4,1.68 9.82,1.68z"/>
  <path id="svg_7" fill="#fff" d="m12.77,17.29c-5.47,0 -8.59,-3.75 -8.72,-9.99l2.74,0c0.09,4.58 2.11,6.52 3.71,6.92l0,-6.92l2.58,0l0,3.95c1.58,-0.17 3.24,-1.97 3.8,-3.95l2.58,0a7.62,7.62 0 0 1 -3.51,4.98a7.9,7.9 0 0 1 4.11,5.01l-2.84,0a4.94,4.94 0 0 0 -4.14,-3.57l0,3.57l-0.31,0z"/>
  <text transform="matrix(1.27751 0 0 0.46675 -21.3556 11.5956)" stroke="null" xml:space="preserve" text-anchor="start" font-family="'Roboto Mono'" font-size="30" id="svg_11" y="8.10679" x="36.57035" stroke-width="0" fill="currentcolor">вбебре</text>
 </g>
</svg>`

function main() {
    const logoSelector = '.TopHomeLink';
    let logo = document.querySelector(logoSelector);

    if (logo)
        logo.innerHTML = newLogoSVG
    else
        console.warn('вбебре: элемента логотипа не был найден');

    const spanSelector = 'span span';
    const replacements = [
        {id: 'l_pr', title: 'Моя бебра'},
        {id: 'l_nwsf', title: 'Бебрости'},
        {id: 'l_msg', title: 'Бебренджер'},
        {id: 'l_fr', title: 'Бебрузья'},
        {id: 'l_gr', title: 'Бебробщества'},
        {id: 'l_ph', title: 'Бебрографии'},
        {id: 'l_aud', title: 'Бебрузыка'},
        {id: 'l_vid', title: 'Бебридео'},
        {id: 'l_svd', title: 'Бебры'},
        {id: 'l_ap', title: 'Беброчения'},
        {id: 'l_mini_apps', title: 'Мини-беброжения'},
        {id: 'l_vkp', title: 'VK Бебра'},
        {id: 'l_mk', title: 'Бебраркет'},
        {id: 'l_fav', title: 'Бебрадки'},
        {id: 'l_doc', title: 'Бебрайлы'},
        {id: 'l_ads', title: 'Бебреклама'},
        {id: 'l_apm', title: 'Бебравление'},
        {id: 'l_ca', title: 'Бебрафон'},
        {id: 'l_stickers', title: 'Бебрики'},
    ];
    replacements.forEach(({ id, title }) => {
        let span = document.querySelector('#' + id + ' ' +
            spanSelector);

        if (span)
            span.innerText = title;
        else
            console.warn('вбебре: элемент с id', id, 'не был найден');
    });
}
