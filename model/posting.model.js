const mongoose = require("mongoose");

const jobPostingSchema = mongoose.Schema({
  companyName: String,
  city: String,
  location: String,
  role: String,
  level: String,
  position: String,
  language: String,
  contract: String,
});

const PostingModel = mongoose.model("jobPosting", jobPostingSchema);
module.exports = {
  PostingModel,
};
