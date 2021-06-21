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

// exports.updateAboutCards = (req, res) => {
//     AboutCards.findById("60cb7c8e85c84c4274b8c222",(err,savedAboutCards)=>{
//         if (err) {
//             return res.status(400).json({ msg: err.message });
//         } 
//         savedAboutCards.text=req.body.text;
//         savedAboutCards.save((err,ab)=>{
//             if (err) {
//                 return res.status(400).json({ msg: err.message });
//             } 
//             return res.status(200).json({ msg: "Updated"}); 
//         })
//     })
// };



