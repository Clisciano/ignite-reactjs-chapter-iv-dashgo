import { Flex, Button, Stack, Icon, Box } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';
import { RiEyeFill, RiEyeOffFill} from "react-icons/ri";
import { useState } from 'react';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showEye, setShowEye] = useState(false)
  
  const { register, handleSubmit,formState ,formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShowEye(!showEye);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
       <Stack spacing="4">
        <Input 
          name="email"
          type="email"
          placeholder="Insira seu e-mail"
          value={email}
          label="E-mail"
          error={errors.email}
          {...register('email')}
          onChange={e => setEmail(e.target.value)}
        />
        <Flex> 
          <Input
            name="password"
            type={showEye ? "text" : "password"}
            label="Senha"
            placeholder="Insira sua senha"
            value={password}
            error={errors.password}
            {...register('password')}
            onChange={e => setPassword(e.target.value)}
          />
            
              {showEye ? (
                <Icon
                 as={RiEyeFill}
                 fontSize="20" 
                 style={{width: 50, position:"absolute", marginTop: 47, marginLeft: 250}}
                 onClick={handleClick}
                />
                ) : (
                <Icon 
                 as={RiEyeOffFill}
                 fontSize="20"
                 style={{width: 50, position:"absolute", marginTop: 47, marginLeft: 250}}
                 onClick={handleClick}
                />
              )}
        </Flex>
          
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
    
  )
}
