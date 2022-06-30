import { Profile } from "../models/profile.js";
// import { Gear } from "../models/gear.js";
// import { Comment } from '../models/comment.js'

function index(req, res) {
  Profile.find({})
    .sort("name")
    .then((profiles) => {
      res.render("profiles/index", {
        title: "Profiles",
        profiles: profiles,
        name: req.query.name,
      });
    })
    .catch((err) => {
      if (err) return next(err);
    });
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('gear')
  .populate('comments')
  .then((profile) => {
    const isSelf = profile._id?.equals(req.user.profile._id);
    res.render("profiles/show", {
      title: `${profile.name}'s profile`,
      profile,
      isSelf,
    });
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/");
  });
}

export { index, show };
