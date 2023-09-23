import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";
interface FormItemProps {
  label?: string;
  error?: string;
  extraClassName?: string;
  inputClassName?: string;
}
const FormItem: React.FC<PropsWithChildren<FormItemProps>> = ({
  label,
  children,
  error,
  extraClassName,
  inputClassName = "",
}) => {
  return (
    <View className={extraClassName}>
      {label && <Text className="py-2 font-bold">{label}</Text>}
      <View
        className={"border border-gray-400 bg-gray-100 h-[60px] px-4 rounded-xl w-full flex flex-row items-center ".concat(
          inputClassName
        )}
      >
        {children}
      </View>
      {error && <Text className="text-red-400  py-1">{error}</Text>}
    </View>
  );
};

export default FormItem;
