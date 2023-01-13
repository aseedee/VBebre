chrome.storage.local.get(['active'], (res) => {
    if (res.active) main();
});

function main() {
    const spanSelector = '.left_label.inl_bl';
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
        // TODO: сезонное (Розыгрыш)
        // {id: 'l_ny2023': ''},
        // TODO: Стикеры
        // {id: 'l_stickers': ''},
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
