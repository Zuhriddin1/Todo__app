import check from "../../assets/Vector.svg";
import trash from "../../assets/TrashSimple.svg";
import roolback from "../../assets/Rebost.svg";
function TodoItem(props) {
  const { title, status } = props;
  return (
    <div className="flex items-center bg-[#15101C] p-[22px] mb-4 rounded-lg justify-between">
      <p
        className={`${
          status ? "text-[#9E78CF]" : "text-[#78CFB0] line-through"
        }`}
      >
        {title}
      </p>
      <div className="flex items-center justify-between gap-3">
        {status && (
          <>
            <span className="cursor-pointer">
              <img src={check} alt="" width={30} height={30} />
            </span>
            <span className="cursor-pointer">
              <img src={trash} alt="" width={30} height={30} />
            </span>
          </>
        )}
        {!status && (
          <>
            <span className="cursor-pointer">
              <img src={roolback} alt="" width={30} height={30} />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
