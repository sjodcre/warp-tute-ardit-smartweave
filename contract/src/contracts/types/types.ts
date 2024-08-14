// src/contracts/types/types.ts

export interface ArditState {
    messages: Message[];
  }
  
interface Message {
id: number;
creator: string;
content: string;
votes: {
    addresses: string[];
    status: number;
};
}

  // src/contracts/types/types.ts

export interface ArditAction {
    input: ArditInput;
    caller: string;
  }
  
export interface ArditInput {
function: ArditFunction;
id: number;
content: string;
}

export type ArditFunction =
| 'postMessage'
| 'upvoteMessage'
| 'downvoteMessage'
| 'readMessage';

export type ArditResult = Message;

export type ContractResult = { state: ArditState } | { result: ArditResult };