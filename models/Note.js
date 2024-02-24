const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// schema - how data is stored or organized
const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

notesSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_sequence: 500,
});

module.exports = mongoose.model("Note", noteSchema);
