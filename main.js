function expandcollapse() {

    var body = document.getElementById("body");
    var sidebar = document.getElementById("sidebar");
    var button = document.getElementById("expand_btn");

    
    if (sidebar.classList.contains('desktop_view')) {
        sidebar.classList.replace('desktop_view', 'mobile_view');
        body.classList.replace('desktop_body', 'mobile_body');
        button.setAttribute('src','./Images/arrow-2.png');
    }
    else {
        sidebar.classList.replace('mobile_view', 'desktop_view');
        body.classList.replace('mobile_body', 'desktop_body');
        button.setAttribute('src','./Images/arrow.png');

    }

}