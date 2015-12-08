angular.module('myApp').controller('portfolioCtrl',function($scope){
    $scope.list = [
    {
        src:"image/cube.png",
        link:"http://www.andyhch.com/NumberScramble/index.html",
        gly:"glyphicon glyphicon-equalizer",
        title:"NumberScramble Game",
        detail:"Developed a simple number scramble game based on HTML5 drag and drop event, Jquery, Bootstrap and localstorage API. User can select different mode to play the game and the score will be saved in user's localstorage. User can view their score by clicking the gameboard button."
    },
    {
    	src:"image/chat-icon.png",
    	link:"http://www.andyhch.com/comment_box/index.html",
    	gly:"glyphicon glyphicon-comment",
    	title:"Comment Box",
    	detail:"Developed a simple responsive comment box site based on Html5, CSS3 ,AngularJS, Jquery, Bootstrap, PHP and MySQL. User's comment are posted through AngularJS $http service to the php file which handle of inserting data to MySQL database. The comments stored in database are being processed by another php file which ouput the data in JSON format. The comments are fetched back to front-end through AngularJS $http 'get' method. Angular-animate and angular-scroll-glue are injected to angularjs main module to help creating better user-interface."
    },
    {
    	src:"image/coderoom.png",
    	link:"http://www.andyhch.com/coderoom/index.html",
    	gly:"glyphicon glyphicon-th-large",
    	title:"CodeRoom Project",
    	detail:"CodeRoom is a responsive website that collects popular web development technology. The website is based on CSS3, Jquery, AngularJS, AngularUI Boostrap, Twitter Boostrap, Animate.css and also several Jquery plugins. The whole webpage is like a wall and all the technologies information are displayed like colorful sticky notes on it. User can check introduction and offical website of each technology on 'notes' and also view details like github link, cdn and install command by clicking the 'notes'. The details information are displayed in a modal."
    },
    {
        src:"image/angularjs.png",
        link:"http://www.andyhch.com/bookmark.html",
        view:"fadeInRight",
        gly:"glyphicon glyphicon-pencil",
        title:"AngularJS Bookmark App",
        detail:"Developed a simple bookmark application based on AngularJS. The bookmarks are divided into four categories in default setting. User can add new category to the list, and also add,edit and delete existed bookmarks. This is only a front-end version application for demo so there is no data exchange between server-side and client-side and thus no operation will be saved when page got refresh. I'm still improving the code to add more functionality."
    },
    {
    	src:"image/uilogo.png",
    	link:"http://andyhch.com/wordpress/gameui/nggallery/thumbnails",
    	view:"fadeInLeft",
    	gly:"glyphicon glyphicon-picture",
    	title:"Game UI design",
    	detail:"Designed and created the layout of all game scenes and game items in a Flash game by Photoshop. The game is based on Chinese Zodiac and thus we need 12 different rooms to represent 12 animal signs. There were 14 scenes and hundred of game items in total and I edited every single item to provide better user interface. "
    }
    ];
});