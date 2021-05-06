import { 
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}
const InputBase = ({ name, label, error = null, ...rest }: InputProps) => {
  return(
    <FormControl isInvalid={!!error}> 
      {!!label && <FormLabel htmlFor={name} >{label}</FormLabel>}
        <ChakraInput
          name={name} 
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor:"gray.900"
          }}
          size="lg"
          {...rest}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);