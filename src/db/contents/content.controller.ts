import Content from "./content.model";
import { IContent_d } from "./content.types";

const ContentController = {
  createContent: async (ContentData: any) => {
    return Content.create({ ...ContentData });
  },
  removeContent: async (id: string) => {
    return Content.deleteOne({ _id: id });
  },
  updateContent: (ContentData: any, id: string) => {
    return Content.findByIdAndUpdate(
      id,
      {
        $set: { ...ContentData },
      },
      { new: true }
    );
  },

  findContentById: async (id: string) => {
    return await Content.findById(id);
  },

  findAllContentsOfUser: async (instructorId: string) => {
    return await Content.find({ instructorId: instructorId });
  },
  findAllContents: async () => {
    return Content.find();
  },
};
export { ContentController };
