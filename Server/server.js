const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mysql = require("mysql2"); // MySQL2 client for Node.js
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
// const port = 3000;

const {
  port,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  JWT_SECRET_KEY,
  MYSQL_URL,
} = require("./config");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  session({
    secret: "your_secret_key", // Use a strong, unique secret
    resave: false, // Don't save unchanged sessions
    saveUninitialized: false, // Don't store empty sessions
    cookie: { maxAge: 600000 }, // Session lasts 1 minute
  })
);

// Create a connection to the MySQL database
const db = mysql.createPool({
  host: DB_HOST, // Database host
  user: DB_USERNAME, // Database username
  password: DB_PASSWORD, // Database password
  database: DB_DATABASE, // Name of the database
});
app.get("/", (req, res) => {
  (err, result) => {
    if (err) return res.status(500).json({ err: "error with databeas" });
  };
  res.send("Hello World!");
});

// app.post("/register", (req, res) => {
//   const { userNameInput, emailInput, passwordInput } = req.body;
//   db.query(
//     "INSERT INTO UsersData (UserName, Email, Password) VALUES (?, ?, ?)",
//     [userNameInput, emailInput, passwordInput],
//     (err, result) => {
//       if (err)
//         return res
//           .status(500)
//           .json({ err: "Username or email already exists !" }); // If there's an error, return the error

//       // Create payload for JWT
//       const payload = {
//         id: result.insertId,
//         username: userNameInput,
//       };
//       const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
//       // Find user //

//       const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // ساعة واحدة من الآن

//       db.query(
//         "INSERT INTO tokens(userLoginID, token, expiresAt) VALUES (?, ?, ?)",
//         [result.insertId, token, expiresAt],
//         (err) => {
//           if (err) {
//             return res.status(500).json({ err: "Failed to insert token." });
//           }
//           // res.status(201).json({ message: "Token added successfully." });
//           return res
//             .status(201)
//             .json({ message: "Register successful", token });
//         }
//       );
//     }
//   );
// });

app.post("/register", async (req, res) => {
  const { userNameInput, emailInput, passwordInput, phoneNumberInput } =
    req.body;

  const hashedPassword = await bcrypt.hash(passwordInput, 10);
  db.query(
    "INSERT INTO Users (UserName, Email, PasswordHash, PhoneNumber) VALUES (?, ?, ?, ?)",
    [userNameInput, emailInput, hashedPassword, phoneNumberInput],
    (err, result) => {
      if (err) return res.status(500).json({ error: err }); // If there's an error, return the error

      // Create payload for JWT
      const payload = {
        id: result.insertId,
        username: userNameInput,
      };
      const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
      // Find user //

      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // ساعة واحدة من الآن

      db.query(
        "INSERT INTO Tokens(UserLoginId, token, ExpiresAt) VALUES (?, ?, ?)",
        [result.insertId, token, expiresAt],
        (err) => {
          if (err) {
            return res.status(500).json({ err: "Failed to insert token." });
          }
          // res.status(201).json({ message: "Token added successfully." });
          return res
            .status(201)
            .json({ message: "Register successful", token });
        }
      );
    }
  );
});

app.post("/tesst", async (req, res) => {
  db.query("SELECT  * FROM Users", (err, result) => {
    if (err) return res.status(500).json({ error: err }); // If there's an error, return the error

    return res
      .status(201)
      .json({ message: "Register successful", userId: result });
  });
});

app.get("/tesst", async (req, res) => {
  db.query("SELECT  * FROM Users", (err, result) => {
    if (err) return res.status(500).json({ error: err }); // If there's an error, return the error

    return res
      .status(201)
      .json({ message: "Register successful", userId: result });
  });
});

// MIDDLEWARE FOR JWT VERIFICATION //
app.post("/login", async (req, res) => {
  const { userNameInput, passwordInput } = req.body;

  const query =
    "SELECT UserName, PasswordHash, UserID FROM Users WHERE UserName = ? AND PasswordHash = ?";
  db.query(query, [userNameInput, passwordInput], async (err, result) => {
    if (err) return res.status(500).json(err); // If there's an error, return the error

    // Find user //
    if (result.length === 0) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    let user = result[0];

    // Create payload for JWT
    const payload = {
      id: user.UserID,
      username: user.UserName,
    };
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
    // Find user //

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // ساعة واحدة من الآن

    db.query(
      "INSERT INTO Tokens(UserLoginId, token, ExpiresAt) VALUES (?, ?, ?)",
      [user.UserID, token, expiresAt],
      (err) => {
        if (err) {
          return res.status(500).json({ err: "Failed to insert token." });
        }
        // res.status(201).json({ message: "Token added successfully." });
        return res.status(201).json({ message: "Login successful", token });
      }
    );
  });
});

const authenticateJWT = (req, res, next) => {
  // Get auth header - The Authorization header is commonly used to send authentication tokens
  const authHeader = req.headers["x-access-token"];

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader;
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    // Attach user to request
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
// MIDDLEWARE FOR JWT VERIFICATION //

// Protected route
app.get("/profile", authenticateJWT, (req, res) => {
  res.json({ message: "Profile accessed", user: req.user });
});

// Logout route
app.post("/logout", (req, res) => {
  // Destroy session
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.json({ message: "Logout successful" });
  });
});

app.get("/database", (req, res) => {
  const sql = "SELECT * FROM Users"; // SQL query to select all items
  db.query(sql, (err, data) => {
    // Execute the SQL query
    if (err) return res.json(err); // If there's an error, return the error
    return res.json(data); // Otherwise, return the data as JSON
  });
});

app.patch("/users/:userToken", async (req, res, next) => {
  try {
    const {
      FirstNameInput,
      LastNameInput,
      PhoneNumberInput,
      CityInput,
      NationalityInput,
      GenderInput,
    } = req.body;

    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        return res.status(404).json({ message: `The ${key} is null` });
      }
    }

    const usersSQL =
      "UPDATE Users SET FirstName = ?, LastName = ?, PhoneNumber= ?, City= ?, Nationality= ?, Gender= ? WHERE UserID = ?"; // SQL query to select all items
    const sql = "SELECT *  FROM Tokens WHERE token = ?"; // SQL query to select all items
    const getData =
      "SELECT Email, PhoneNumber, FirstName, LastName, City, Nationality, Gender FROM Users  WHERE UserID = ?";

    db.query(sql, req.params.userToken, (err, data) => {
      if (err) {
        return next(err);
      }

      if (!data || data.length === 0)
        return res.status(404).json({ message: "User not found" });

      const userId = data[0].UserLoginId;

      db.query(
        usersSQL,
        [
          FirstNameInput,
          LastNameInput,
          PhoneNumberInput,
          CityInput,
          NationalityInput,
          GenderInput,
          userId,
        ],
        (err, data) => {
          if (err) {
            return next(err);
          }
        }
      );

      db.query(getData, [userId], (err, data) => {
        if (err) {
          return next(err);
        }
        return res.status(201).send({ message: data });
      });
    });
  } catch {
    next(error);
  }
});

app.post("/usersInformation", async (req, res, next) => {
  try {
    const { userToken } = req.body;
    const sql = "SELECT *  FROM Tokens WHERE token = ?"; // SQL query to select all items
    const getData =
      "SELECT UserID, Email, PhoneNumber, FirstName, LastName, City, Nationality, Gender FROM Users  WHERE UserID = ?";
    db.query(sql, userToken, (err, data) => {
      if (err) {
        console.error("Token lookup error:", err);
        return next(err);
      }

      if (!data || data.length === 0)
        return res.status(404).json({ message: "User not found" });

      const userId = data[0].UserLoginId;

      db.query(getData, [userId], (err, data) => {
        if (err) {
          console.error("Select user error:", err);
          return next(err);
        }
        return res.status(201).send(data);
      });
    });
  } catch {
    return next(error);
  }
});

app.post("/orders", async (req, res, next) => {
  try {
    const {
      ProductNameInput,
      OrderImageInput,
      ShippingMethodInput,
      PaymentMethodInput,
      OrderPriceInput,
      PriceAfterDiscountInput,
      TotalAmountInput,
      userToken,
    } = req.body;

    const sql =
      "INSERT INTO  Orders (UserOrderID, ProductName, OrderImage, ShippingMethod, PaymentMethod, OrderPrice, PriceAfterDiscount, TotalAmount)  VALUES (?, ?, ?, ?, ?, ?, ?, ?) ";

    const token = "SELECT *  FROM Tokens WHERE token = ?"; // SQL query to select all items

    db.query(token, userToken, (err, data) => {
      if (err) {
        return next(err);
      }

      if (!data || data.length === 0)
        return res.status(404).json({ message: "User not found" });

      const userId = data[0].UserLoginId;

      // return res.send(userId);

      db.query(
        sql,
        [
          userId,
          ProductNameInput,
          OrderImageInput,
          ShippingMethodInput,
          PaymentMethodInput,
          OrderPriceInput,
          PriceAfterDiscountInput,
          TotalAmountInput,
        ],
        (err, data) => {
          if (err) return next(err);

          return res.status(201).send("successful");
        }
      );
    });
  } catch {
    next(error);
  }
});

app.post("/customerOrders", async (req, res, next) => {
  try {
    const { userToken } = req.body;

    const token = "SELECT *  FROM Tokens WHERE token = ?"; // SQL query to select all items
    const sql =
      "SELECT ProductName, OrderImage, ShippingMethod, PaymentMethod, OrderPrice, TotalAmount, PriceAfterDiscount FROM Orders WHERE UserOrderID";

    db.query(token, userToken, (err, data) => {
      if (err) {
        return next(err);
      }

      if (!data || data.length == 0) {
        return res.status(404).send("User not found");
      }

      const userId = data[0].UserLoginId;

      // return res.status(201).send(userId);

      db.query(sql, userId, (err, data) => {
        if (err) {
          return next(err);
        }
        return res.status(201).send(data);
      });
    });
  } catch {
    next(error);
  }
});

// Middleware عام لمعالجة الأخطاء

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal server error", err });
});

app.listen(port || 3000, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
