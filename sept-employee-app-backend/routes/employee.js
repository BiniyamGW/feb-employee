const router = require("express").Router();
const Employee = require("../model/employee");

//get, post, put, delete
//RESTApi standard we can't use verbs to name our endpoints (nouns)

// const obj = {} object literal
// const obj = new Obj({name: "", occupation: ""})
/* ADD AN EMPLOYEE INFO */
router.post("/employee", async (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    occupation: req.body.occupation,
    imageUrl: req.body.imageUrl,
    callMobile: req.body.callMobile,
    callOffice: req.body.callOffice,
    sms: req.body.sms,
    email: req.body.email,
  });

  try {
    const savedEmployeeData = await newEmployee.save();
    res.status(200).json(savedEmployeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL EMPLOYEES*/
router.get("/employees", async (req, res) => {
  try {
    const getAllEmployees = await Employee.find({});
    res.status(200).json(getAllEmployees);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
