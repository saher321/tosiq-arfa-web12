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

export const deleteNotes = async (req, res) => {
    const id = req.params.id
    if (id) {
        try {
            const ok = await Note.findByIdAndDelete({_id: id});
            if (ok) {
                res.send({status: true, message: "Notes deleted successfully"})
            } else {
                res.send({status: true, message: "Notes is not found or action perform"})
            }
        } catch (error) {
            console.log(`Error in delete fn(): \n ${error}`)
        }
    } else {
        res.send({status: true, message: "Notes ID is not found"})
    }
}
