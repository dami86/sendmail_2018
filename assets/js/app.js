require('../css/app.css');
const routes = require('../../web/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);



console.log('Hello Webpack Encore');

var testAjaxClass = document.getElementsByClassName("ajax");

function callAjax(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var myFunction = function(e) {
    console.log('test click');
    callAjax( Routing.generate('email_test_ajax', true), myCallback );
};

var myCallback = function() {
    console.log('after ajax');
};

for (var i = 0; i < testAjaxClass.length; i++) {
    testAjaxClass[i].addEventListener('click', myFunction, false);
}


const $ = require('jquery');
// JS is equivalent to the normal "bootstrap" package
// no need to set this to a variable, just require it
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});





// $(document).on('click', 'button.ajax', function(){
//     that = $(this);
//     $.ajax({
//         url: Routing.generate('test_ajax'),
//         type: "POST",
//         dataType: "json",
//         data: {
//             "some_var_name": "some_var_value"
//         },
//         async: true,
//         success: function (data)
//         {
//             console.log(data)
//             $('div#ajax-results').html(data.output);
//
//         }
//     });
//     return false;
//
// });