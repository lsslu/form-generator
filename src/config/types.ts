export interface Form {
  name: string;
  children: Array<Field>;
}

export interface Field {
  name: string;
  label: string;
  defaultValue: any;
  children?: Array<Field>;
  input?: Input;
}

export interface Input {
  inputType: string;
  dataSource?: DataSource;
}

interface Option {
  label: string;
  value: any;
}

export interface DataSource {
  type: "static" | "dynamic";
  data: Array<Option>;
  url: string;
  labelFrom: string;
  valueFrom: string;
}
