import { RegisterOptions } from 'react-hook-form'

export const required: (message?: string) => RegisterOptions = (message) => {
  return {
    required: {
      value: true,
      message: message || 'This field is required'
    }
  }
}

export const maxLength: (value: number, message?: string) => RegisterOptions = (value, message) => {
  return {
    maxLength: {
      value,
      message: message || 'Too many characters'
    }
  }
}
