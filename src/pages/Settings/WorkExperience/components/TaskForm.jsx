import { Controller, useForm } from "react-hook-form";
import style from "./TaskForm.module.css";
import flag from "/src/assets/icons/flag.svg";
import { forwardRef, useEffect } from "react";
import closeX from "/src/assets/icons/close.svg";
import DatePicker from "react-datepicker";
import calendar from "/src/assets/icons/calendar.svg";
import search from "/src/assets/icons/discover.svg";
import useStore from "/src/store.js";

// eslint-disable-next-line react/display-name
const TaskForm = forwardRef(({ exp }, ref) => {
  const store = useStore();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    values: exp,
  });
  const onSubmit = (data) => {
    store.addExp(data);
    ref.current.close();
    reset();
  };
  const onCancel = () => {
    reset();
    ref.current.close();
  };

  useEffect(() => {
    function onClose() {
      reset();
    }
    const refTemp = ref.current;
    refTemp.addEventListener("close", onClose);

    return () => {
      refTemp.removeEventListener("close", onClose);
    };
  }, []);

  return (
    <dialog className={style.dialog} ref={ref}>
      <div className={style.container}>
        <header>
          <div className={style.top}>
            <div>
              <img src={flag} alt="Flag" />
            </div>
            <button title="Close" onClick={onCancel}>
              <img src={closeX} alt="" />
            </button>
          </div>
          <div className={style.title}>
            <h2>Add Experience</h2>
            <p>Share where you’ve worked on your profile.</p>
          </div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <label>
            <legend>Position*</legend>
            <div className={style.textInput}>
              <input
                placeholder="What is your title?"
                {...register("position", { required: true })}
                type="text"
              />
            </div>

            {errors.position?.type === "required" && (
              <p className="text-red" role="alert">
                First name is required
              </p>
            )}
          </label>
          <label>
            <legend>Company Name*</legend>
            <div className={style.textInput}>
              <img src={search} alt="" />
              <input
                placeholder="Search for company"
                {...register("company", { required: true })}
                type="search"
              />
            </div>
            {errors.company?.type === "required" && (
              <p className="text-red" role="alert">
                Company Name is required
              </p>
            )}
          </label>
          <div className={style.formMiddleGroup}>
            <label>
              <legend>Start Date*</legend>
              <div className={style.calendar}>
                <img src={calendar} width={"20px"} height={"20px"} alt="" />
                <Controller
                  name="startDate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)} // update the value when the user selects a date
                      dateFormat="MMM yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      className={style.datePicker}
                      placeholderText="Select Date"
                    />
                  )}
                />
              </div>
              {errors.startDate?.type === "required" && (
                <p className="text-red" role="alert">
                  Start date is required
                </p>
              )}
            </label>
            <label>
              <legend>Start Date*</legend>
              <div className={style.calendar}>
                <img src={calendar} width={"20px"} height={"20px"} alt="" />

                <Controller
                  name="endDate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)} // update the value when the user selects a date
                      dateFormat="MMM yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      placeholderText="Select Date"
                      className={style.datePicker}
                    />
                  )}
                />
              </div>
              {errors.endDate?.type === "required" && (
                <p className="text-red" role="alert">
                  End date is required
                </p>
              )}
            </label>
            <label>
              <legend>Employment Type*</legend>
              <select {...register("employmentType", { required: true })}>
                <option value="full time">Full Time</option>
                <option value="remote">Remote</option>
                <option value="part time">Part Time</option>
              </select>
            </label>
          </div>
          <label className={style.checkbox}>
            <input {...register("current")} type="checkbox" />{" "}
            <legend>This is my current work company</legend>
          </label>
          <label className={style.textarea}>
            <legend>Key responsibilities*</legend>
            <textarea
              placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
              {...register("keyResponsibilities", { required: true })}
            ></textarea>

            {errors.keyResponsibilities?.type === "required" && (
              <p className="text-red" role="alert">
                Key responsibilities is required
              </p>
            )}
          </label>
          <div className={style.actions}>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Add Experience</button>
          </div>
        </form>
      </div>
    </dialog>
  );
});

export default TaskForm;
