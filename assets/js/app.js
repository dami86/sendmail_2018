require('../css/app.css');
const routes = require('../../web/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);

var SendEmail = function() {


    this.AjaxForm = function ( url) {

        if (document.forms[0] && window.FormData) {

            var message = new Object();
            message.loading = 'Loading...';
            message.success = 'Email Sent!';
            message.failure = 'Whoops! There was a problem sending your message.';

            var form = document.forms[0];

            var statusMessage = document.createElement('div');
            statusMessage.className = 'status';

            // Set up the AJAX request
            var request = new XMLHttpRequest();
            request.open('POST', Routing.generate(url, true), true);
            request.setRequestHeader('accept', 'application/json');

            // Listen for the form being submitted
            form.addEventListener('submit', function (evt) {
                evt.preventDefault();
                form.appendChild(statusMessage);

                // Create a new FormData object passing in the form's key value pairs (that was easy!)
                var formData = new FormData(form);

                // Send the formData
                request.send(formData);

                // Watch for changes to request.readyState and update the statusMessage accordingly
                request.onreadystatechange = function () {
                    // <4 =  waiting on response from server
                    if (request.readyState < 4)
                        statusMessage.innerHTML = message.loading;
                    // 4 = Response from server has been completely loaded.
                    else if (request.readyState === 4) {
                        // 200 - 299 = successful
                        if (request.status == 200 && request.status < 300) {
                            document.getElementById('alerts').innerHTML =_successMessage(message.success);
                            statusMessage.innerHTML ='';
                        }
                        else
                            form.insertAdjacentHTML('beforeend', message.failure);
                    }
                }
            });
        }

    };


    function _successMessage(message) {
        return '<div class="alert alert-success fade show" role="alert"><b>Success! </b>' + message + '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>';
    };

}

var sendEmail = new SendEmail();
sendEmail.AjaxForm('email_sender_send_email_ajax' );




