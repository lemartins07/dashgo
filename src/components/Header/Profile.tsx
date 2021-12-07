import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leandro Martins</Text>
          <Text color="gray.300" fontSize="small">
            leandromartins85@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" nome="Leandro Martins" src="https://github.com/lemartins07.png" />
    </Flex>
  )
}
