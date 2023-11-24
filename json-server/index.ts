import fs from 'fs';
import path from 'path';

import jsonServer from 'json-server';
import { NextFunction } from 'webpack-dev-server';

const server: any = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (__: any, _: any, next: NextFunction) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });

    next();
});

// Эндпоинт для логина
server.post('/login', (req: any, res: any) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'),
        );
        const { users = [] } = db;

        const userFromBd = users.find(
            (user: any) =>
                user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e: any) {
        console.log(e);

        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req: any, res: any, next: NextFunction) => {
    if (!('authorization' in req.headers)) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});

export default server;
