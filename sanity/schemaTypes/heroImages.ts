import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroImage",
  type: "document",
  title: "Two Hero Images",
  fields: [
    defineField({
      name: "image1",
      type: "image",
      title: "First Image",
      options:{
        hotspot: true
      }
    }),
    defineField({
      name: "image2",
      type: "image",
      title: "Second Image",
      options:{
        hotspot: true
      }
    }),
  ],
});
