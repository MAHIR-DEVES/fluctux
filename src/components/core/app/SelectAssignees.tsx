"use client";
import React, { useState } from "react";

interface AssigneesType {
  value: string;
  label: string;
  image: string;
  checked?: boolean;
}

const allAssigns: AssigneesType[] = [
  {
    value: "halima-khatun",
    label: "Ni Mahin Org's",
    image:
      "https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960358-stock-illustration-letter-m-logo-icon-design.jpg",
  },
  {
    value: "mehena-khatun",
    label: "M Org's",
    image:
      "https://i.pinimg.com/474x/b6/74/f5/b674f5c59532b8f0e6efeb17bf6f75bc.jpg",
  },
];

export default function SelectAssignees() {
  const [checkedUser, setCheckedUser] = useState<AssigneesType[]>([]);

  const assineChecked = (sUser: AssigneesType) => {
    if (sUser.checked === true) {
      setCheckedUser([...checkedUser, sUser]);
      return;
    }
    setCheckedUser(checkedUser.filter((user) => user.value != sUser.value));
  };

  return (
    <div className="fx-secondary-bg border fx-border-color absolute z-10 h-[300px]">
      {allAssigns.map((assign, i) => {
        return (
          <>
            <label
              htmlFor={`assignees-${assign.value}`}
              className={`fx-flex-center border fx-border-color rounded-[50px] ${checkedUser.some((user) => user.value === assign.value) ? 'bg-white' : ''}`}
              key={i}
            >
              <img
                src={assign.image ?? ""}
                alt=""
                className="w-[30px] h-[30px] rounded-[50%]"
              />
              <p>{assign.label}</p>
            </label>
            <input
              type="checkbox"
              id={`assignees-${assign.value}`}
              onChange={(e) => {
                assineChecked({
                  value: assign.value,
                  label: assign.label,
                  image: assign.image,
                  checked: e.target.checked,
                });
              }}
            />
          </>
        );
      })}

      {checkedUser.map((user, i) => {
        return (
          <>
            <button key={i}>
              <p>{user.label}</p>
              <p>{user.value}</p>
              <p>{user.checked}</p>
            </button>
          </>
        );
      })}
    </div>
  );
}
