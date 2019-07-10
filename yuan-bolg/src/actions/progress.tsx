import { ADDSTEP, REMOVESTEP, REMOVETOTAL, ADDTOTAL, SWITCHSHOW } from 'src/constants'

// step

export interface ADDSTEPAction {
  type: ADDSTEP
}

export interface REMOVESTEPAction {
  type: REMOVESTEP
}

// 定义 StepModifyAction 类型, 包含 ADDSTEPAction 和 REMOVESTEPAction 接口类型
export type StepModifyAction = ADDSTEPAction | REMOVESTEPAction


// 增加 step 次数的方法
export const addStep = (): ADDSTEPAction => ({
  type: ADDSTEP
})

// 减少 step 次数的方法
export const removeStep = (): REMOVESTEPAction => ({
  type: REMOVESTEP
})


// total

export interface ADDTOTALAction {
  type: ADDTOTAL
}

export interface REMOVETOTALAction {
  type: REMOVETOTAL
}

// 定义 TotalModifyAction 类型, 包含 ADDTOTALAction 和 REMOVETOTALAction 接口类型
export type TotalModifyAction = ADDTOTALAction | REMOVETOTALAction


// 增加 step 次数的方法
export const addTotal = (): ADDTOTALAction => ({
  type: ADDTOTAL
})

// 减少 step 次数的方法
export const removeTotal = (): REMOVETOTALAction => ({
  type: REMOVETOTAL
})


// show

export interface SWITCHSHOWAction {
  type: SWITCHSHOW
}

// 切换 show 的方法
export const switchShow = (): SWITCHSHOWAction => ({
  type: SWITCHSHOW
})