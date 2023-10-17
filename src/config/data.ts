import { Form } from "./types";

export const config: Form = {
  name: "test form",
  children: [
    {
      name: "name",
      label: "name",
      input: {
        inputType: "text",
      },
    },
    {
      name: "sex",
      label: "sex",
      input: {
        inputType: "select",
        dataSourceId: "sexList",
      },
    },
    {
      name: "groupId",
      label: "group",
      input: {
        inputType: "select",
        dataSourceId: "groupId",
      },
    },
  ],
};

export const dataSourceList: Array<DataSource> = [
  {
    id: "sexList",
    type: "static",
    data: [
      { label: "male", value: 1 },
      { label: "female", value: 2 },
    ],
  },
  {
    id: "groupList",
    type: "dynamic",
    url: "getGroupList",
    labelFrom: "name",
    valueFrom: "id",
  },
];
