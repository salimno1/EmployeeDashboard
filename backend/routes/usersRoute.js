const router = require("express").Router();
const Employee = require("../models/employee");

//CREATE
router.post("/", async (req, res) => {
  const newEmployee = new Employee(req.body);
  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee.name === req.body.name) {
      try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedEmployee);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your employee");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    await employee.delete();
    res.status(200).json("employee has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GETALL
router.get("/", async (req, res) => {
  try {
    let employees;

    employees = await Employee.find();

    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
