import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x2F24E853E2d1b75A793647dc05439D45Fc8c9350");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Moments",
        description: "This NFT will give you access to TapriDAO!",
        image: readFileSync("scripts/assets/tapri.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();