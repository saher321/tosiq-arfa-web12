import Note from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({});
  return res.send({ status: true, notes });
};

export const createNotes = async (req, res) => {
  const notes = req.body;
  if (!notes.title || !notes.description) {
    return res.send({ status: false, message: "Form fields are required" });
  }
  
  try {
    const result = await Note.create(notes);
    if (result) {
        return res.send({ status: true, message: "Data added successfully" });
    } else {
        return res.send({ status: false, message: "Data isn't added" });
    }
  } catch (error) {
    console.log(`Something went wrong: \n ${error}`)
  }
};
