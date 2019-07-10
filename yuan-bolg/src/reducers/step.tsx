import { StepModifyAction, TotalModifyAction, SWITCHSHOWAction, COLORCONSTAction, NUMBERCONSTAction } from '../actions/progress'
import { ADDSTEP, REMOVESTEP, ADDTOTAL, REMOVETOTAL, SWITCHSHOW, COLORCONST, NUMBERCONST } from '../constants'

export const stepReducer = (step = 0, action: StepModifyAction): number => {
  switch (action.type) {
    case ADDSTEP:
      return step += 1
      break;
    case REMOVESTEP:
      return step -= 1
      break;
    default:
      return step
      break;
  }
}

export const totalReducer = (total = 0, action: TotalModifyAction): number => {
  switch (action.type) {
    case ADDTOTAL:
      return total += 1
      break;
    case REMOVETOTAL:
      return total -= 1
      break;
    default:
      return total
      break;
  }
}

export const showReducer = (show = true, action: SWITCHSHOWAction): boolean => {
  switch (action.type) {
    case SWITCHSHOW:
      return show = !show
      break;
    default:
      return show
      break;
  }
}

export const colorReducer = (color = 'black', action: COLORCONSTAction): string => {
  switch (action.type) {
    case COLORCONST:
      return action.color
      break;
    default:
      return color
      break;
  }
}

// number1为上一次的number1 
// action.number1为当前的number1
export const numberReducer = (number1 = 0, action: NUMBERCONSTAction): number => {
  console.log('action: ', action)
  switch (action.type) {
    case NUMBERCONST:
      console.log(NUMBERCONST)
      return action.number1
      break;
    default:
      return number1
      break;
  }
}