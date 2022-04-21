
function getData(questions) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(questions), 1000);
  });
}
export async function manageData(rawData) {
  const data = await getData(rawData);
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
