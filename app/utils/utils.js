(function () {
    var tokenName = 'access_token';

    var setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
        console.log(document.cookie);
    }

    if (location.hash.indexOf(tokenName) > 0)
        setCookie(tokenName, window.location.hash.slice(15).split('&')[0], 2);
    

    $.post("http://api.stackexchange.com/2.2/questions/add",
        {
          title: "Donald Duck",
          body: "test",
         tags: "Donald Duck",
         key: "9sqBzBtGUF10BtMONbQEeA((",
          access_token: window.location.hash.slice(15).split('&')[0],
          preview: "true",
          site: "stackoverflow"
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });

    alert('test');
})();

