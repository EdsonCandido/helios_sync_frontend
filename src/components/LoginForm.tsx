import { Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { InputGroup } from "./ui/input-group";
import { toaster } from "./ui/toaster";

export const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			if (email === "teste@helios.com" && password === "teste") {
				login({
					username: "Usuário Teste",
					email: "teste@helios.com",
					token: "static-token-123",
					modules: ["clientes", "financeiro", "arquivos"],
				});

				toaster.create({
					title: "Login realizado com sucesso.",
					description: "Bem-vindo de volta ao Helios ITR.",
					type: "success",
					duration: 3000,
				});
				navigate("/dashboard");
			} else {
				toaster.create({
					title: "Erro ao entrar.",
					description: "E-mail ou senha incorretos.",
					type: "error",
					duration: 3000,
				});
			}
		}, 1500);
	};

	return (
		<form onSubmit={handleLogin} style={{ width: "100%" }}>
			<VStack gap={4} align="stretch" w="100%">
				<Field label="Email" required>
					<Input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Digite seu email"
						size="lg"
						bg="whiteAlpha.100"
						_focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299E1" }}
					/>
				</Field>

				<Field label="Senha" required>
					<InputGroup
						w={"100%"}
						endElement={
							<Button
								h="1.75rem"
								size="sm"
								onClick={() => setShowPassword(!showPassword)}
								variant="ghost"
							>
								{showPassword ? "Esconder" : "Mostrar"}
							</Button>
						}
					>
						<Input
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Digite sua senha"
							size="lg"
							bg="whiteAlpha.100"
							_focus={{
								borderColor: "blue.400",
								boxShadow: "0 0 0 1px #4299E1",
							}}
						/>
					</InputGroup>
				</Field>

				<Button
					type="submit"
					colorPalette="blue"
					size="lg"
					width="full"
					mt={4}
					loading={isLoading}
					loadingText="Entrando..."
				>
					Entrar
				</Button>

				<Text textAlign="center" fontSize="sm" color="gray.500" mt={2}>
					Esqueceu a senha?
				</Text>
			</VStack>
		</form>
	);
};
