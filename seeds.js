var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
    {
        name: "Salmon Creek", 
        image: "http://photosforclass.com/download/4901707346",
        description: "Lorem ipsum dolor sit amet, vis ut dico nonumy abhorreant, eum nobis sapientem ei. An debet dolorum nam. Ut ponderum laboramus persequeris est, id splendide omittantur mea, illud audiam ea vim. Est te admodum explicari abhorreant, an nam alienum pertinax, vim porro omnium id. Disputationi mediocritatem ius at, at his posse graeco assueverit, te purto doctus sea. Stet cibo no sea, an quis affert facete his."
    },
    {
        name: "Granite Hill", 
        image: "http://photosforclass.com/download/5496185186",
        description: "Lorem ipsum dolor sit amet, vis ut dico nonumy abhorreant, eum nobis sapientem ei. An debet dolorum nam. Ut ponderum laboramus persequeris est, id splendide omittantur mea, illud audiam ea vim. Est te admodum explicari abhorreant, an nam alienum pertinax, vim porro omnium id. Disputationi mediocritatem ius at, at his posse graeco assueverit, te purto doctus sea. Stet cibo no sea, an quis affert facete his."
    },
    {
        name: "Mountain Goat's Rest", 
        image: "http://photosforclass.com/download/4798314980",
        description: "Lorem ipsum dolor sit amet, vis ut dico nonumy abhorreant, eum nobis sapientem ei. An debet dolorum nam. Ut ponderum laboramus persequeris est, id splendide omittantur mea, illud audiam ea vim. Est te admodum explicari abhorreant, an nam alienum pertinax, vim porro omnium id. Disputationi mediocritatem ius at, at his posse graeco assueverit, te purto doctus sea. Stet cibo no sea, an quis affert facete his."
    }
]

function seedDb() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            //add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        Comment.create(
                            {
                                text: "This place is great",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();    
                                        console.log("Created new comment");
                                }
                            });
                    }
                });    
            });
        }
    });    
    //add a few comments
}

module.exports = seedDb;
