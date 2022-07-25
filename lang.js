
var arrLang = {
    'en': {
        'about':'ABOUT',
        'service':'SERVICE',
        'career':'CAREER',
        'contact':'CONTACTS',
        'shapka':'DEEP',
        'golovka':'SCTRUCTURED LEGAL SERVICES',
        'shapka2':'We solve comprehensive legal tasks',
        'st1':'The firm provides advice on any legal matters that your business may be facing.',
        'st2':'The firm has been established in 2020 and our main goal is to deliver high-quality legal services to high-tech industry, support their growth and expansion.',
        'st3':'We have more than ten years of professional experience both in public and private sectors. Our lawyers successfully represented one of the largest D2C platforms in CIS region, helping them to expend their market and profit.',
        'st4':'Nowadays, we operate in Armenia and Russia. Moreover, we constantly enlarge our network for the sake of our clients.',
        'st5':'Partners of the firm: Levon Sargsyan',
        'st6':'Lawyers of the firm:',
        'practice':'Practice',
        'st7':'Antitrust Cases',
        'st8':'Contracting Services',
        'st9':'Data Protection',
        'st10':'Intellectual Property Protection',
        'st11':'Legal Support of IT Projects',
        'st12':'Legal Support of Investment Projects',
        'st13':'Legal Support of GameDev Projects',
        'st14':'Legal Support of Investment Projects',
        'st15':'Taxation',
        'st16':'etc',
        'st17':'Industries',
        'st18':'AgroTech',
        'st19':'E-commerce',
        'st20':'EdTech',
        'st21':'Game Publishing',
        'st22':'Marketing',
        'st23':'VC',
        'st24':'etc.',
        'st25':'CAREER',
        'st26':'We are always looking for highly creative and talented people to join us.',
        'st27':'Even if there is no published vacancy, at the moment, please feel free to reach out. We will be happy to review your application.',
        'st28':'Email your CV and a cover letter explaining your motivation and stating the areas of your interest to: career@dlp.am',
        'st29':'If we do have a role that might be suitable, we will reach out with more information.',
        'st30':'CONTACT',
        'st31':'Armenia, Yerevan, Adonc 17/1',
        'st32':'On map',
        'st33':'Tel: + 374 55 29 11 19',
        'st34':'Privacy Policy',
        'st35':'Site made by R&M',
        'st36':'DLP, 2022'
    },
    'ru':{
        'about': 'О НАС',
        'service':'Услуги',
        'career':'КАРЬЕРА',
        'contact':'КОНТАКТЫ',
        'shapka':'ГЛУБИННЫЕ ',
        'golovka':' ЮРИДИЧЕСКИЕ УСЛУГИ',
        'shapka2':'МЫ РЕШАЕМ СЛОЖНЫЕ ЮРИДИЧЕСКИЕ ЗАДАЧИ',
        'st1':'Фирма предоставляет консультации по любым юридическим вопросам, с которыми может столкнуться ваш бизнес.  ',
        'st2':'Фирма была основана в 2020 году, и нашей основной целью является предоставление высококачественных юридических услуг высокотехнологичным отраслям, поддержка их роста и расширения. ',
        'st3':'Мы обладаем более чем десятилетним профессиональным опытом работы как в государственном, так и в частном секторе. Наши юристы успешно представляли интересы одной из крупнейших D2C-платформ в СНГ, помогая ей расширять рынок и увеличивать прибыль.',
        'st4':'В настоящее время мы работаем в Армении и России, постоянно расширяя нашу партнерскую сеть ради всесторонней защиты интересов наших клиентов.',
        'st5':'Партнеры: Левон Саргсян',
        'st6':'Юристы:',
        'practice':'Деятельность',
        'st7':'Антимонопольные дела',
        'st8':'Подготовка договоров',
        'st9':'Защита персональных данных',
        'st10':'Защита интеллектуальной собственности',
        'st11':'Услуги по структурированию',
        'st12':'Юридическое сопровождение ИТ-проектов',
        'st13':'Юридическое сопровождение инвестиционных проектов',
        'st14':'Юридическое сопровождение проектов GameDev ',
        'st15':'Налогообложение',
        'st16':'и т.д.',
        'st17':'Отрасли',
        'st18':'AgroTech',
        'st19':'Электронная коммерция',
        'st20':'EdTech',
        'st21':'Издание игр',
        'st22':'Маркетинг',
        'st23':'Венчурные фонды',
        'st24':'и т.д.',
        'st26':'Карьера',
        'st27':'Мы в постоянном поиске креативных специалистов. ',
        'st28':'Даже если в данный момент нет опубликованной вакансии, пожалуйста, не стесняйтесь, отправьте свое резюме и сопроводительное письмо по адресу: career@dlp.am. Мы будем рады его рассмотреть. ',
        'st29':'Если у нас будет подходящая вакансия, мы свяжемся с вами и предоставим подробную информацию.',
        'st30':'КОНТАКТЫ',
        'st31':'Армения, Ереван, Адонца 17/1',
        'st32':'На карте',
        'st33':'Тел: + 374 55 29 11 19',
        'st34':'Политика конфиденциальности',
        'st35':'Сайт сделан R&M',
        'st36':'Глубинные, 2022',
        'st37': 'aaaaa'
    }
}


//LANGUAGE CHANGE FUNCTION


$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        
        $('.lang').each(function(index, item){
            $(this).text(arrLang[lang][$(this).attr('key')]);            
        }) 
    })
})