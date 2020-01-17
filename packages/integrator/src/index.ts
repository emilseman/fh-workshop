import {Request, Response} from 'express';
import * as path from 'path';
import * as express from 'express';

const app = express();

app.use('/public', express.static(path.join(__dirname)));
app.get('/*', (req: Request, res: Response) => {
    const content = '<div id="root"></div>';
    const footer = '<script src="/public/client.js"></script>';
    res.status(200).send("ahoooj ujooo 222");
});

app.listen(3001, () => {console.log('running on port: 3001')});
