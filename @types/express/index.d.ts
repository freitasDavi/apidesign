import { userTokenFormat } from "../../src/modules/auth";

declare global {
    namespace Express {
        interface Request {
            user: userTokenFormat
        }
    }
}