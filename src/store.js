import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {
        firstName: "sayyad",
        lastName: "alizada",
        email: "alizade_bg@gmail.com",
        profilePic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKj1MhcloRD2yHqAfm4S_6U-1PA8J_QBB2g&s",
        experience: [
          {
            position: "lead product designer",
            company: "kapital bank",
            employmentType: "full time",
            startDate: "2020-09",
            endDate: null,
            current: true,
            keyResponsibilties: "",
            id: Math.floor(Math.random() * 100000),
          },
          {
            position: "lead product designer",
            company: "kapital bank",
            employmentType: "full time",
            startDate: "2020-09",
            endDate: "2022-11",
            current: false,
            keyResponsibilties: "",
            id: Math.floor(Math.random() * 100000),
          },
        ],
      },
      addExp: (exp) =>
        set((state) => {
          exp.id = Math.floor(Math.random() * 100000);
          return {
            user: {
              ...state.user,
              experience: [...state.user.experience, exp],
            },
          };
        }),
      removeExp: (id) =>
        set((state) => {
          console.log(id);
          let tempExp = state.user.experience.filter((exp) => id !== exp.id);
          return { user: { ...state.user, experience: tempExp } };
        }),
      modifyExp: (exp) =>
        set((state) => {
          let tempExp = state.experience.filter(
            (experience) => exp.id !== experience.id
          );
          return { user: { ...state.user, experience: tempExp } };
        }),
    }),
    {
      name: "_experience",
    }
  )
);

export default useStore;
