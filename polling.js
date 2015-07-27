/**
 * Created by Layric on 7/22/2015.
 */
/**
 * Created by Layric on 7/22/2015.
 */
self.addEventListener('message',function(event){
    var nIntervId;

    function start(status) {
        if(status){
            nIntervId = setInterval(getrepositories, 3000);
            console.log("now start interval!");
        }
    };
    function stop(status) {
        if(!status) {
            clearInterval(nIntervId);
            console.log("now stop!!!!!");
        }
    };


    function getrepositories() {

        var i = Math.floor(Math.random()*10);
        var q = ['nodejs','angularjs','ajax','regularexpress','sass','backbone','css3','webworker','geolocation','html5'];
        var url = 'https://api.github.com/search/repositories?q=' + q[i];
        console.log("the url is ", url);
        searchForRepositories(url);

    };



    function searchForRepositories(url) {
        var xhr = new XMLHttpRequest;
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.readyState);
                var obj = JSON.parse(xhr.responseText);
                self.postMessage(obj.items);
            };
        });
        xhr.open('get', url);
        xhr.send();
    };

    start(event.data);
    stop(event.data);


});

