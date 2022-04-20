import {rawData} from "../../utils/constants"

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(rawData), 1000);
  });
}
async function getDataByCategory() {
  const data = await getData();
  let category = {};
  if (category.hasOwnProperty(data.category)) {
  }
}
getDataByCategory();
