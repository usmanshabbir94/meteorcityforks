Meteor.startup(function() {
    navigator.geolocation.getCurrentPosition(function(position){
    Session.set('location', {lat:position.coords.latitude,lon:position.coords.longitude});
    console.log(Session.get('location').lat);
    console.log("P",position);
    Meteor.call('fetchNearbyLocations', position.coords)
  });
});
