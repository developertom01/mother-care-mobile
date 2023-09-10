import { View, Text, SafeAreaView } from "react-native";
import Colors from "../../constants/Colors";

const SafeArea = ({ ...props }: React.ComponentProps<typeof SafeAreaView>) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.background,
        flex: 1,
      }}
      {...props}
    />
  );
};

export default SafeArea;
