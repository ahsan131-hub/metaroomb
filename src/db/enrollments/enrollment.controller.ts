import Enrollment from "./enrollment.model";
import { IEnrollment_d } from "./enrollment.types";

const EnrollmentController = {
  enroll: async (studentId: string, courseId: string) => {
    return Enrollment.create({ studentId, courseId });
  },
  removeEnrollment: async (id: string, student: string) => {
    // TODO: Need to add the checks
    return Enrollment.deleteOne({ _id: id, studentId: student });
  },
  updateEnrollment: (EnrollmentData: any, id: string) => {
    return Enrollment.findByIdAndUpdate(
      id,
      {
        $set: { ...EnrollmentData },
      },
      { new: true }
    );
  },

  findEnrollmentByStudentId: async (stdId: string) => {
    return await Enrollment.find({ studentId: stdId }).populate("courseId");
  },
  findAllByCourseId: async (courseId: string) => {
    return await Enrollment.find({ courseId });
  },
  alreadEnrolled: async (studentId: string, courseId: string) => {
    return await Enrollment.exists({ studentId, courseId });
  },
  findAllEnrollments: async () => {
    return Enrollment.find();
  },
};
export { EnrollmentController };
