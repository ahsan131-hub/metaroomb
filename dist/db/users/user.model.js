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
})(ROLES = exports.ROLES || (exports.ROLES = {}));
const schema = new mongoose_1.Schema({
    fName: String,
    lName: String,
    userName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    phone: { type: String, unique: true },
    gender: String,
    dateOfBirth: String,
    isEmailVerified: { type: Boolean, default: false },
    timezone: String,
    isPhoneVerified: { type: Boolean, default: false },
    registrationCompleted: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    role: {
        type: String,
        enum: [ROLES.INSTRUCTOR, ROLES.STUDENT],
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
