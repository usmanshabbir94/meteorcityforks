
Places = new Mongo.Collection('places');

Meteor.methods({
  'fetchNearbyLocations': function(coords) {
    if (Meteor.isServer) {
      results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.467016599999997,74.3048645&radius=500&types=food&key=AIzaSyCBqaFgjf0JzRPNfl1jIhR7LWjZ8TuVTV8")
      _(results.data.results).each(function(loc) {
        _.extend(loc, {loc: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}})
        Places.upsert({id: loc.id}, {$set: loc})
      });
    }
  }
});
