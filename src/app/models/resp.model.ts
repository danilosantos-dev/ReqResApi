import { User } from "./user.model";

export class Resp{
    page: number | undefined;
    per_page: number | undefined;
    total: number | undefined;
    data: User[] | undefined;
    support: {
        url: "https://reqres.in/#support-heading";
        text: "To keep ReqRes free, contributions towards server costs are appreciated!";
    } | string | undefined;
}