const AboutCards = require("../models/AboutCards");

exports.addAboutCards = (req, res) => {
  if (
    !req.body.subHeading ||
    !req.body.text 
  ) {
    return res.status(400).json({ msg: 'Please send all entries' });
  }
  let aboutCards = new AboutCards(req.body);
  aboutCards.save((err,savedAboutCards)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ msg: 'AboutCards added successfully!' });
  })
};

exports.getAboutCards = (req, res) => {
    AboutCards.find({},(err,savedAboutCards)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ aboutCards: savedAboutCards });
    })
  };

exports.updateAbout = (req, res) => {
    AboutCards.findByIdAndUpdate(req.query.id,req.body)
    .then((err)=>{
      return res.status(200).json({ msg: 'Card updated successfully!' });
    })
};



