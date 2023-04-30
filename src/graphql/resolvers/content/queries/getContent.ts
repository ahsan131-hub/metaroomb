import { CourseController } from "../../../../db/courses/course.controller";
import { ContentController } from "../../../../db/contents/content.controller";

const getContent = async (parents: any, { id }: { id: string }, {}) => {
  try {
    const content = await ContentController.findContentById(id);
    return {
      content: content,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      Course: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getContent;
