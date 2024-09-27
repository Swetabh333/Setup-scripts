#!/home/swetabhshreyam/.nvm/versions/node/v21.0.0/bin/node

import chalk from "chalk";
import { retro } from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { execa } from "execa";

let helloStr: string = "Starting new project . . .";

figlet(helloStr, (err, data) => {
  if (err) {
    console.log("Something went wrong");
  } else {
    if (data) {
      let fin: string | undefined = retro(data);
      console.log(fin);
    }
  }
});

let langArray = [
  chalk.red("Rust"),
  chalk.cyan("C"),
  chalk.white("Bun"),
  chalk.blue("C++"),
  chalk.yellow("Python"),
  chalk.red("Java"),
  chalk.cyan("Go"),
  chalk.magenta("Vite"),
];

const inquire = async () => {
  let lang = await inquirer.prompt([
    {
      name: "lang",
      message: "Choose your programming language...",
      type: "list",
      choices: [...langArray],
    },
  ]);
  return lang.lang;
};

const filename = async () => {
  let file = await inquirer.prompt([
    {
      name: "filename",
      message: "Enter the name of your file...",
      type: "input",
    },
  ]);
  return file.filename;
};

const setProject = async (filename: string, language: string) => {
  try {
    switch (language) {
      case chalk.red("Rust"):
        execa(
          "sh",
          ["/home/swetabhshreyam/bin/executer.sh", "Rust", filename],
          {
            stdio: "inherit",
            shell: true,
          },
        );
        return 0;

      case chalk.cyan("C"):
        execa("sh", ["/home/swetabhshreyam/bin/executer.sh", "C", filename], {
          stdio: "inherit",
          shell: true,
        });
        return 0;
      case chalk.blue("C++"):
        execa("sh", ["/home/swetabhshreyam/bin/executer.sh", "C++", filename], {
          stdio: "inherit",
          shell: true,
        });
        return 0;
      case chalk.white("Bun"):
        execa("sh", ["/home/swetabhshreyam/bin/executer.sh", "Bun", filename], {
          stdio: "inherit",
          shell: true,
        });
        return 0;

      case chalk.cyan("Go"):
        execa("sh", ["/home/swetabhshreyam/bin/executer.sh", "Go", filename], {
          stdio: "inherit",
          shell: true,
        });
        return 0;

      case chalk.yellow("Python"):
        execa(
          "sh",
          ["/home/swetabhshreyam/bin/executer.sh", "Python", filename],
          {
            stdio: "inherit",
            shell: true,
          },
        );

        return 0;
      case chalk.red("Java"):
        execa(
          "sh",
          ["/home/swetabhshreyam/bin/executer.sh", "Java", filename],
          {
            stdio: "inherit",
            shell: true,
          },
        );
        return 0;
      default:
        return 1;
    }
  } catch (err) {
    console.log(err);
    return 1;
  }
};

const setViteProject = async () => {
  try {
    const { stdout } = await execa(
      "sh",
      ["/home/swetabhshreyam/bin/executer.sh", "Vite"],
      {
        stdio: "inherit",
        shell: true,
      },
    );

    return 0;
  } catch (err) {
    console.log(err);
    return 1;
  }
};

let languageSelected: string = await inquire();

if (languageSelected !== chalk.magenta("Vite")) {
  let fileName: string = await filename();
  const spinner = createSpinner("Setting up project...").start({
    color: "yellow",
  });
  const proj = await setProject(fileName, languageSelected);
  if (proj === 0) {
    spinner.success({
      text: `Your ${languageSelected} project has been set up successfully.`,
    });
    //process.exit(0);
  } else {
    spinner.error({ text: "Some error occured!", mark: ":(" });
    process.exit(1);
  }
} else {
  const proj = await setViteProject();

  const spinner = createSpinner("Setting up project...").start({
    color: "yellow",
  });
  if (proj === 0) {
    spinner.success({
      text: `Your ${languageSelected} project has been set up successfully.`,
    });
  } else {
    spinner.error({ text: "Some error occured!", mark: ":(" });
  }
}

//this doesnot work cause we await the code to exexcute and give a status code hence there is nothing on stdout to show
