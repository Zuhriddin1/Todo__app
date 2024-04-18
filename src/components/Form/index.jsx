import { useDispatch } from "react-redux";
import plus from "../../assets/Plus.svg";
import { useRef } from "react";
function Form() {
  const nameRef = useRef(null);
  const dispath = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    if (nameRef.current.value.length > 3) {
      const todo = {
        id: Date.now(),
        name: nameRef.current.value,
        status: true,
      };
      dispath({ type: "TODO_ADD", payload: todo });
      nameRef.current.value = null;
    }
  }
  return (
    <div className="flex items-center gap justify-between mb-[59px]">
      <input
        type="text"
        ref={nameRef}
        placeholder="Add a new task"
        className="w-[381px] p-[9px] bg-transparent border text-white rounded-lg focus:outline-nones border-[#3E1671]"
      />
      <button
        onClick={handleClick}
        className="w-[40px] bg-[#9E78CF] rounded-lg p-[9px]"
      >
        <img src={plus} alt="" width={22} className="text-white" height={22} />
      </button>
    </div>
  );
}
export default Form;
