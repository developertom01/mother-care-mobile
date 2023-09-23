import { TextInput, Pressable, Text } from "react-native";
import React, { useState } from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
// import { Colors } from "../../utils/Colors";
import FormItem from "./FormItem";
interface FormInputProps {
  label?: string;
  value?: string;
  error?: string;
  placeholder?: string;
  type?: "password" | "text" | "number" | "textarea";
  onChange?: (text: string) => void;
  onBlur?: any;
  prefixComponent?: { Icon: ({ ...props }) => React.ReactNode; name: string };
}
const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  error,
  type = "text",
  onChange,
  onBlur,
  value,
  prefixComponent,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <FormItem
      inputClassName={type === "textarea" ? "h-[80px]" : ""}
      extraClassName="mt-2"
      label={label}
      error={error}
    >
      {prefixComponent && (
        <Text className="text-gray-800 pr-2">
          {<prefixComponent.Icon name={prefixComponent.name} size={22} />}
        </Text>
      )}
      <TextInput
        keyboardType={type === "number" ? "numeric" : "default"}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        secureTextEntry={type === "password" && !isPasswordVisible}
        className="text-violet-400 flex-1"
        // placeholderTextColor={Colors.voilet}
        placeholder={placeholder}
        multiline={type === "textarea"}
        numberOfLines={type === "textarea" ? 5 : 1}
      />
      {type === "password" && (
        <Pressable onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <FontAwesome5Icon color={"#ccc"} name="eye" size={18} />
        </Pressable>
      )}
    </FormItem>
  );
};

export default FormInput;
