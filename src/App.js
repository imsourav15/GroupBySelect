import React, { useState } from "react";
import Select from "react-select";
import './App.css';


// Adding Different Groups of doctor's let's suppose seegerated on the basis of Area, State or Locality.
const group1Options = [
  {
    label: "Dr. Varun Sharma",
    value: "Noida Sector 52"
  },
  {
    label: "Dr. Kartik Modi",
    value: "Hauz Khas"
  },
  {
    label: "Dr. Shruti Gupta",
    value: "Greater Kailash"
  }
];

const group2Options = [
  {
    label: "Dr. Sourav Suman",
    value: "Gurgaon"
  },
  {
    label: "Dr. Ravi Bishnoi",
    value: "Ghitorni"
  },
  {
    label: "Dr. Kritika Sharma",
    value: "Iffco Chowk"
  }
];

// The Function which is used to create doctor's group, basis on whatever  criteriaon's.

const createDoctorsGroup = (groupName, options) => {
  return {
    label: groupName,
    options: options
  };
};

export default function App() {

    // Using React Hook's USeStae which allows us to have state variables in functional components.
  const [value, setValue] = useState([]);
  const options = [
    createDoctorsGroup("---DOCTOR's GROUP 1---", group1Options),
    createDoctorsGroup("---DOCTOR's GROUP 2---", group2Options)
  ];


  // The feature flag should be called groupSelectAll

  const groupSelectAll = (groupOptions) => {
    setValue((selectedOptions) => [
      ...selectedOptions,
      ...groupOptions.filter(
        (grpOpt) => !selectedOptions.some((opt) => opt.value === grpOpt.value)
      )
    ]);
  };


// The Return function where class APP is getting called.
  return (
    <div className="App">
      <h1>Bonjour Doctor's!</h1>
      <Select
        onChange={(selectedOptions) => {
          console.log(selectedOptions);
          setValue(selectedOptions);
        }}
        // This is made false when you select it doesn't closes by default.
        closeMenuOnSelect={false}
        isMulti
        menuIsOpen={true}
        options={options}
        value={value}
        components={{
          GroupHeading: ({ innerProps, children }) => (
            <div
              {...innerProps}
              onClick={() => groupSelectAll(children.props.options)}
            >
              {children}
            </div>
          )
        }}
      />
    </div>
  );
}
