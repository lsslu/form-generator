import { DataSource, Option, Form, Field } from "../config/types";
import request from "../utils/request";

interface DataSourceMap {
  [key: string]: Array<Option>;
}

interface FormStateMap {
  [key: string]: any;
}

export async function initialDataSource(
  config: Array<DataSource>,
): Promise<DataSourceMap> {
  const dataSource: DataSourceMap = {};
  for (const c of config) {
    if (c.type === "static") {
      dataSource[c.id] = c.data ?? [];
      continue;
    }
    if (c.type === "dynamic") {
      const responseData = await request(c.url ?? "");
      dataSource[c.id] = responseData.map((d: any) => ({
        label: d[c.labelFrom ?? ""],
        value: d[c.valueFrom ?? ""],
      }));
      continue;
    }
  }

  return dataSource;
}

function generateStates(config: Array<Field>): any {
  const result: FormStateMap = {};

  for (const c of config) {
    if (Object.prototype.hasOwnProperty.call(c, "children")) {
      result[c.name] = generateStates(c.children ?? []);
    } else {
      result[c.name] = Object.prototype.hasOwnProperty.call(c, "defaultValue")
        ? c.defaultValue
        : null;
    }
  }
}

export function initialFormState(config: Form): any {
  const result = {
    name: config.name,
    children: generateStates(config.children),
  };

  return result;
}
