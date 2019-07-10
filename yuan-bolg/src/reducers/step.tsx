import { StepModifyAction, TotalModifyAction } from '../actions/progress'
import { ADDSTEP, REMOVESTEP, ADDTOTAL, REMOVETOTAL } from '../constants'

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