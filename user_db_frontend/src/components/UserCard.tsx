import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../App';

const UserCard = ({ user }: any) => {
  const { userData } = useContext<any>(UserContext);
  const addresses = userData.addresses.filter((address: { userId: any }) => address.userId === user.id);

  console.log(addresses);

  return (
    <Flex justifyContent={"space-between"} border={'1px solid lightgray'} borderRadius={5} p={5} shadow={'sm'} direction={'column'}>
      <Heading mb={2} fontSize={'xl'} as={'h2'}>
        {user.name}
      </Heading>
      <Text mb={2}>Age: {user.age}</Text>
      <Text mb={2}>Email: {user.email}</Text>
      <Text mb={2}>Addresses</Text>

      <Heading mb={2} fontSize={'lg'} as={'h3'}>
        Addresses:
      </Heading>

      <Flex direction={'column'}>
        {addresses.map((address: any) => (
          <Flex direction={'column'} key={address.id}>
            <Text mb={2}>
              Address: {address.street} {address.streetNo}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Button variant={'outline'} colorScheme={'teal'} mb={2}>
        Delete
      </Button>
      <Button variant={'solid'} colorScheme={'teal'} mb={2}>
        Edit
      </Button>
    </Flex>
  );
};
export default UserCard;
