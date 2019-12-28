import {Express, Request, Response} from "express";

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}

