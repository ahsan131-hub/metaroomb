import { CourseController } from "../../../../db/courses/course.controller";

const createCourse = async (parents: any, { course }: any, {}) => {
  console.log(course);
  try {
    await CourseController.createCourse(course);
    console.log("Course created succsfully");
    return {
      status: 200,
      message: "Course created succsfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: "Course creation failed!",
    };
  }
};

export default createCourse;
