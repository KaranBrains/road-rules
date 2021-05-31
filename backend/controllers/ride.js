const Slot = require("../models/Slot");
const User = require("../models/User");
const Ride = require("../models/Rides");
const Instructor = require("../models/Instructor");

exports.addRideCash = async (req, res) => {
    try {
        if (
            !req.body.slot ||
            !req.body.client
        ) {
            return res.status(400).json({ msg: 'Invalid data' });
        }
        const slot = await Slot.findById(req.body.slot);
        const client = await User.findById(req.body.client);
        if (slot.booking) {
            return res.status(400).json({ msg: "Slot already booked!" });
        }
        const ride = {
            client : client._id,
            instructor : slot.instructor,
            slot : slot._id,
            status : "scheduled",
            modeOfPayment : "cash"
        }
        let newRide = Ride(ride); 
        newRide.save((err, ride) => {
            if (err) {
                return res.status(400).json({ msg: err.message });
            }
            slot.booking = ride._id;
            slot.save((err, slot) => {
                if (err) {
                    return res.status(400).json({ msg: err.message });
                }
                return res.status(201).json(ride);
            })
        });
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
};

exports.myRides = async (req, res) => {
    try {
        if (
            !req.query.id
        ) {
            return res.status(400).json({ msg: 'Invalid data' });
        }
        Ride.find({client: req.query.id}, (err,rides)=>{
            if (err) {
                return res.status(400).json({ msg: err.message });
            }
            return res.status(201).json({ myRides : rides });
        })
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
};

exports.allRides = async (req, res) => {
    try {
        Ride.find({}, (err,rides)=>{
            if (err) {
                return res.status(400).json({ msg: err.message });
            }
            return res.status(201).json({ allRides : rides });
        })
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
};

exports.getRideById = async (req, res) => {
    try {
        if (
            !req.query.id
        ) {
            return res.status(400).json({ msg: 'Invalid data' });
        }
        Ride.findById(req.query.id, (err,ride)=>{
            if (err) {
                return res.status(400).json({ msg: err.message });
            }
            return res.status(201).json({ ride : ride });
        })
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
};

exports.feedback = async (req, res) => {
    try {
        if (
            !req.query.ride ||
            !req.body.rating
        ) {
            return res.status(400).json({ msg: 'Invalid data' });
        }
        const ride = await Ride.findById(req.query.ride);
        const instructor = await Instructor.findById(ride.instructor);
        const feedback = {
            stars : req.body.rating,
            feedback : req.body.feedback? req.body.feedback : 'No Feedback Given.',
            ride : ride._id
        }
        ride.rating = req.body.rating;
        ride.feedback = req.body.feedback? req.body.feedback : 'No Feedback Given.';
        await ride.save((err) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ msg: err.message });
            }
        })
        instructor.rating.push(feedback);
        await instructor.save((err,instructor) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ msg: err.message });
            }
            return res.status(200).json({ feedback: instructor });
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: err.message });
    }
};

// exports.deleteSlot = (req, res) => {
//     console.log(req.query)
//     if ( !req.query.id ) {
//         return res.status(400).json({ msg: 'Invalid data' });
//     }
//     Slot.findByIdAndDelete(req.query.id , (err,slot) => {
//         if (err) {
//             return res.status(400).json({ msg: err });
//         }
//         return res.status(201).json(slot);
//     })
// };

// exports.modifySlot = (req, res) => {
//     if ( 
//         !req.query.id ||
//         !req.body.date ||
//         !req.body.time ||
//         !req.body.instructor ||
//         !req.body.clientLimit
//          ) {
//         return res.status(400).json({ msg: 'Invalid data' });
//     }
//     Slot.findByIdAndUpdate(req.query.id, req.body , (err,slot) => {
//         if (err) {
//             return res.status(400).json({ msg: err });
//         }
//         return res.status(201).json({ msg: 'Updated slot successfully' });
//     })
// };

// exports.getSlots = (req, res) => {
//     Slot.find({} , (err,slots) => {
//         if (err) {
//             return res.status(400).json({ msg: err });
//         }
//         return res.status(201).json({slots: slots});
//     })
// };

// exports.searchSlotByDate = (req, res) => {
//     if ( !req.query.date ) {
//         return res.status(400).json({ msg: 'Invalid data' });
//     }
//     Slot.find({ date:req.query.date } , (err,slots) => {
//         if (err) {
//             return res.status(400).json({ msg: err });
//         }
//         return res.status(201).json({slots: slots});
//     })
// };

// exports.getSlotById = (req, res) => {
//     Slot.findById(req.query.id , (err,slot) => {
//         if (err) {
//             return res.status(400).json({ msg: err });
//         }
//         return res.status(201).json({slot: slot});
//     })
// };