const Choose = require("../models/Choose");

exports.addChoose = (req, res) => {
  if (
    !req.body.point
  ) {
    return res.status(400).json({ msg: 'Please send all entries' });
  }
  let choose = new Choose(req.body);
  choose.save((err,savedChoose)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ msg: 'Choose added successfully!' });
  })
};

exports.getChoose = (req, res) => {
    Choose.find({},(err,savedChoose)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ chooses: savedChoose });
    })
  };

exports.updateChoose = (req, res) => {
    Choose.findByIdAndUpdate(req.query.id,req.body)
    .then((err)=>{
        return res.status(200).json({ msg: 'Choose updated successfully!' });
    })
};



