import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/feature/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="flex flex-col justify-center rounded gap-3"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div>
          <label htmlFor="description">Discription</label>
          <input
            className="flex flex-col justify-center rounded gap-3"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div>
          <label htmlFor="status">Assigned To</label>
          <select className="w-full" id="status" {...register("status")}>
            <option defaultValue value="pending">
              Pending
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="assignedTo">Assigned To</label>
          <select
            className="w-full"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option defaultValue value="mir">
              Mir
            </option>
            <option value="rahim">Rahim</option>
            <option value="karim">Karim</option>
          </select>
        </div>
        <div>
          <label htmlFor="title">Priority</label>
          <select className="w-full" id="priority" {...register("priority")}>
            <option defaultValue value="high">
              high
            </option>
            <option value="medium">medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button
          onClick={() => onCancel()}
          className="bg-red-600 text-white px-5 py-2 mt-2 rounded "
          type="button"
        >
          Cancel
        </button>
        <button
          className="bg-slate-600 text-white px-5 py-2 mt-2 rounded "
          type="submit"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
