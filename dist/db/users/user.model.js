"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = exports.VERIFICATION_STATUS = void 0;
const mongoose_1 = require("mongoose");
var VERIFICATION_STATUS;
(function (VERIFICATION_STATUS) {
    VERIFICATION_STATUS["NOT_UPLOADED"] = "NOT_UPLOADED";
    VERIFICATION_STATUS["PENDING"] = "PENDING";
    VERIFICATION_STATUS["VERIFIED"] = "VERIFIED";
    VERIFICATION_STATUS["REJECTED"] = "REJECTED";
})(VERIFICATION_STATUS = exports.VERIFICATION_STATUS || (exports.VERIFICATION_STATUS = {}));
var ROLES;
(function (ROLES) {
    ROLES["INSTRUCTOR"] = "INSTRUCTOR";
    ROLES["STUDENT"] = "STUDENT";
    ROLES["ADMIN"] = "ADMIN";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
const schema = new mongoose_1.Schema({
    fName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    lName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    userName: {
        type: String,
        // required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    image: {
        type: String,
        default: "",
    },
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (email) => {
                // Validate email format using regular expression
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Invalid email format",
        },
    },
    password: { type: String, select: false },
    phone: { type: String },
    gender: String,
    dateOfBirth: String,
    isEmailVerified: { type: Boolean, default: false },
    timezone: String,
    isPhoneVerified: { type: Boolean, default: false },
    registrationCompleted: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    role: {
        type: String,
        enum: [ROLES.INSTRUCTOR, ROLES.STUDENT, ROLES.ADMIN],
        default: ROLES.STUDENT,
    },
}, { timestamps: true, strict: true });
// schema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });
// schema.methods.isValidPassword = async function (password: string) {
//   const encryptedPass = (
//     await User.findOne({ email: this.email }).select("password")
//   )?.password as string;
//   const compare = bcrypt.compare(password, encryptedPass);
//   return compare;
// };
const User = (0, mongoose_1.model)("User", schema);
exports.default = User;
