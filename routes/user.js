const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    fullname: "Sathaporn Cabkaew",
    avatar:
      "https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-1/327889627_671598861373849_8207699113568447656_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R3ODPLm2cCkAX8QstB2&_nc_ht=scontent.fbkk15-1.fna&oh=00_AfD1TkkozZB_I1FreZZLSVvVlXK5jtbTvpat68u2ByDxSg&oe=660DA5FC",
  },
  {
    id: 2,
    fullname: "Gssspotted",
    avatar:
      "https://thethaiger.com/th/wp-content/uploads/2022/05/73122870_2526422564091811_3771195085065027584_n.jpg",
  },
];

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: [User]
 *     summary: Authenticate user.
 *     description: Authenticate user with provided credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 */
router.post("/user/login", function (req, res) {
  const { username, password } = req.body;
  const id = 1; //รหัส User 1
  // Validate username and password (example: check against database)
  if (username === "exampleUser" && password === "examplePassword") {
    // Authentication successful
    res
      .status(200)
      .json({ id: id, message: "User authenticated successfully" });
  } else {
    // Authentication failed
    res
      .status(401)
      .json({ id: 0, message: "Unauthorized. Invalid credentials." });
  }
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get a user by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: A single user object.
 *       404:
 *         description: user not found.
 */
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const result = users.find((rs) => rs.id === parseInt(id));
  // console.log(id);
  res.json(result);
});

module.exports = router;
