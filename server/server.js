Meteor.publish('userList', function(start,end) {

    console.log('userList subscribe');

    return Users.find({},{fields:{username:1,gender:1}});
});