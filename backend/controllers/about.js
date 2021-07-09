const About = require("../models/About");

exports.addAbout = (req, res) => {
  if (
    !req.body.subHeading ||
    !req.body.text 
  ) {
    return res.status(400).json({ msg: 'Please send all entries' });
  }
  let about = new About(req.body);
  about.save((err,savedAbout)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ msg: 'About added successfully!' });
  })
};

exports.getAbout = (req, res) => {
    About.find({},(err,savedAbout)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ about: savedAbout[0] });
    })
  };

exports.updateAbout = (req, res) => {
    About.findById("60e30903a6a259663c3d6521",(err,savedAbout)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        savedAbout.text=req.body.text;
        savedAbout.save((err,ab)=>{
            if (err) {
                return res.status(400).json({ msg: err.message });
            } 
            return res.status(200).json({ msg: "Updated"}); 
        })
    })
};



