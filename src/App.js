import { BsPersonCircle } from "react-icons/bs";
import { useFormik } from "formik";
import { formSchema } from "./schemas";

function App() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  };
  const onSubmit = async (payload, actions) => {
    console.log(payload);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit,
  });
  // .no-arrows {
  //   -moz-appearance: textfield; /* Firefox */
  // }

  // .no-arrows::-webkit-outer-spin-button,
  // .no-arrows::-webkit-inner-spin-button {
  //   -webkit-appearance: none;
  //   margin: 0;
  // }

  return (
    <div className="App flex justify-center items-center h-screen bg-[#9633ff]">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-6 flex-col rounded-lg border border-white px-16 py-5 bg-white w-[40%]"
      >
        <h1 className="text-3xl text-center text-[#9633ff] ">FP</h1>
        <div className="flex justify-between w-full gap-4">
          <div className="w-full flex items-end justify-end flex-col">
            <div
              className={`h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md ${
                errors.first_name && touched.first_name
                  ? "border border-red-500"
                  : ""
              }`}
            >
              <label htmlFor="first_name">
                <BsPersonCircle size={18} color="#9633ff" />
              </label>
              <input
                type="text"
                placeholder="Your firstname"
                name="first_name"
                id="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="outline-none w-full "
              />
            </div>
            {errors.first_name && touched.first_name && (
              <p className="text-red-500 text-right text-sm font-medium">
                {errors.first_name}
              </p>
            )}
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <div
              className={`h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md ${
                errors.last_name && touched.last_name
                  ? "border border-red-500"
                  : ""
              }
`}
            >
              <label htmlFor="last_name">
                <BsPersonCircle size={18} color="#9633ff" />
              </label>
              <input
                type="text"
                placeholder="Your lastname"
                name="last_name"
                id="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="outline-none w-full "
              />
            </div>
            {errors.last_name && touched.last_name && (
              <p className="text-red-500 text-right text-sm font-medium">
                {errors.last_name}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex items-end justify-end flex-col">
          <div
            className={`h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md ${
              errors.email && touched.email ? "border border-red-500" : ""
            }`}
          >
            <label htmlFor="email">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="text"
              placeholder="Enter email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none w-full"
            />
          </div>
          {errors.email && touched.email && (
            <p className="text-red-500 text-right text-sm font-medium">
              {errors.email}
            </p>
          )}
        </div>
        <div className="w-full flex items-end justify-end flex-col">
          <div
            className={`h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md ${
              errors.phone_number && touched.phone_number
                ? "border border-red-500"
                : ""
            }`}
          >
            <label htmlFor="phone_number">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="number"
              placeholder="Phone number"
              id="phone_number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none w-full appearance-none"
            />
          </div>
          {errors.phone_number && touched.phone_number && (
            <p className="text-red-500 text-right text-sm font-medium">
              {errors.phone_number}
            </p>
          )}
        </div>
        <div className="w-full flex items-end justify-end flex-col">
          <div
            className={`h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md ${
              errors.password && touched.password ? "border border-red-500" : ""
            }`}
          >
            <label htmlFor="password">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none w-full "
            />
          </div>
          {errors.password && touched.password && (
            <p className="text-red-500 text-right text-sm font-medium">
              {errors.password}
            </p>
          )}
        </div>
        <div className="w-full flex items-end justify-end flex-col">
          <div
            className={`h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md ${
              errors.confirm_password && touched.confirm_password
                ? "border border-red-500"
                : ""
            }`}
          >
            <label htmlFor="confirm_password">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              id="confirm_password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="outline-none w-full "
            />
          </div>
          {errors.confirm_password && touched.confirm_password && (
            <p className="text-red-500 text-right text-sm font-medium">
              {errors.confirm_password}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="disabled:opacity-75 disabled:cursor-not-allowed w-full bg-[#9633ff] h-[54px] text-white rounded-lg outline-none"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default App;
