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
    confirm_password:""
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
  return (
    <div className="App flex justify-center items-center h-screen  bg-[#9633ff]">
      <form onSubmit={handleSubmit} className="flex justify-center gap-6 flex-col rounded-lg border border-white px-16 py-5 bg-white w-[40%]">
        <h1 className="text-3xl text-center text-[#9633ff] m-4">FP</h1>
        <div className="flex justify-between w-full gap-4">
          <div className="flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
            <label htmlFor="first_name">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="text"
              placeholder="Your firstname"
              name="first_name"
              id="first_name"
              className="outline-none w-full "
            />
          </div>
          <div className="flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
            <label htmlFor="last_name">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="text"
              placeholder="Your lastname"
              name="last_name"
              id="last_name"
              className="outline-none w-full "
            />
          </div>
        </div>
        <div className="h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
          <label htmlFor="email">
            <BsPersonCircle size={18} color="#9633ff" />
          </label>
          <input
            type="text"
            placeholder="Enter email"
            id="email"
            name="email"
            className="outline-none w-full"
          />
        </div>

        <div className="h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
          <label htmlFor="phone_number">
            <BsPersonCircle size={18} color="#9633ff" />
          </label>
          <input
            type="number"
            placeholder="Phone number"
            id="phone_number"
            name="phone_number"
            className="outline-none w-full "
          />
        </div>
        <div className="h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
          <label htmlFor="password">
            <BsPersonCircle size={18} color="#9633ff" />
          </label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            className="outline-none w-full "
          />
        </div>
        <div className="h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
          <label htmlFor="confirm_password">
            <BsPersonCircle size={18} color="#9633ff" />
          </label>
          <input
            type="password"
            placeholder="Re-enter password"
            id="confirm_password"
            name="confirm_password"
            className="outline-none w-full "
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#9633ff] h-[54px] text-white rounded-lg outline-none"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default App;
