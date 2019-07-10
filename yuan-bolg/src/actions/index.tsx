import { INCREMENT, DECREMENT } from 'src/constants';

export interface INCREMENTAction {
  type: INCREMENT;
}

export interface DECREMENTAction {
  type: DECREMENT;
}

// 定义 modifyAction 类型, 包含 INCREMENTAction 和 DECREMENTAction 接口类型
export type ModifyAction = INCREMENTAction | DECREMENTAction


// 增加 state 次数的方法
export const increment = (): INCREMENTAction => ({
  type: INCREMENT
})

// 减少 state 次数的方法
export const decrement = (): DECREMENTAction => ({
  type: DECREMENT
})