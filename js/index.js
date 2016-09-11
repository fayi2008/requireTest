require(['jquery','vue','less'],function ($,vue) {
    $.getJSON('./js/index.json').done(function (rs) {

        new vue({
            el: '#index',
            data: rs
        })


    })

})