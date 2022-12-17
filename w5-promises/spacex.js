const { readdir, readFile } = require("fs/promises");

const readlinePromise = require("./utils/readline-promise");

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readdir("./spacex")
  .then((files) => {
    console.log("Welcome to Labbers file retrievals systems!\n");

    const listOfFiles = files
      .map((file, index) => `${index + 1}. ${file.split(".")[0]}`)
      .join("\n");

    console.log(listOfFiles);

    return rlp.question("Please type the name of the rocket:");
  })
  .then((chosenRocket) => {
    console.log(`You have chosen ${chosenRocket}`);

    const fileToRead = `./spacex/${chosenRocket}.json`;

    return readFile(fileToRead, { encoding: "utf8" });
  })
  .then((fileContent) => {
    console.log("========= description ========");

    const fileContentObj = JSON.parse(fileContent);

    console.log(fileContentObj.description);
  })
  .catch(() => {
    console.log("Please select valid option and try again!");
  })
  .finally(() => {
    rlp.close();
  });
