import ListPage from "./pages/ListPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./components/TabBar/TabBar";
import { TabBarButtonRenderer } from "./components/TabBar/TabBarButtonRenderer";
import ProfilePage from "./pages/ProfilePage";
import { StyleSheet, View, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import AddBookModal from "./components/Modals/AddBookModal";
import SystemNavigationBar from "react-native-system-navigation-bar";

const Tab = createBottomTabNavigator();

export default function MainContainer() {

  const [isOpen, setOpen] = useState<boolean>(false);
  const openModal = (): void => setOpen(true);
  const closeModal = (): void => setOpen(false);

  useEffect(() => {
    SystemNavigationBar.setBarMode("dark", "navigation")
  },[isOpen])

  return (
    <>
      <AddBookModal isOpen={isOpen} close={closeModal} />
      <View className="w-full h-full">
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{ header: () => null }}
            tabBar={props => <TabBar {...{ ...props, openModalAction: openModal }} />}
          >
            <Tab.Screen
              name={TabBarButtonRenderer.MATCH_ROUTE_NAME}
              component={ListPage}
              options={{ title: "Welcome" }}
            />
            <Tab.Screen
              name={TabBarButtonRenderer.LIST_ROUTE_NAME}
              component={ListPage}
              options={{ title: "Welcome" }}
            />
            <Tab.Screen
              name={TabBarButtonRenderer.MAP_ROUTE_NAME}
              component={ListPage}
              options={{ title: "Welcome" }}
            />
            <Tab.Screen
              name={TabBarButtonRenderer.PROFILE_ROUTE_NAME}
              component={ProfilePage}
              options={{ title: "Welcome" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>


  );
}
