import { Meteor } from 'meteor/meteor'

import { Customer } from "../collections/collections";

Meteor.methods({
    'customer.insert'(doc) {
        return Customer.insert(doc)
    },
    'customer.find'(doc) {
        return Customer.find().fetch()
    },
    'customer.insert'(id) {
        return Customer.remove({ _id: id })
    },
    'customer.update'(doc) {
        return Customer.update({ _id: doc._id }, { $set: doc })
    },

})