import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
        maxlength: 1000,
      },
      options: [
        {
          type: String,
          required: true,
          maxlength: 1000,
        },
      ],
      correctAnswer: {
        type: String,
        required: true,
        maxlength: 1000,
      },
    },
  ],
  startTime: {type:String,required:true},
  endTime: {type:String,required:true},
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;