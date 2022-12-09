const router = require("express").Router();
const userCtrl = require("../controllers/users.controller");
/* GET users listing. */
router.post("/create-user", userCtrl.createUser);
router.post("/sign-in", userCtrl.signIn);
router.post("/admin-signin", userCtrl.adminSignIn);
router.get("/not-department", userCtrl.showUserNotDepartment);
router.post("/price", userCtrl.getPricebyId);
router.get("/all-user", userCtrl.allUser);
router.get("/admin-get-user", userCtrl.getUserNotAdmin);
router.post("/add-point", userCtrl.addPoint);
router.post("/decrement-point", userCtrl.decrementPoint);
router.post("/:id", userCtrl.updateUser);
router.get("/:id", userCtrl.showUserById);
router.get("/search/:q", userCtrl.searchByEmail);
router.delete("/:id", userCtrl.removeUser);
router.put("/update-department/:idPerson", userCtrl.addUserDepartment);

// show  user belong to department

router.get(
  "/belong-to-department/:departmentId",
  userCtrl.showUserBelongToDepartment
);
router.delete(
  "/remove-user-department/:deleteId",
  userCtrl.removeUserBelongToDepartment
);

// search data
// :q is text
router.get(
  "/search-has-department/:departmentId/:q",
  userCtrl.searchEmailHasDepartment
);
router.get(
  "/search-has-not-department/:q",
  userCtrl.searchEmailHasNotDepartment
);
module.exports = router;
