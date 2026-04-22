import {
	createContext,
	type ReactNode,
	useContext,
	useState,
} from "react";

/**
 * Available modules in the system
 */
export type AppModule = "clientes" | "financeiro" | "arquivos";

/**
 * User data structure
 */
export interface UserData {
	username: string;
	email: string;
	token: string;
	modules: AppModule[];
}

interface AuthContextType {
	user: UserData | null;
	login: (data: UserData) => void;
	logout: () => void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "helios_auth_data";

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<UserData | null>(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		return saved ? JSON.parse(saved) : null;
	});

	const login = (data: UserData) => {
		setUser(data);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem(STORAGE_KEY);
	};

	const isAuthenticated = !!user?.token;

	return (
		<AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
