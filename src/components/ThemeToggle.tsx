import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";

/**
 * Componente de alternância de tema (Dark/Light Mode).
 * Exibe um botão redondo flutuante que alterna entre os modos de cor.
 */
export function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			onClick={toggleColorMode}
			variant="subtle"
			aria-label="Alternar tema"
			borderRadius="full"
			position="fixed"
			top="4"
			right="4"
			zIndex="sticky"
			size="lg"
			boxShadow="md"
			colorPalette={colorMode === "dark" ? "yellow" : "blue"}
		>
			{colorMode === "dark" ? <LuSun /> : <LuMoon />}
		</IconButton>
	);
}
