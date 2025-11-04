import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
import { ALL_NOTES } from "../resources/api";
import NotesItem from "../components/NotesItem";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllNotes = async () => {
      setIsLoading(true);

      try {
        const result = await axios.get(ALL_NOTES, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
          }
        });
        console.log(result.data.notes);
        if (result.data && result.data.notes) {
          setNotes(result.data.notes);
        }
      } catch (error) {
        toast.error("Failed to fetch notes");
      } finally {
        setIsLoading(false);
      }
    };
    getAllNotes();
  }, []);

  const handleLogout = () => {
    if ( localStorage.getItem('userToken') ) {
      localStorage.removeItem("userToken");
      toast.success("Loggout successful")
      window.location = '/login'
      return;
    }
  }

  return (
    <>
      <div className="rounded bg-white/70 p-5 flex items-center justify-between">
        <div>Notes List</div>
        <div>
          <NavLink
            className="px-4 py-1 rounded bg-blue-100"
            to={"/notes/create"}
          >
            Add Note
          </NavLink> | 
          <button
           onClick={handleLogout}
           className="cursor-pointer bg-red-500 text-white p-1 rounded"
          >Logout</button>
        </div>
      </div>

      <div className="my-5 p-5 rounded bg-white/30">
        {isLoading ? (
          "Data is loading..."
        ) : (
          <div>
            {notes.length > 0 ? (
              <div className="grid grid-cols-12 gap-3">
                {notes.map((note, i) => {
                  return (
                    <div
                      className="max-sm:col-span-12 lg:col-span-4  md:col-span-4 sm:col-span-6"
                      key={i}
                    >
                      <NavLink to={`/notes/edit/${note._id}`}>
                        <NotesItem note={note} setNotes={setNotes} />
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded bg-white p-3 text-center">No notes exist in database</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NotesList;
