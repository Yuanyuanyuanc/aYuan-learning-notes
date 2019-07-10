import { StepModifyAction, TotalModifyAction, SWITCHSHOWAction } from '../actions/progress'
import { ADDSTEP, REMOVESTEP, ADDTOTAL, REMOVETOTAL, SWITCHSHOW } from '../constants'

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