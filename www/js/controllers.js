angular.module('SimpleRESTIonic.controllers', [])
    .controller('AuthCtrl', function($state) {
        var auth = this;

        function go(state) {
            $state.go(state);
        }

        auth.go = go;

    })

    .controller('LoginCtrl', function($state) {

    })

    .controller('SignupCtrl', function($state) {

    })

    .controller('ProfileCtrl', function($state, $rootScope, LoginService) {
        var profile = this;

        function signout() {
            LoginService.signout()
                .then(function () {
                    //$state.go('tab.login');
                    console.log("signed out");
                    $rootScope.$broadcast('logout');
                    $state.go($state.current, {}, {reload: true});
                })

        }

        profile.signout = signout;
    })

    .controller('MenuCtrl', function($state) {
        var menu = this;

        function go(state) {
            $state.go(state);
        }

        menu.go = go;
    })

    .controller('EventCtrl', function($state) {
        var event = this;

        var navTitle = '<img style="border-radius: 50%; max-width:100%; max-height:100%;" src="https://www.ulife.utoronto.ca/uploads/organization/icon/6488/tb_12.jpg"/>'
        var events = [
            {
                image: 'http://mmbiz.qpic.cn/mmbiz/m2bSKBPIGnIdWxc5iaTxFzRFaXjM1jn9UXmU8jrNpCMrKFY4dvf93NEPC7tmbibQR5KqoXeZd2t269iawlkYeVibbQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NDI1MDE2NA==&mid=407415080&idx=1&sn=6e13e201460e863b01f3fe25f30f15b3&scene=4#wechat_redirect',
                info: 'UTCMC',
                title: '漫长的告别 是青春盛宴',
                location: '93 Charles St. West (Isabel Bader Theatre)',
                date: '4月8日周六 6pm-9:30pm',
                price: '25',
            },
            {
                image: 'http://mmbiz.qpic.cn/mmbiz/m2bSKBPIGnJibaXoQVoTd7TEzj9hoFc5WrfsaUocfOjGibLe87x1dGZaW6iaesJcj7FUcvvmqf6OFicv9dbw9slL3Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NDI1MDE2NA==&mid=400480556&idx=1&sn=972cb444255c8634e231ac085cb63d94&scene=4#wechat_redirect',
                info: 'UTCMC·K王',
                title: '决赛在即，锋芒尽露',
                location: '93 Charles St. West (Isabel Bader Theatre)',
                date: '11月21日 6pm-9:30pm',
                price: '30',
            },
            {
                image: 'http://mmbiz.qpic.cn/mmbiz/m2bSKBPIGnK1dL6JloSNy0cESLDFL8D9ftyfBydLiaTPKx4vTSiaNMn5qDJIcLCfqmg3m3fCOkfLkGicOLG2k3g9w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NDI1MDE2NA==&mid=400243417&idx=1&sn=53e80e5e94c22be853d4e8777f9c7654&scene=4#wechat_redirect',
                info: 'UTCMC·K王',
                title: '魔王驾到！！！',
                location: 'OISE Auditorium',
                date: '11月6日 6pm-9:30pm',
                price: '30',
            }
        ];

        event.events = events;
        event.title = navTitle;

    })

    .controller('EventDetailCtrl', function($state) {
        var eventDetail = this;

        var events = [
            {
                image: 'http://mmbiz.qpic.cn/mmbiz/m2bSKBPIGnIdWxc5iaTxFzRFaXjM1jn9UXmU8jrNpCMrKFY4dvf93NEPC7tmbibQR5KqoXeZd2t269iawlkYeVibbQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NDI1MDE2NA==&mid=407415080&idx=1&sn=6e13e201460e863b01f3fe25f30f15b3&scene=4#wechat_redirect',
                info: 'UTCMC',
                title: '漫长的告别 是青春盛宴',
                location: '93 Charles St. West (Isabel Bader Theatre)',
                date: '4月8日周六 6pm-9:30pm',
                price: '25',
            },
            {
                image: 'http://mmbiz.qpic.cn/mmbiz/m2bSKBPIGnJibaXoQVoTd7TEzj9hoFc5WrfsaUocfOjGibLe87x1dGZaW6iaesJcj7FUcvvmqf6OFicv9dbw9slL3Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NDI1MDE2NA==&mid=400480556&idx=1&sn=972cb444255c8634e231ac085cb63d94&scene=4#wechat_redirect',
                info: 'UTCMC·K王',
                title: '决赛在即，锋芒尽露',
                location: '93 Charles St. West (Isabel Bader Theatre)',
                date: '11月21日 6pm-9:30pm',
                price: '30',
            },
            {
                image: 'http://mmbiz.qpic.cn/mmbiz/m2bSKBPIGnK1dL6JloSNy0cESLDFL8D9ftyfBydLiaTPKx4vTSiaNMn5qDJIcLCfqmg3m3fCOkfLkGicOLG2k3g9w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5NDI1MDE2NA==&mid=400243417&idx=1&sn=53e80e5e94c22be853d4e8777f9c7654&scene=4#wechat_redirect',
                info: 'UTCMC·K王',
                title: '魔王驾到！！！',
                location: 'OISE Auditorium',
                date: '11月6日 6pm-9:30pm',
                price: '30',
            }
        ];

        var navTitle = '<img style="border-radius: 50%; max-width:100%; max-height:100%;" src="https://www.ulife.utoronto.ca/uploads/organization/icon/6488/tb_12.jpg"/>'

        var eventId = $state.params.eventId;

        var eventUrl = events[eventId].url;

        console.log(eventUrl);
        eventDetail.title = navTitle;
        eventDetail.eventUrl = eventUrl;
        eventDetail.eventId = eventId;
    })

    .controller('SponsorCtrl', function($state) {
        var sponser = this;

        var navTitle = '<img style="border-radius: 50%; max-width:100%; max-height:100%;" src="https://www.ulife.utoronto.ca/uploads/organization/icon/6488/tb_12.jpg"/>'

        sponser.title = navTitle;
    })

    .controller('InfoCtrl', function($state) {
        var info = this;
        
        var navTitle = '<img style="border-radius: 50%; max-width:100%; max-height:100%;" src="https://www.ulife.utoronto.ca/uploads/organization/icon/6488/tb_12.jpg"/>'
        
        info.title = navTitle;
    })

    .controller('MusicCtrl', function($scope, $state, MediaManager) {
        var music = this;

        var navTitle = '<img style="border-radius: 50%; max-width:100%; max-height:100%;" src="https://www.ulife.utoronto.ca/uploads/organization/icon/6488/tb_12.jpg"/>'

        var tracks = [
            {
                url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3',
                artist: 'The Police',
                title: 'Message in a bottle',
                art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
            },
            {
                url: 'https://ionic-audio.s3.amazonaws.com/Roxane.mp3',
                artist: 'The Police',
                title: 'Roxane',
                art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
            }
        ];

        music.tracks = tracks
        music.title = navTitle;
    })

    .controller('LoginCtrl', function (Backand, $state, $rootScope, LoginService) {
        var login = this;

        var navTitle = '<img style="border-radius: 50%; max-width:100%; max-height:100%;" src="https://www.ulife.utoronto.ca/uploads/organization/icon/6488/tb_12.jpg"/>'

        function signin() {
            LoginService.signin(login.email, login.password)
                .then(function () {
                    onLogin();
                }, function (error) {
                    console.log(error)
                })
        }

        function anonymousLogin(){
            LoginService.anonymousLogin();
            onLogin();
        }

        function onLogin(){
            $rootScope.$broadcast('authorized');
            $rootScope.isAuthorized = true;
            $state.go('tab.event');
        }

        function signout() {
            LoginService.signout()
                .then(function () {
                    //$state.go('tab.login');
                    console.log("signed out");
                    $rootScope.$broadcast('logout');
                    $state.go($state.current, {}, {reload: true});
                })

        }

        login.signin = signin;
        login.signout = signout;
        login.anonymousLogin = anonymousLogin;
        login.title = navTitle;
    })

    .controller('DashboardCtrl', function (ItemsModel, $rootScope) {
        var vm = this;

        function goToBackand() {
            window.location = 'http://docs.backand.com';
        }

        function getAll() {
            ItemsModel.all()
                .then(function (result) {
                    vm.data = result.data.data;
                });
        }

        function clearData(){
            vm.data = null;
        }

        function create(object) {
            ItemsModel.create(object)
                .then(function (result) {
                    cancelCreate();
                    getAll();
                });
        }

        function update(object) {
            ItemsModel.update(object.id, object)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function deleteObject(id) {
            ItemsModel.delete(id)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function initCreateForm() {
            vm.newObject = {name: '', description: ''};
        }

        function setEdited(object) {
            vm.edited = angular.copy(object);
            vm.isEditing = true;
        }

        function isCurrent(id) {
            return vm.edited !== null && vm.edited.id === id;
        }

        function cancelEditing() {
            vm.edited = null;
            vm.isEditing = false;
        }

        function cancelCreate() {
            initCreateForm();
            vm.isCreating = false;
        }

        vm.objects = [];
        vm.edited = null;
        vm.isEditing = false;
        vm.isCreating = false;
        vm.getAll = getAll;
        vm.create = create;
        vm.update = update;
        vm.delete = deleteObject;
        vm.setEdited = setEdited;
        vm.isCurrent = isCurrent;
        vm.cancelEditing = cancelEditing;
        vm.cancelCreate = cancelCreate;
        vm.goToBackand = goToBackand;
        vm.isAuthorized = false;

        $rootScope.$on('authorized', function () {
            vm.isAuthorized = true;
            getAll();
        });

        $rootScope.$on('logout', function () {
            clearData();
        });

        if(!vm.isAuthorized){
            $rootScope.$broadcast('logout');
        }

        initCreateForm();
        getAll();

    });

