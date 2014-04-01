//Router.onBeforeAction('loading');

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});
Router.map(function () {
    this.route('root', {
        path: '/',
        template: 'sample',
        data: function () {
            console.log("dashBoard");
            return {
                hey: "헤이 맨"
            };
        }
    });
    this.route('users', {
        path: '/users',
        waitOn : function(){
            return [ Meteor.subscribe('userList')]
        }
        ,data: function () {
            console.log("dashBoard");
            return {
              list : Users.find()
            };
        }
    });
});

Template.users.helpers({
    list : function(){
        console.log(Users.find().fetch());

        return Users.find();
    }
})


