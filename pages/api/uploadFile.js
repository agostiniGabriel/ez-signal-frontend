import fs from "fs";
import { formidable } from "formidable";
const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");

const account = "ezsignalstorage";
const defaultAzureCredential = new DefaultAzureCredential();

const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  defaultAzureCredential
);

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = formidable();
  form.parse(req, async function (_err, fields, files) {
    const hasError = await saveFile(files.file[0], fields);
    return res.status(hasError ? 500 : 201).send(fields.id[0]);
  });
};

const saveFile = async (file, props) => {
  let containerClient =
    blobServiceClient.getContainerClient("ez-signal-blob-dev");
  let blob = containerClient.getBlockBlobClient(props.id[0]);
  let maxConcurrency = 20;
  let blockSize = 4 * 1024 * 1024;
  let hasError = false;
  await blob
    .uploadStream(
      fs.createReadStream(file.filepath, {
        highWaterMark: blockSize,
      }),
      blockSize,
      maxConcurrency
    )
    .catch((_error) => (hasError = true));
  return hasError;
};

export const api = (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : res.status(405).send(`${req.method} Method not allowed`);
};

export default api;
