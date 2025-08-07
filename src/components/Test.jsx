import { takeCoverage } from "v8";

const testObject = {
  string: "string",
  number: 555,
  boolean: true,
  array: [1, 3],
  object: { name: "biswa", age: 40 },
  BigInt: BigInt(848485958473933),
};

const Test = (key, obj) => {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else if (obj.Object.hasOwnProperty(key)) {
    return obj.Object[key];
  }
};

const output = Test(object.age, testObject);

console.log(output);
