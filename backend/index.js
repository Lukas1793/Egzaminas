const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

const RegistereModel = require('./models/Register');

dotenv.config();

// midlewares
app.use(express.json());
app.use(cors());

// DATABASE connection
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('Database connected...')
);
// Routes
// CREATE

app.post('/insert', async (req, res) => {
  const fullName = req.body.fullName;
  const userEmail = req.body.userEmail;
  const userAge = req.body.userAge;

  const register = new RegistereModel({
    fullName: fullName,
    userEmail: userEmail,
    userAge: userAge,
  });

  try {
    await register.save();
    res.send('inserted data');
  } catch (err) {
    console.log(err);
  }
});

// READ

app.get('/read', async (req, res) => {
  RegistereModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

// UPDATE

app.put('/update', async (req, res) => {
  const newFullName = req.body.newFullName;
  const id = req.body.id;

  try {
    await RegistereModel.findById(id, (err, updatedFullName) => {
      updatedFullName.fullName = newFullName;

      updatedFullName.save();

      res.send('update');
    });
  } catch (err) {
    console.log(err);
  }
});

// DELETE

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  await RegistereModel.findByIdAndRemove(id).exec();
  res.send('deleted');
});

// starting server
app.listen(process.env.PORT, () =>
  console.log(`server is running on port: ${process.env.PORT}`)
);
