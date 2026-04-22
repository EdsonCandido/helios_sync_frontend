import { IconButton, type IconButtonProps } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";

/**
 * Componente de alternância de tema (Dark/Light Mode).
 */
export function ThemeToggle(props: IconButtonProps) {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			onClick={toggleColorMode}
			variant="outline"
			aria-label="Alternar tema"
			borderRadius="full"
			size="lg"
			boxShadow="md"
			colorPalette={colorMode === "dark" ? "yellow" : "blue"}
			{...props}
		>
			{colorMode === "dark" ? <LuSun /> : <LuMoon />}
		</IconButton>
	);
}
