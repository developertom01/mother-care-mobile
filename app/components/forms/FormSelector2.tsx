import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
interface FormSelectorProp {
  label?: string;
  placeholder?: string;
  options: { value: any; label: string }[];
}

const FormSelector: React.FC<FormSelectorProp> = ({
  label,
  placeholder,
  options,
}) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [value, setValue] = useState<any>(null);
  const onSelect = (value: any) => {
    setValue(value);
    setDropDownOpen(false);
    console.log(value);
  };

  return (
    <View>
      {label && <Text className="py-2">{label}</Text>}
      <Pressable
        onPress={() => setDropDownOpen(!isDropDownOpen)}
        className="border border-violet-400 bg-gray-100 p-4 rounded-2xl w-full flex flex-row items-center "
      >
        <Text className="flex-1">{value || placeholder}</Text>
        <FontAwesome5Icon name="chevron-down" />
      </Pressable>
      {isDropDownOpen && (
        <View className="py-2 max-h-[200px]  overflow-hidden bg-gray-100 rounded-2xl mt-2">
          <ScrollView>
            {options?.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => onSelect(item.value)}
                className="border-b border-violet-300"
              >
                <Text className="py-4 text-center">{item.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default FormSelector;
