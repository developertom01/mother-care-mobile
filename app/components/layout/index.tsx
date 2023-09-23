import { Text, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import Container from "../Container";

const Layout: React.FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {title && (
        <Container>
          <Text className="text-2xl font-bold py-2">{title}</Text>
        </Container>
      )}
      {children}
    </ScrollView>
  );
};

export default Layout;
