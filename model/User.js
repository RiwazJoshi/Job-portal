const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: async function () {
                let count = await mongoose.models.User.find({ email: this.email }).countDocuments()
                if (count) {
                    return false;
                };
            },
            message: "Email already exists"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    role: {
        type: String,
        required: true,
        enum: ["jobseeker", "jobprovider"],
        set: function (value) {
            return value.toLowerCase();
        }
    }
}, 
{
    timestamps: true
}
);
UserSchema.pre("save", async function (next) {
    let hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed
    next()

})
module.exports = mongoose.model("User", UserSchema)