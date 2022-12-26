window.onload = function () {
    var video;
    var link;
    var fa = document.createElement('link')

    fa.setAttribute('rel', 'stylesheet');
    fa.setAttribute('href', 'https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css')
    document.body.append(fa)

    function createSuccess(param) {
        var success = document.createElement('div');
        var icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-check');
        success.classList.add('success');
        success.append(icon);
        document.body.append(success);
        setTimeout(() => {
            success.remove();
        }, 1200)
    }

    video = document.querySelector('video[src]');
    link = '';
    console.log(video);

    if (video != null) {
        createSuccess('rm');
    }

    document.addEventListener('keyup', function (e) {
        if (e.code == 'Numpad0') {
            video = document.querySelector('video[src]');
            link = '';
            if (video != null) {
                createSuccess();
            }
            console.log(video);
        }
    })

    document.addEventListener('keyup', function (e) {
        if (e.code == 'Enter') {
            link = video.getAttribute('src'); 
            if (video != null) {
                createSuccess();
            }
        }

        if (e.code == 'Escape') {
            video.setAttribute('src', link);
            if (video != null) {
                createSuccess();
            }
        }
    })
};