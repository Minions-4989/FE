import { forwardRef } from 'react';

/**
//  * 사용예시
 * ```jsx
 * import Input from '../components/ui/Input/Input'
 * <Input type='text' name='email' value={signUpForm.email}/>
 * 
 * ```
 * @returns JSX.Element
 */

const Input = forwardRef(({ type='text', value, name, ...props }, ref) => {
  return <input {...props} type={type} value={value} name={name} ref={ref} />;
});

export default Input;
