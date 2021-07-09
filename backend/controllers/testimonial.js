const Testimonial = require("../models/Testimonial");

exports.addTestimonial = (req, res) => {
  if (
    !req.body.name ||
    !req.body.comment 
  ) {
    return res.status(400).json({ msg: 'Please send all entries' });
  }
  let testimonial = new Testimonial(req.body);
  testimonial.save((err,savedTestimonial)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ msg: 'Testimonial added successfully!' });
  })
};

exports.getTestimonial = (req, res) => {
    Testimonial.find({},(err,savedTestimonial)=>{
        if (err) {
            return res.status(400).json({ msg: err.message });
        } 
        return res.status(200).json({ testimonials: savedTestimonial });
    })
  };

exports.updateTestimonial = (req, res) => {
    Testimonial.findByIdAndUpdate(req.query.id,req.body)
    .then((err)=>{
        return res.status(200).json({ msg: 'Testimonial updated successfully!' });
    })
};



