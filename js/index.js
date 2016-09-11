require(['jquery','vue','public','less'],function ($,vue,public) {

    console.log(public)
    $.getJSON('./js/index.json').done(function (rs) {

        new vue({
            el: '#index',
            data: rs,
            ready:function () {
                public._back()
            }
        })


    })

})