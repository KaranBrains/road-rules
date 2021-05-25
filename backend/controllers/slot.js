const Slot = require("../models/Slot");

exports.addSlot = (req, res) => {
    if (
        !req.body.date ||
        !req.body.time ||
        !req.body.instructor ||
        !req.body.clientLimit
    ) {
        return res.status(400).json({ msg: 'Invalid data' });
    }
    let newSlot = Slot(req.body);
    newSlot.save((err, slot) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        return res.status(201).json(slot);
    });
};

exports.deleteSlot = (req, res) => {
    if ( !req.query.id ) {
        return res.status(400).json({ msg: 'Invalid data' });
    }
    Slot.findByIdAndDelete(req.query.id , (err,slot) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        return res.status(201).json(slot);
    })
};

exports.modifySlot = (req, res) => {
    if ( 
        !req.query.id ||
        !req.body.date ||
        !req.body.time ||
        !req.body.instructor ||
        !req.body.clientLimit
         ) {
        return res.status(400).json({ msg: 'Invalid data' });
    }
    Slot.findByIdAndUpdate(req.query.id, req.body , (err,slot) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        return res.status(201).json({ msg: 'Updated slot successfully' });
    })
};

exports.getSlots = (req, res) => {
    Slot.find({} , (err,slots) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        return res.status(201).json({slots: slots});
    })
};

exports.searchSlotByDate = (req, res) => {
    if ( !req.query.date ) {
        return res.status(400).json({ msg: 'Invalid data' });
    }
    Slot.find({ date:req.query.date } , (err,slots) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        return res.status(201).json({slots: slots});
    })
};

exports.getSlotById = (req, res) => {
    Slot.findById(req.query.id , (err,slot) => {
        if (err) {
            return res.status(400).json({ msg: err });
        }
        return res.status(201).json({slot: slot});
    })
};