import { RouteProps } from "react-router";

export interface ISecureComponent extends RouteProps{
    isAuthenticated:boolean
}