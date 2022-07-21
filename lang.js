
var arrLang=  {
    'en': {
        'about':'ABOUT',
        'service':'SERVICE',
        'career':'CAREER',
        'contact':'CONTACT',
        'shapka':'Leading',
        'golovka':'the way in Russian Law',
        'sec':'We advise local and international companies with different industrial background in Russia and CIS',
        'ab':'More',

    },
    'ru':{
        'about': 'О НАС',
        'service':'СЕРВИС',
        'career':'КАРЬЕРА',
        'contact':'КОНТАКТ',
        'shapka':'Ведущая ',
        'golovka':' компания в Российском законодательстве',
        'sec':'Мы консультируем местные и международные компании с различным промышленным опытом в России и СНГ',
        'ab':'Узнать',
    }
}



$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item){
            $(this).text(arrLang[lang][$(this).attr('key')])
        })
    })
})