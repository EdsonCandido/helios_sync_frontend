import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Icon,
	Text,
	VStack,
} from "@chakra-ui/react";
import {
	LuFiles,
	LuLayoutDashboard,
	LuLogOut,
	LuUsers,
	LuWallet,
} from "react-icons/lu";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ThemeToggle } from "./ThemeToggle";

const SidebarItem = ({
	icon,
	label,
	href,
	active,
}: {
	icon: any;
	label: string;
	href: string;
	active: boolean;
}) => (
	<Box
		w="full"
		borderRadius="md"
		bg={active ? "blue.50" : "transparent"}
		color={active ? "blue.600" : "gray.600"}
		_dark={{
			bg: active ? "blue.900/40" : "transparent",
			color: active ? "blue.200" : "gray.400",
		}}
		_hover={{
			bg: active ? "blue.50" : "gray.100",
			_dark: {
				bg: active ? "blue.900/60" : "whiteAlpha.100",
				color: active ? "blue.200" : "gray.200",
			},
		}}
		transition="all 0.2s"
	>
		<Link to={href} style={{ display: "block", padding: "12px 16px", width: "100%", textDecoration: "none", color: "inherit" }}>
			<HStack gap={3}>
				<Icon as={icon} fontSize="lg" />
				<Text fontWeight={active ? "semibold" : "medium"}>{label}</Text>
			</HStack>
		</Link>
	</Box>
);

export const DashboardLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user, logout } = useAuth();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const menuItems = [
		{ icon: LuLayoutDashboard, label: "Dashboard", href: "/dashboard" },
		{ icon: LuUsers, label: "Clientes", href: "/dashboard/clientes" },
		{ icon: LuWallet, label: "Financeiro", href: "/dashboard/financeiro" },
		{ icon: LuFiles, label: "Arquivos", href: "/dashboard/arquivos" },
	];

	return (
		<Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.950" }}>
			{/* Navbar */}
			<Flex
				as="nav"
				pos="fixed"
				top={0}
				w="full"
				h="16"
				px={6}
				align="center"
				justify="space-between"
				bg="blue.600"
				_dark={{ borderColor: "whiteAlpha.100", bg: "blue.900" }}
				color="white"
				borderBottomWidth="1px"
				borderColor="whiteAlpha.200"
				zIndex="10"
			>
				<HStack gap={4}>
					<Heading size="md" color="white">
						Helios ITR
					</Heading>
				</HStack>

				<HStack gap={4}>
					<ThemeToggle
						size="sm"
						boxShadow="none"
						color="white"
						_hover={{ bg: "whiteAlpha.200" }}
					/>
					<Box textAlign="right" display={{ base: "none", md: "block" }}>
						<Text fontSize="sm" fontWeight="bold" color="white">
							{user?.username || "Usuário"}
						</Text>
						<Text fontSize="xs" color="whiteAlpha.800">
							{user?.email || "email@helios.com"}
						</Text>
					</Box>
				</HStack>
			</Flex>

			{/* Sidebar */}
			<Box
				as="aside"
				pos="fixed"
				left={0}
				top="16"
				w="64"
				h="calc(100vh - 4rem)"
				p={4}
				bg="white"
				_dark={{ bg: "gray.900", borderColor: "gray.800" }}
				borderRightWidth="1px"
				borderColor="gray.200"
				display={{ base: "none", md: "block" }}
			>
				<VStack gap={1} align="stretch" h="full">
					<VStack gap={1} align="stretch" flex={1}>
						{menuItems.map((item) => (
							<SidebarItem
								key={item.href}
								icon={item.icon}
								label={item.label}
								href={item.href}
								active={location.pathname === item.href}
							/>
						))}
					</VStack>

						<Button 
						onClick={handleLogout}
						borderRadius="md"
						cursor="pointer"
						 colorPalette="red" justifyContent={"center"} w={"full"}>
							<Icon as={LuLogOut} fontSize="lg" />
							<Text fontWeight="medium">Sair</Text>
						</Button>
				</VStack>
			</Box>

			{/* Main Content */}
			<Box ml={{ base: 0, md: 64 }} pl={8} pr={8} pt={20}>
				<Box
					bg="white"
					_dark={{ bg: "gray.900", borderColor: "gray.800" }}
					p={6}
					borderRadius="lg"
					boxShadow="sm"
					minH="calc(100vh - 8rem)"
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
};
