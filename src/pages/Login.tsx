import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
	return (
		<Flex
			minH="100vh"
			w="100vw"
			align="center"
			justify="center"
			bg={{ base: "gray.50", _dark: "gray.900" }}
		>
			<Flex
				direction={{ base: "column", md: "row" }}
				w={{ base: "90%", md: "80%", lg: "1000px" }}
				maxW="1200px"
				bg={{ base: "white", _dark: "gray.800" }}
				boxShadow="2xl"
				borderRadius="xl"
				overflow="hidden"
			>
				{/* Left Side - Graphic/Branding */}
				<Box
					flex="1"
					bg="blue.600"
					color="white"
					p={{ base: 8, md: 12 }}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					position="relative"
					_before={{
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage:
							"radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent)",
					}}
				>
					<VStack align="flex-start" gap={6} zIndex={1}>
						<Heading as="h1" size="2xl" fontWeight="bold">
							Helios ITR
						</Heading>
						<Text fontSize="lg" opacity={0.9}>
							Bem-vindo ao sistema de gestão inteligente. Acesse sua conta para
							continuar.
						</Text>
					</VStack>
				</Box>

				{/* Right Side - Form */}
				<Box
					flex="1"
					p={{ base: 8, md: 16 }}
					display="flex"
					flexDirection="column"
					justifyContent="center"
				>
					<VStack gap={8} align="stretch">
						<Box>
							<Heading as="h2" size="xl" mb={2}>
								Acesse sua conta
							</Heading>
							<Text color="gray.500">Insira suas credenciais abaixo</Text>
						</Box>

						<LoginForm />
					</VStack>
				</Box>
			</Flex>
		</Flex>
	);
}
