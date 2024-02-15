import { UserPassingChat } from "./types.user";

export type ChatAreaInterface =
  | ChatAreaProfileInterface
  | ChatAreaChannelInterface;

export interface ChatAreaProfileInterface {
  userData: UserPassingChat;
  isProfile: true;
}
export interface ChatAreaChannelInterface {
  title: string;
  description: string;
  isProfile: false;
  isAdmin: Boolean;
}
