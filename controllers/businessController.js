import { register } from "../models/registration.js";
import businessCategory from "../models/businessCategory.js";
import bycrypt from "bcryptjs";
import userModel from "../models/userModel.js";
// import UserMenu from "../client/src/components/Layout/UserMenu.js";
// import slugify from "slugify";

export const userRegister = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      companyname,
      phoneNo,
      username,
      password,
      category,
      city,
      state,
      address,
      email,
      website,
    } = req.body;

    let user = await register.findOne({ email });

    if (user) {
      res.send({
        success: false,
        message: "User already exits",
      });
      return;
    }

    let checkNum = await register.findOne({ phoneNo });

    if (checkNum) {
      res.send({
        success: false,
        message: "User already exits",
      });
      return;
    }
    
    let checkUser = await userModel.findOne({email})

    if(!checkUser){
      res.send({
        success : false ,
        message: "Register Through your Acoount Email"
        
      })
      return;
    }

    const hashpwd = await bycrypt.hash(password, 10);

    user = await register.create({
      firstname,
      lastname,
      companyname,
      phoneNo,
      username,
      password: hashpwd,
      category,
      city,
      state,
      address,
      email,
      website,
    });
    console.log(user);

    try{
      console.log(email)
      const isRegister =  await userModel.findOneAndUpdate({email},{ isRegister: true})
    }catch (error) {
      console.error("Error updating user:", error);
  }
    
    // console.log(isRegister)

    res.status(200).json({
      success: true,
      message: "Register Successfully!",
      user,
    });

    
  } catch (error) {
    res.send(error.message).status(500);
  }

  // sendcookie(user, res, 201, "Register successfully");
};

//get business category
export const businesscategory = async (req, res) => {
  try {
    const category = await businessCategory.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

export const getbusiness = async (req, res) => {
  try {
    const category = await businessCategory.findOne({ slug: req.params.slug });
    const data = category.name;
    console.log(data);
    const regex = new RegExp(data, "i");
    console.log(regex);
    const products = await register.find({ category: regex });

    console.log(products);
    res.status(200).send({
      success: true,
      category,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error While Getting products",
    });
  }
};

export const getAllUser = async (req, res, next) => {
  const users = await register.find();

  res.status(200).json({
    success: true,
    users,
  });
};

export const deleteBusinessAcc = async (req, res, next) => {
  const user = await register.findById(req.params.pId);
  console.log(req.params.pId);
  console.log(user);

  if (!user){
    res.send({
      success: false,
      message: "User doesn't exits",
    });
    return;
   }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
};

export const getBusinessProfile = async(req, res) => {
  console.log(req.body)
  try{
    const {email} = req.body;
    console.log({email});

    const user = await  register.findOne({email});
    // console.log(user);

    res.status(200).json({
      success: true,
      message: "Get User Info Successfuly!",
      user
    })
  }catch(error){
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Failed to Get User Info!'
    })
  }
}

//update profile
export const updateBusinessProfile = async (req, res, next) => {
  console.log(req.body)
  const newUserData = {
    firstname: req.body.name,
    companyname: req.body.companyname,
    username: req.body.username,
    phoneNo: req.body.phoneNo,
    address: req.body.address,
  };

  const {email} = req.body;
  console.log({email})
  const user = await register.findOneAndUpdate({email}, newUserData);

  res.status(200).json({
    success: true,
    message: "updated Successfully",
    user,
  });
};