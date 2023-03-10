import { Button, Flex, Heading, Input } from '@chakra-ui/react';

const AddUserForm = () => {
  return (
    <form>
      <Flex py={5} direction={'column'}>
        <Heading mb={5} fontSize={'lg'} as={'h4'}>
          Add user
        </Heading>
        <Input mb={5} placeholder="Name..." />
        <Input placeholder="Age..." mb={5} />
        <Input placeholder="Email..." mb={5} />
        <Button colorScheme={'teal'}>Add</Button>
      </Flex>
    </form>
  );
};

export default AddUserForm;
