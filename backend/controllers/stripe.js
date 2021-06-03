const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const Payment = require("../models/Payment");
const Slot = require("../models/Slot");
const User = require("../models/User");
const Ride = require("../models/Rides");
require('dotenv').config();

exports.checkout = async (req,res,next) => {
    try {
        const slot = await Slot.findById(req.body.slot);
        if (slot.booking) {
            return res.status(400).json({ msg: "Slot already booked!" });
        }
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'cad',
                  product_data: {
                    name: 'Road-Rules Riding Class',
                  },
                  unit_amount: slot.price,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: process.env.FRONT_END_URL + '/confirm-payment',
            cancel_url: process.env.FRONT_END_URL + '/cancel-payment',
          });
        let payment = Payment({
            session: session.id,
            slot: req.body.slot,
            client: req.body.client
        })
        payment.save((err, pay) => {
            if (err) {
                console.log(err);
              return res.status(400).json({ msg: err.message });
            }
            return res.status(201).json({ id: pay.session });
        })
    } catch (e) {
        console.log(e);
        return res.status(400).send({
            msg: e.message
        });
    }
}

exports.confirmRideOnline = async (req,res,next) => {
    try {
        if (!req.query.id || !req.query.address) {
            return res.status(400).json({ msg: "You need to send session id!" });
        }
        const session = await stripe.checkout.sessions.retrieve(
            req.query.id
          );
        if (session.payment_status == 'paid') {
            const payment = await Payment.findOne({session: req.query.id});
            const slot = await Slot.findById(payment.slot);
            if (slot.booking) {
                return res.status(400).json({ msg: "Slot already booked!" });
            }
            const client = await User.findById(payment.client);
            const address = client.address.filter(a=> a == req.query.address)[0];
            const ride = {
                client : client._id,
                clientName : client.fullName,
                instructor : slot.instructor,
                slot : slot._id,
                status : "scheduled",
                modeOfPayment : "online",
                price : slot.price,
                time : slot.time,
                date : slot.date,
                instructorName: slot.instructorName,
                address : address.street + ',' + address.province + ',' + address.city + ',' +  address.postalCode
            }
            slot.status = "booked";
            slot.save((err,s)=>{
                if (err) {
                    return res.status(400).json({ msg: err.message });
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
            })
        }
    } catch (e) {
        return res.status(400).send({
            msg: e.message
        });
    }
}