import {rawData} from "../../utils/constants"

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(rawData), 1000);
  });
}
export async function manageData() {
  const data = await getData();
  let getDataByCategory = {};
  data.forEach((question) => {
    if (getDataByCategory.hasOwnProperty(question.category)) {
      getDataByCategory[question.category].push(question.name);
    } else {
      getDataByCategory[question.category] = [question.name];
    }
  });

  return getDataByCategory;
}
