const authRoutes = require("./routes/auth.js")
const userRoutes = require("./routes/users.js")
const postRoutes = require("./routes/posts.js")
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(8800, () => {
    console.log("Connected");
});