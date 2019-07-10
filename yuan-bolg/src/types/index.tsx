// 定义 State 结构类型
export interface StoreState {
  state: number
}

// 定义 Step 类型
export interface StoreProgress {
  step: number;
  total: number;
  show?: boolean;
  color?: string;
  number1?: number;
}