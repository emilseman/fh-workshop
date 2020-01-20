import { Request, Response } from 'express';
import * as path from 'path';
import * as express from 'express';
const app = express();

const PORT = 3001;
const publicFolder = path.join(__dirname, '..', 'dist-es');

app.use('/public', express.static(publicFolder));
app.get('/*', (req: Request, res: Response) => {
  const content = '<div id="root">React placeholder here</div>';
  const footer = '<script src="/public/client.js"></script>';
  res.status(200).send(content + footer);
});

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
  console.log(`Serving static content from ${publicFolder}`);
});
