// Check version of app and icrease it

import fs from "fs";
import packageJson from "../package.json";

const currentVersion = packageJson.version;

const [previousMajor, previousMinor, previousPatch] = currentVersion.split(".");

let major= parseInt(previousMajor);
let minor = parseInt(previousMinor);
let patch = parseInt(previousPatch);

let newVersion = "";

patch++;

if (patch > 9) {
    patch = 0;
    minor++;
}

if (minor > 9) {
    minor = 0;
    major++;
}

newVersion = `${major}.${minor}.${patch}`;

if (newVersion !== currentVersion) {
    packageJson.version = newVersion;
    fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
    console.log(`Version updated to ${newVersion}`);
} else {
    console.log("No version update required");
}