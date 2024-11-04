import { CalculatorState } from '../../context/Calculator/CalculatorContext.type';

export interface InputRangeProps {
  field: keyof  CalculatorState
}