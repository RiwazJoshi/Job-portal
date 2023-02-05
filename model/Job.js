
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;




const JobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
     category: {
        type: String,
        required: true,
        enum: ["frontend", "backend"],
        set: function (value) {
            return value.toLowerCase();
        }
    },
    job_level: {
        type: String,
        required: true,
        enum: ["fresher", "junior", "mid", "senior"],
        set: function(value) {
            return value.toLowerCase();
        }
    },
    number_of_vacancy: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    // images: [String],

    // created_by: {
    //     type: String,
    //     ref: "User",
    //     required: true
    // },

    description: {
        type: String
    },
   
    // type: enum [top, hot, featured, normal]


},
{
    timestamps: true
});
module.exports = mongoose.model("Job", JobSchema) 