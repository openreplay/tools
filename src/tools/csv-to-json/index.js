import Papa from "papaparse";

export function csvToJson(csvString) {
  return new Promise((resolve, reject) => {
    Papa.parse(csvString, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error.message),
    });
  });
}
