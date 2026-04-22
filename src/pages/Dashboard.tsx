import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Dashboard() {
	return (
		<VStack align="flex-start" gap={4}>
			<Heading size="lg">Dashboard Overview</Heading>
			<Text color="gray.500">Bem-vindo ao painel administrativo.</Text>
		</VStack>
	);
}
