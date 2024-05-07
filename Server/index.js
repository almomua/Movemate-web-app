const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000;
const cookieParser = require("cookie-parser");

const authRoutes = require("./Routes/Auth");
const adminRoutes = require("./Routes/Admin");
const UploadeFoodImagetoApi = require("./Routes/UploadeFoodImagetoApi");
const UploadeBodyImagetoApi = require("./Routes/UploadBodyImagetoApi");
const imageUploadRoutes = require("./Routes/imageUploadRoutes");
// const calorieIntakeRoutes = require("./Routes/CalorieIntake"); //not done
// const sleepTrackRoutes = require("./Routes/SleepTrack"); //not done
// const stepTrackRoutes = require("./Routes/StepTrack"); //not done
// const weightTrackRoutes = require("./Routes/WeightTrack"); //not done
// const waterTrackRoutes = require("./Routes/WaterTrack"); //not done
// const workoutTrackRoutes = require("./Routes/WorkoutTrack"); //not done
// const workoutRoutes = require("./Routes/WorkoutPlans"); //not done
// const reportRoutes = require("./Routes/Report"); //not done

require("dotenv").config();
require("./db");

app.use(bodyParser.json());
const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/auth", authRoutes);
// app.use("/calorieintake", calorieIntakeRoutes);
app.use("/admin", adminRoutes);
app.use("/image-upload", imageUploadRoutes);
app.use("/upload-bodyimage-api", UploadeBodyImagetoApi);
app.use("/upload-foodimage-api", UploadeFoodImagetoApi);
// app.use("/sleeptrack", sleepTrackRoutes);
// app.use("/steptrack", stepTrackRoutes);
// app.use("/weighttrack", weightTrackRoutes);
// app.use("/watertrack", waterTrackRoutes);
// app.use("/workouttrack", workoutTrackRoutes);
// app.use("/workoutplans", workoutRoutes);
// app.use("/report", reportRoutes);

app.get("/", (req, res) => {
  res.json({ message: "The API is working" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
