import { BsPersonCircle } from "react-icons/bs";
function App() {
  return (
    <div className="App flex justify-center items-center h-screen  bg-[#9633ff]">
      <form className="flex justify-center gap-6 flex-col rounded-lg border border-white px-16 py-5 bg-white w-[40%]">
        <h1 className="text-3xl text-center text-[#9633ff] m-4">FP</h1>
        <div className="flex justify-between w-full gap-4">
          <div className="flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
            <label htmlFor="first_name">
              <BsPersonCircle size={18} color="#9633ff" />
            </label>
            <input
              type="text"
              placeholder="Your firstname"
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
            className="outline-none w-full"
          />
        </div>

        <div className="h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
          <label htmlFor="password">
            <BsPersonCircle size={18} color="#9633ff" />
          </label>
          <input
            type="number"
            placeholder="Phone number"
            id="phone_number"
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
            className="outline-none w-full "
          />
        </div>
        <div className="h-[54px] flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-md">
          <label htmlFor="password">
            <BsPersonCircle size={18} color="#9633ff" />
          </label>
          <input
            type="password"
            placeholder="Re-enter password"
            id="password"
            className="outline-none w-full "
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#9633ff] h-[54px] text-white rounded-lg outline-none"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default App;
