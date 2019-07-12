import { StepModifyAction, TotalModifyAction, SWITCHSHOWAction, COLORCONSTAction } from '../actions/progress'
import { ADDSTEP, REMOVESTEP, ADDTOTAL, REMOVETOTAL, SWITCHSHOW, COLORCONST } from '../constants'

export const stepReducer = (step = 5, action: StepModifyAction): number => {
  console.log('step: ', step)
  console.log('action: ', action)
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

export const totalReducer = (total = 10, action: TotalModifyAction): number => {
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
