import { forwardRef } from 'react';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Span from '../Span/Span';

const InputLabel = forwardRef(
  ({ label, type, name, value, alertText, ...props }, ref) => {
    return (
      <label>
      <Span text={label}/>
        <div>
          <Input {...props} type={type} name={name} value={value} ref={ref} />
          <Text text={alertText} />
        </div>
      </label>
    );
  }
);

export default InputLabel;
