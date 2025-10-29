import Note from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
  const authUser = req.user;
  const notes = await Note.find({}).sort({updatedAt: -1});
  return res.send({ status: true, user: authUser, notes });
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
                res.send({status: true, message: "Note deleted successfully"})
            } else {
                res.send({status: true, message: "Note is not found or action perform"})
            }
        } catch (error) {
            console.log(`Error in delete fn(): \n ${error}`)
        }
    } else {
        res.send({status: true, message: "Note ID is not found"})
    }
};

export const detailNote = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findById({_id: id});
    if (note) {
      return res.send({ status: true, note });
    } else {
      console.log("Note not found")
      return res.send({ status: false, message: "Note not found" });
    }
  } catch (error) {
    console.log(`Something went wrong: \n ${error}`)
  }
};

export const updateNote = async (req, res) => {
  const id = req.params.id
  const note = req.body

  try {
    const ok = await Note.findByIdAndUpdate({_id: id}, note);
    if (ok) {
      return res.send({ status: true, message: "Note updated successfully" });
    } else {
      return res.send({ status: false, message: "Failed to update note" });
    }
  } catch (error) {
    console.log(`Something went wrong: \n ${error}`)
  }
}