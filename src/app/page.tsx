"use client";
import styles from './page.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Box, Button, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react'

import { Logo } from '@/components/Logo';
import { OAuthButtonGroup } from '@/components/OAuthButtonGroup';
import { PasswordField } from '@/components/PasswordField';

export default function Home() {
  const { data } = useSession()
  return (
    // <div>
    //   {data?.user ? (
    //     <Button onClick={() => signOut()}>Sign Out</Button>
    //   ) : (
    //     <Button onClick={() => signIn()}>Sign In</Button>
    //   )}
    //   {data?.user?.email}
    // </div>
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Contact Administrator
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" onClick={() => signIn()}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
