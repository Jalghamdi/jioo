const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    user: {
        ref: 'users'
    },

    handle: {
        type: String,
        required: true

    },
    company: {
        type: String
    },
    website: {
        type: String,
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true

    },

    skills: [{
        type: String
    }],
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title:{
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String,

            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
            },
            description: {
                type: String,
            },
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
            },
            description: {
                type: String,
            },
        }
    ],
    Social: [
        {
            youtube: {
                type: String,
            },
            twitter: {
                type: String,
            },
            facebook: {
                type: String,
            },
            linkedin: {
                type: String,
            },
            instagram: {
                type:String,
            },
        }
    ],

    date: {
        type: Date
    },




});
module.exports= Profile = mongoose.model('Profile', ProfileSchema);
