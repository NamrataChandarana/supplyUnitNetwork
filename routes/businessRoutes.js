import express from "express";
import { requireSignIn } from "./../middlewares/authMiddleware.js";
import { businesscategory, deleteBusinessAcc, getAllUser, getBusinessProfile, updateBusinessProfile } from "./../controllers/businessController.js";
import { userRegister } from "./../controllers/businessController.js";
import { getbusiness } from "./../controllers/businessController.js";

const router = express.Router();

router.post("/new", requireSignIn, userRegister);
router.get("/business-category", businesscategory);
router.get("/business-categories/:slug", getbusiness);
router.get("/allusers", getAllUser);
router.delete("/delete-businessAcc/:pId", deleteBusinessAcc);
router.post("/getBusinessProfile", getBusinessProfile);
router.put("/updateBusinessProfile", updateBusinessProfile);

export default router;
