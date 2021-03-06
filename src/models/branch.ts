import { v4 as uuidV4 } from "uuid";

import { Conflict } from "./conflict";

export interface Branch {
    _id: string;
    name: string;
    commit: string;
    time: Date;
}