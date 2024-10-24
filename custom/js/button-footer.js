(function ($) {

    "use strict";

    const buttons = [
        { text: "Đăng kí tham dự", icon: "fa fa-pencil-square-o", link: "https://phuong-ha.love#rsvp"},
        { text: "Thiệp nhà trai", icon: "fa fa-male", link: "https://phuong-ha.love/invitation-men.html"},
        { text: "Thiệp nhà gái", icon: "fa fa-female", link: "https://phuong-ha.love/invitation-women.html"},
        { text: "Mừng cưới", icon: "fa fa-gift", link: "https://phuong-ha.love/wedding-congratulations.html" },
    ];

    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.right = '15px';
    buttonContainer.style.bottom = '75px';
    buttonContainer.style.zIndex  = '9';
    document.body.appendChild(buttonContainer);

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = 'circle-button';
        btn.title = button.text;
        
        if(button.icon){
            btn.innerHTML = `<i class="${button.icon}"></i>`;
        }
        if(button.image){
            btn.innerHTML = `<img src="${button.image}"></i>`;
        }

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = button.text;
        const div_triangle = document.createElement('div');
        div_triangle.className  = 'triangle';
        tooltip.appendChild(div_triangle);
        const div_sub = document.createElement('div');
        div_sub.style.position  = 'relative';
        div_sub.appendChild(tooltip);
        btn.appendChild(div_sub);

        var parant_btn = document.createElement('div');
        if(button.link){
            parant_btn = document.createElement('a');
            parant_btn.href = button.link
        }
        parant_btn.appendChild(btn)

        buttonContainer.appendChild(parant_btn);
    });

})(window.jQuery);