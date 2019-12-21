const mongoose = require('mongoose');

const BootcampSChema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name cannot be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500,'Name cannot be more than 50 characters']
    },
    website: {
        type: String    
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be longer than 20 charachters']
    },
    email: String,
    localtion: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'UI/UX',
            'Mobile Development',
            'Business',
            'Data Science'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rate must be atleast 1'],
        max: [10,'Rating must cannot be more than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('Bootcamp', BootcampSChema);