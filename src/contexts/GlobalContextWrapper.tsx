import { PortalProvider } from "@gorhom/portal";
import { UserBookContextWrapper } from "./UserBookContext/UserBookContext";
import AuthProvider from "./AuthorizationContext/AuthProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function GlobalContextWrapper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | undefined;
}) {
  return (
    <AuthProvider>
      <UserBookContextWrapper>
        <PortalProvider>{children}</PortalProvider>
      </UserBookContextWrapper>
    </AuthProvider>
  );
}
