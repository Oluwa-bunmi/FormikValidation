import * as yup from "yup";
export const formSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  phone_number: yup
    .number()
    .required("Please enter a number")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(11, "Invalid Phone Number"),

  email: yup.string().email("Invalid email").required("Required"),
  // phone_number: yup
  //   .number()
  //   .positive()
  //   .integer()
  //   .min(11, "Invalid Phone Number"),
  // what of address and city, select and radio
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
