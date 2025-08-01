import * as zxcvbn from 'zxcvbn' 

export function getPasswordStrength(value: string): zxcvbn.ZXCVBNResult{
    return zxcvbn.default(value)
    
}