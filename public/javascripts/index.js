var button = document.querySelector('#updateTranslation');
var fail = document.querySelector('#fail');
var success = document.querySelector('#success');
var loading = document.querySelector('#loading');
document.querySelector('#updateTranslation').addEventListener('click', function () {
    fail.innerHTML = '';
    success.innerHTML = '';
    loading.innerHTML = 'Loading...';
    button.disabled = true;
    fetch('update', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
       return response.json();
    }).then(function (res) {
        button.disabled = false;
        loading.innerHTML = '';
        if(res.message) {
            success.innerHTML = res.message;
        } else {
            fail.innerHTML = res.error
        }

    }).catch(function (err) {
        button.disabled = false;
        loading.innerHTML = '';
        fail.innerHTML = err
    });
});