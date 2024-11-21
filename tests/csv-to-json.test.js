import { csvToJson } from "../src/tools/csv-to-json/index.js";

describe("CSV to JSON Conversion", () => {
  test("should convert a simple CSV string to JSON", async () => {
    const csvData = `name,age,city
Alice,30,New York
Bob,25,Los Angeles`;

    const json = await csvToJson(csvData);

    console.log("CSV Input:", csvData);
    console.log("Converted JSON:", json);

    expect(json).toEqual([
      { name: "Alice", age: "30", city: "New York" },
      { name: "Bob", age: "25", city: "Los Angeles" },
    ]);
  });

  test("should handle empty CSV input", async () => {
    const csvData = "";

    const json = await csvToJson(csvData);

    console.log("Empty CSV Input:", csvData);
    console.log("Output JSON:", json);

    expect(json).toEqual([]);
  });
});
