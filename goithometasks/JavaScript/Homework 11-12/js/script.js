$(function() { 
    $('body').jCarousel();  

    var dataObject = {
        members:[

        {head: "<h1>Черемных Юрий Михайлович</h1>", img: "<img src='img/Me.jpg' alt=''/>", text: "<p>Менеджер внешнеэкономической деятельности</p>"},

        {head: "<h3>Хочу учить фронтенд, потому что:</h3>",
         text: "<ul><li>здесь органично сочетаются логика и креативность</li><li>это очень перспективная профессия</li> <li>хочу лежать на пляже в Австралии и работать удаленно</li></ul>"},

        {head: "<h3>Мой контактный телефон:</h3>", text: "<p>+38067-224-30-87</p>"},

        {head: "<h3>Мой профиль Вконтакте:</h3>", text: "<a href='https://new.vk.com/idcherrym87' target ='_blank'>vk.com</a>"},

        {head: "<h3>Мой фидбек:</h3>", text: "<p>свободно владею английским и хорошо делаю презентации в пауэрпоинте</p>"},
  
        ]

      }; 

    var results = document.getElementById("results");
    results.innerHTML = tmpl("item_tmpl", dataObject);


});

