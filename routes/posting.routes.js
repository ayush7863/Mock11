const express = require("express");
const { PostingModel } = require("../model/posting.model");

const jobPostRouter = express.Router();

jobPostRouter.post("/add", async (req, res) => {
  try {
    const post = new PostingModel(req.body);
    await post.save();
    res.status(200).send({ Post: "Posting the job Successfully" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

jobPostRouter.get("/job", async (req, res) => {
  const { page } = req.params;
  const s = (page - 1) * 2;
  try {
    const post = await PostingModel.find().skip(s).limit(10);
    res.status(200).send({ 'Done': post });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  jobPostRouter,
};
