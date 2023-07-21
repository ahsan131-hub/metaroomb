"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentController = void 0;
const content_model_1 = __importDefault(require("./content.model"));
const ContentController = {
    createContent: (ContentData) => __awaiter(void 0, void 0, void 0, function* () {
        return content_model_1.default.create(Object.assign({}, ContentData));
    }),
    removeContent: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return content_model_1.default.deleteOne({ _id: id });
    }),
    updateContent: (ContentData, id) => {
        return content_model_1.default.findByIdAndUpdate(id, {
            $set: Object.assign({}, ContentData),
        }, { new: true });
    },
    findContentById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield content_model_1.default.findById(id);
    }),
    findAllContentsOfUser: (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield content_model_1.default.find({ instructorId: instructorId });
    }),
    findAllContents: () => __awaiter(void 0, void 0, void 0, function* () {
        return content_model_1.default.find();
    }),
};
exports.ContentController = ContentController;
